import React from 'react'
import { Categories, Intro, PostWidget } from '../components'
import Head from 'next/head'

const intro = () => {
    return (
      <div className='container mx-auto px-5 md:px-10 mb-8 mt-20 min-h-screen'>
        <Head>
          <title>About Stupid Blog Team</title>
          <link rel='icon' href='/favicon.png' />
          <meta
            name='description'
            content='Always fresh the dumbest of the dumbest news and ideas!'
          />
          <meta property='og:image:width' content='2400' />
          <meta property='og:image:height' content='1260' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no'
          />
          <meta http-equiv='author' content='P.Gabov' />
          <meta name='robots' content='index,follow' />
          <meta
            name='keywords'
            content='OpenAI, Open AI, AI, ИИ, next, react, Stupid, AI-powered, Blog, dumbest, news, ideas'
          />
          <meta property='og:locale' content='en_US' />
          <meta name='Address' content='Russia, Moscow' />
          <meta property='og:title' content='About Stupid Blog Team' />
          <meta
            property='og:description'
            content='Always fresh the dumbest of the dumbest news and ideas!'
          />
          <meta property='og:type' content='article' />
          <meta
            property='og:image'
            content="https://og.tailgraph.com/og?fontFamily=Roboto&title=Stupid%20John%20Doe's%20Blog&titleTailwind=font-bold%20text-orange-600%20text-%5B%23F83E00%5D%20mb-20%20text-6xl&titleFontFamily=Montserrat&text=%20AI-powered%20&textTailwind=mt-4%20text-5xl%20text-cyan-500&logoUrl=&logoTailwind=bg-blueGray-200%20text-center%20h-40%20object-top&bgUrl=&bgTailwind=bg-coolGray-800&overlayTailwind=bg-transparent&footer=https%3A%2F%2Fstupid-ai-johndoe-blogs.vercel.app&footerTailwind=text-orange-600%20text-%5B%23F83E00%5D&t=1685339518257&refresh=1"
          />
          <meta property='og:site_name' content='Stupid AI-powered Blog John Doe' />
          {/* <meta property='og:url' content='http://pgabow.ru/' /> */}
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content='@paul.gabow' />
          <meta name='twitter:title' content='About Stupid Blog Team' />
          <meta
            name='twitter:description'
            content='Always fresh the dumbest of the dumbest news and ideas!'
          />
          <meta
            name='twitter:image'
            content="https://og.tailgraph.com/og?fontFamily=Roboto&title=Stupid%20John%20Doe's%20Blog&titleTailwind=font-bold%20text-orange-600%20text-%5B%23F83E00%5D%20mb-20%20text-6xl&titleFontFamily=Montserrat&text=%20AI-powered%20&textTailwind=mt-4%20text-5xl%20text-cyan-500&logoUrl=&logoTailwind=bg-blueGray-200%20text-center%20h-40%20object-top&bgUrl=&bgTailwind=bg-coolGray-800&overlayTailwind=bg-transparent&footer=https%3A%2F%2Fstupid-ai-johndoe-blogs.vercel.app&footerTailwind=text-orange-600%20text-%5B%23F83E00%5D&t=1685339518257&refresh=1"
          />
          <meta name='format-detection' content='telephone=no' />
          <link rel='manifest' href='./manifest.json' />
        </Head>
        <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-12'>
          <div className='col-span-1 lg:col-span-8'>
            <Intro />
          </div>
          <div className='col-span-1 lg:col-span-4'>
            <div className='relative lg:sticky lg:top-20'>
              <PostWidget categories={undefined} slug={undefined} />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    )
}

export default intro