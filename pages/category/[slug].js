/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { FaAngleDown, FaTerminal } from 'react-icons/fa'

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader, NotFoundPage, Button } from '../../components';

const CategoryPost = ({ posts }) => {

  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  //not found page
  if (posts.length === 0) {
    return <NotFoundPage />
  }

  //get curent category name
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const getCategoryName = async () => {
      const categories = await getCategories();
      const currentCategory = categories.filter(
        (category) => category.slug === router.query.slug
      );
      setCategoryName(currentCategory[0].name);
    };
    getCategoryName();
  }, [router.query.slug]);

  //sort posts by date
  const sortedPosts = (posts) => {
    return posts.sort((a, b) => {
        return new Date(b.node.createdAt) - new Date(a.node.createdAt);
    })
  }

  posts = sortedPosts(posts);

  //view more
  const [limitPost, setLimitPost] = useState(5);
  let showPosts = posts.slice(0, limitPost);

  const [showViewMore, setShowViewMore] = useState(false);
  
  const handleViewMore = () => {
    setLimitPost(limitPost + 5);
    showPosts = posts.slice(0, limitPost);
  }

  useEffect(() => {
    if (posts.length > limitPost) {
      setShowViewMore(true);
    } else {
      setShowViewMore(false);
    }
  }, [limitPost])

	const imageOgGen = `${process.env.NEXT_PUBLIC_URL_DEPLOY}/api/ogh?title=${encodeURIComponent(
    `Topic: #${categoryName}`
  )}`

  return (
    <div className='container mx-auto px-5 md:px-10 mb-8 mt-20 min-h-screen'>
      <Head>
        <title>{`Topic: ${categoryName} | Stupid Blog`}</title>
        <link rel='icon' href='/favicon.png' />
        <link rel='apple-touch-icon' href='/apple-fav.png' />

        <meta
          name='description'
          content={`Always fresh dumbest of dumbest news and ideas in category ${categoryName} | Stupid Blog`}
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
        <meta property='og:title' content={`Topic: ${categoryName} | Stupid Blog`} />
        <meta
          property='og:description'
          content={`Always fresh dumbest of dumbest news and ideas in category ${categoryName} | Stupid Blog`}
        />
        <meta property='og:type' content='article' />
        <meta property='og:image' content={imageOgGen} />
        <meta property='og:image:url' content={imageOgGen} />
        <meta property='og:site_name' content='Stupid AI-powered Blog John Doe' />
        <meta property='og:url' content='https://stupid-ai-johndoe-blogs.vercel.app' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@paul.gabow' />
        <meta name='twitter:title' content={`Topic: ${categoryName} | Stupid Blog`} />
        <meta
          name='twitter:description'
          content={`Always fresh dumbest of dumbest news and ideas in category ${categoryName} | Stupid Blog`}
        />
        <meta name='twitter:image' content={imageOgGen} />
        <meta name='format-detection' content='telephone=no' />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          <div className='bg supports-backdrop-blur:bg-white/95 dark:bg-zinc-900/75 border border-sky-900 rounded-lg px-8 py-4 mb-8'>
            <p className='text-xl font-bold'>
              Tag's: <span className='text-blue-400'>#{`${categoryName}`}</span>
            </p>
          </div>
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
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await (getCategoryPost(params.slug)) || [];

  return {
    props: { posts },
    revalidate: 1,
  };
}

//get curent category name
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}