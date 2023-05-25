import React from 'react'
import Head from 'next/head'
import { Button } from '..'

const NotFoundPage = () => {
    return (
      <div className='min-w-screen min-h-screen flex items-center justify-center'>
        <Head>
          <title>Page not found | Stupid Blog</title>
        </Head>
        <div className='col-span-1 lg:col-span-8'>
          <div className='text-center mt-40'>
            <h1 className='text-4xl font-bold mb-4'>{'Page not found :('}</h1>
            <p className='text-xl mb-4'>
              The page you are looking for does not exist or has been deleted.
            </p>
            <Button href='/'>Home page</Button>
          </div>
        </div>
      </div>
    )
}

export default NotFoundPage