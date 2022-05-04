import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import "./styles.css"
import { withPasswordProtect } from "@storyofams/next-password-protect";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

// Before: export default App;
export default process.env.PASSWORD_PROTECT
  ? withPasswordProtect(App, {
    // Options go here (optional)
    loginApiUrl: "/api/login",
  })
  : App;
