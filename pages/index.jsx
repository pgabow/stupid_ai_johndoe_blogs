import { useState, useEffect } from 'react'
import Head from 'next/head'
import { FaAngleDown, FaTerminal } from 'react-icons/fa'
import { PostCard, Categories, PostWidget, Button } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections'

export default function Home({ posts }) {
  const sortedPosts = (posts) => {
    return posts.sort((a, b) => {
      return new Date(b.node.createdAt) - new Date(a.node.createdAt)
    })
  }

  posts = sortedPosts(posts)

  const [limitPost, setLimitPost] = useState(5)
  let showPosts = posts.slice(0, limitPost)

  const [showViewMore, setShowViewMore] = useState(false)

  const handleViewMore = () => {
    setLimitPost((prev) => prev + 5)
    showPosts = posts.slice(0, limitPost)
  }

  useEffect(() => {
    if (posts.length > limitPost) {
      setShowViewMore(true)
    } else {
      setShowViewMore(false)
    }
  }, [limitPost])

  return (
    <div className='container mx-auto px-5 md:px-10 mb-8 mt-20 min-h-screen'>
      <Head>
        <title>Stupid AI-powered Blog John Doe</title>
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
        <meta property='og:title' content='Stupid AI-powered Blog John Doe' />
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
        <meta name='twitter:title' content='Stupid AI-powered Blog John Doe' />
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
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {showPosts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
          <div className='text-center mb-8 lg:mb-0'>
            {showViewMore && (
              <Button onClick={() => handleViewMore()}>
                <span className='flex flex-col items-center justify-center'>
                  <span className='text-sm'>see more</span>
                  <FaTerminal className='w-4 h-4 group-hover:translate-y-1 transition-all' />
                </span>
              </Button>
            )}
          </div>
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative lg:top-20'>
            <PostWidget categories={undefined} slug={undefined} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
    revalidate: 1,
  }
}
