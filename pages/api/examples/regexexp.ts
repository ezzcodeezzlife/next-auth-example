// This is an example of to protect an API route
import { getSession } from "next-auth/react"
import type { NextApiRequest, NextApiResponse } from "next"
import rateLimit from "../../../utils/rate-limit"
import { env } from "process"

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
})

const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
  apiKey: env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await limiter.check(res, 4, "CACHE_TOKEN") // 8 requests per minute

  const session = await getSession({ req })

  //console.log(req.body)
  //console.log(req.body.textup)
  //console.log(req.body.selectedOption.value)

  console.log("content length", req.body.textup.length)
  if (req.body.textup.length > 1000) {
    res.status(400).json({
      message: "Please under 1000 chars",
    })
    return
  }

  if (session) {
    const { user } = session

    openai
      .createCompletion("content-filter-alpha", {
        //text-davinci-002,
        prompt: "<|endoftext|>" + req.body.textup + "\n--\nLabel:",
        temperature: 0,
        max_tokens: 1,
        top_p: 0,
        logprobs: 10,
      })
      .then(function (response: any) {
        console.log("content-filter score:", response.data.choices[0].text)
        if (response.data.choices[0].text === "0") {
          console.log("safe contnet")

          console.log("usermail:", user?.email)

          // add sending user id to the request

          openai
            .createCompletion("text-davinci-002", {
              prompt:
                "Please explain the following Regex: " +
                "\n\n" +
                req.body.textup +
                "\n\n\n\n\n\n\n",
              temperature: 0.7,
              max_tokens: 250,
              top_p: 1,
              frequency_penalty: 0,
              presence_penalty: 0,
              user: user?.email,
            })
            .then((response: any) => {
              console.log(response.data.choices[0].text)
              //res.status(200).json(response.data)
              try {
                res.status(200).json({ data: response.data.choices[0].text })
              } catch (err) {
                console.log(err)
              }
            })
            .catch((error: any) => {
              console.log(error)
              res.status(500).json(error)
            })
        } else {
          res.status(400).json({
            message: "Please under 1000 chars",
          })
        }
      })
  } else {
    res.send({
      error:
        "You must be signed in to view the protected content on this page.",
    })
  }
}
