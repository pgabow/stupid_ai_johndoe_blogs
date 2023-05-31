import React from 'react'
import { Categories, Intro, PostWidget } from '../components'
import Head from 'next/head'

const intro = () => {
  const imageOgGen = `${process.env.NEXT_PUBLIC_URL_DEPLOY}/api/ogh?title=${encodeURIComponent(
    'About Stupid Blog Dream Team :)'
  )}`

  return (
    <div className='container mx-auto px-5 md:px-10 mb-8 mt-20 min-h-screen'>
      <Head>
        <title>About Stupid Blog Dream Team</title>
        <link rel='icon' href='/favicon.png' />
        <meta
          name='description'
          content='Always fresh the dumbest of the dumbest news and ideas!'
        />
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
        <meta property='og:title' content='About Stupid Blog Dream Team' />
        <meta
          property='og:description'
          content='Always fresh the dumbest of the dumbest news and ideas!'
        />
        <meta property='og:type' content='article' />
        <meta property='og:image' content={imageOgGen} />
        <meta property='og:image:url' content={imageOgGen} />
        <meta property='og:site_name' content='Stupid AI-powered Blog John Doe' />
        <meta property='og:url' content='https://stupid-ai-johndoe-blogs.vercel.app/intro' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@paul.gabow' />
        <meta name='twitter:title' content='About Stupid Blog Dream Team' />
        <meta
          name='twitter:description'
          content='Always fresh the dumbest of the dumbest news and ideas!'
        />
        <meta name='twitter:image' content={imageOgGen} />
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
