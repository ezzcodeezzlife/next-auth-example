import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

export default function Features(props :any){
    const features = [
        {
          name: 'Function from Description',
          description:
            'Generate a function just by describing what is needs to do. Choose of many programming languages.',
          icon: GlobeAltIcon,
          link: '/generate-function',
        },
        {
          name: 'Code to Explanation',
          description:
            'Any code explained in plain english',
          icon: ScaleIcon,
          link: '/code-to-explanation',
        },
        {
          name: 'Fix invalid Code',
          description:
            'To spot a missing character somewhere can be frustrating. This feature will help you to fix it.',
          icon: LightningBoltIcon,
          link: '/fix-invalid-code',
        },
        {
          name: 'Translate Languages',
          description:
            'Translate code to any programming language',
          icon: AnnotationIcon,
          link: '/translate',
        },
        {
          name: 'Class from Description',
          description:
            'Generate a class just by describing what is needs to do. Choose of many programming languages.',
          icon: AnnotationIcon,
          link: '/class-from-description',
        },
        {
          name: 'Get Language from Code',
          description:
            'Get the programming language from a code.',
          icon: AnnotationIcon,
          link: '/language-from-code',
        },
        {
          name: 'Function from Docstring',
          description:
            'Provide a docstring to generate the actual function.',
          icon: AnnotationIcon,
          link: '/docstring',
        },
        {
          name: 'Regex from Description',
          description:
            'Create a regex from a describtion like "check for email".',
          icon: AnnotationIcon,
          link: '/regex',
        },
        {
          name: 'Regex to Explanation',
          description:
            'Create a plain english explanation from a regex.',
          icon: AnnotationIcon,
          link: '/regex-explanation',
        },
        {
          name: 'Linux Command',
          description:
            'Get the linux commend from a description. ',
          icon: AnnotationIcon,
          link: '/linux',
        },
        {
          name: 'Get time complexity',
          description:
            '',
          icon: AnnotationIcon,
          link: '/time-complexity',
        },
        {
          name: 'Git Command from Description',
          description:
            'Find the Git Command you are looking for from a description.',
          icon: AnnotationIcon,
          link: '/git',
        },
        {
          name: 'Text Description to SQL Command',
          description:
            'Create a SQL command from a description.',
          icon: AnnotationIcon,
          link: '/text-to-sql-syntax',
        },
        {
          name: 'Generate HTML from Description',
          description:
            '',
          icon: AnnotationIcon,
          link: '/generate-html-from-description',
        },
        {
          name: 'Generate CSS from Description',
          description:
            '',
          icon: AnnotationIcon,
          link: '/css-from-description',
        },
        {
          name: 'Meta Tags from Description',
          description:
            '',
          icon: AnnotationIcon,
          link: '/meta',
        }
        
      ]

      return(
        <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">more features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
               Choose from a variety of different tools 
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Different areas are Programming, Web, Database and more Helper features.
            </p>
          </div>
    
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <a href={feature.link}>
                <div key={feature.name} className="relative  hover:bg-slate-100 rounded-md py-2">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
                </a>
              ))}
            </dl>
          </div>
        </div>
      </div>
      )
   
  
}