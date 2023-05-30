/* eslint-disable react/prop-types */
import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { getPosts, getPostDetails } from '../../services'

import { PostDetail, Categories, PostWidget, Comments, CommentsForm, Loader, NotFoundPage } from '../../components'

const PostDetails = ({ post }) => {
	const tempForUrl = `&t=1685344677897&refresh=1`
	// const ogImageComplite = `https://og.tailgraph.com/og?fontFamily=Montserrat&title=&titleTailwind=font-bold%20text-cyan-400%20text-3xl%20text-right&titleFontFamily=Montserrat&text=${encodeURIComponent(
  //   post?.title
  // )}&textTailwind=font-medium%20text-white%20text-left%20text-7xl%20pt-20&textFontFamily=Raleway&logoUrl=https%3A%2F%2Fstupid-ai-johndoe-blogs.vercel.app%2Flogo.png&logoTailwind=text-center%20bg-transparent&bgUrl=${encodeURIComponent(
  //   post?.featuredImage.url
  // )}&bgTailwind=bg-no-repeat%20bg-cover%20bg-opacity-20&footer=https%3A%2F%2Fstupid-ai-johndoe-blogs.vercel.app&footerTailwind=text-xl%20underline%20text-cyan-500`
        {
          /* ${encodeURIComponent(post.title)} */
        }
        {
          /* ${encodeURIComponent(post.featuredImage.url)} */
        }
				const imageOgGen = `${process.env.NEXT_PUBLIC_URL_DEPLOY}/api/og?title=${encodeURIComponent(
          post?.title
        )}&image=${encodeURIComponent(post?.featuredImage.url)}`

  // console.log(ogImageComplite)
	const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  if (!post) {
    return <NotFoundPage />
  }

  return (
    <div className='container mx-auto px-5 md:px-10 mb-8 mt-20 min-h-screen'>
      <Head>
        <title>{`${post.title} | Stupid Blog`}</title>
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
        <link rel='icon' href='/favicon.png' />
        {/* <meta property='og:image:width' content='2400' />
        <meta property='og:image:height' content='1260' /> */}
        {/* <meta property='og:url' content='https://stupid-ai-johndoe-blogs.vercel.app/intro' /> */}
        <meta property='og:image' content={imageOgGen} />
        <meta property='og:image:url' content={imageOgGen} />
        {/* <meta
          property='og:image'
          content={`https://og.tailgraph.com/og?fontFamily=Montserrat&title=&titleTailwind=font-bold%20text-cyan-400%20text-3xl%20text-right&titleFontFamily=Montserrat&text=${encodeURIComponent(
            post?.title
          )}&textTailwind=font-medium%20text-white%20text-left%20text-7xl%20pt-20&textFontFamily=Raleway&logoUrl=https%3A%2F%2Fstupid-ai-johndoe-blogs.vercel.app%2Flogo.png&logoTailwind=text-center%20bg-transparent&bgUrl=${encodeURIComponent(
            post?.featuredImage.url
          )}&bgTailwind=bg-no-repeat%20bg-cover%20bg-opacity-20&footer=https%3A%2F%2Fstupid-ai-johndoe-blogs.vercel.app&footerTailwind=text-xl%20underline%20text-cyan-500&t=1685344677897&refresh=1`}
        /> */}
        <meta name='description' content={post.title} />
        <meta property='og:title' content="Stupid AI-powered John Doe's Blog" />
        <meta property='og:description' content={post.title} />
        <meta property='og:type' content='article' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:image' content={imageOgGen} />
        <meta name='twitter:card' content='summary_large_image' />

        <meta name='twitter:title' content="Stupid AI-powered John Doe's Blog" />
        <meta name='twitter:description' content={post.title} />
        {/* <meta
          name='twitter:image'
          content={`https://og.tailgraph.com/og?fontFamily=Montserrat&title=&titleTailwind=font-bold%20text-cyan-400%20text-3xl%20text-right&titleFontFamily=Montserrat&text=${encodeURIComponent(
            post?.title
          )}&textTailwind=font-medium%20text-white%20text-left%20text-7xl%20pt-20&textFontFamily=Raleway&logoUrl=https%3A%2F%2Fstupid-ai-johndoe-blogs.vercel.app%2Flogo.png&logoTailwind=text-center%20bg-transparent&bgUrl=${encodeURIComponent(
            post?.featuredImage.url
          )}&bgTailwind=bg-no-repeat%20bg-cover%20bg-opacity-20&footer=https%3A%2F%2Fstupid-ai-johndoe-blogs.vercel.app&footerTailwind=text-xl%20underline%20text-cyan-500&t=1685344677897&refresh=1`}
        /> */}
        <meta name='format-detection' content='telephone=no' />
        <link rel='manifest' href='./manifest.json' />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          <PostDetail post={post} />
          {/* <Author author={post.author} /> */}
          <Comments slug={post.slug} />
          <CommentsForm slug={post.slug} />
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative lg:top-20'>
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug)
  
    return {
      props: { post: data },
      revalidate: 10
    }
}

export async function getStaticPaths() {
    const posts = await getPosts()
  
    return {
        paths: posts.map(({ node: { slug }}) => ({ params : { slug }})),
        fallback: true
    }
}