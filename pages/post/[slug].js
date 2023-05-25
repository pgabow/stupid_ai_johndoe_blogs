/* eslint-disable react/prop-types */
import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { getPosts, getPostDetails } from '../../services'

import { PostDetail, Categories, PostWidget, Comments, CommentsForm, Loader, NotFoundPage } from '../../components'

const PostDetails = ({ post }) => {
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
        <meta property='og:image' content={post.featuredImage.url} />
        <meta name='description' content={post.title} />
        <meta property='og:title' content={post.title} />
        <meta property='og:description' content={post.title} />
        <meta property='og:type' content='article' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content={post.title} />
        <meta name='twitter:description' content={post.title} />
        <meta name='twitter:image' content={post.featuredImage.url} />
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