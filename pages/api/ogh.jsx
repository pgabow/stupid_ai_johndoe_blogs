import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import React from 'react'

export const config = {
  runtime: 'edge',
}
// color: #F83E00

export default async function handler(req) {
  try {
    console.log('ку home')
    const { searchParams } = new URL(req.url)
    // ?title=<title>
    // ?image=<image_url>
    const hasTitle = searchParams.has('title')
    const hasImage = searchParams.has('image')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 120)
      : 'Always fresh the dumbest of the dumbest news and ideas!'
    const image = hasImage
      ? searchParams.get('image')
      : 'https://stupid-ai-johndoe-blogs.vercel.app/ogHomePage.jpg'

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
            backgroundSize: '1200px 800px',
            fontSize: 60,
            letterSpacing: -2,
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          {/* <svg
            stroke='#0ea5e9'
            fill='#0ea5e9'
            stroke-width='0'
            viewBox='0 0 512 512'
            height='2em'
            width='2em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M160 320h12v16c0 8.84 7.16 16 16 16h40c8.84 0 16-7.16 16-16v-16h12c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32V16c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v16c-17.67 0-32 14.33-32 32v224c0 17.67 14.33 32 32 32zm304 128h-1.29C493.24 413.99 512 369.2 512 320c0-105.88-86.12-192-192-192v64c70.58 0 128 57.42 128 128s-57.42 128-128 128H48c-26.51 0-48 21.49-48 48 0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48zm-360-32h208c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H104c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8z'></path>
          </svg> */}
          <svg
            stroke='red'
            fill='red'
            stroke-width='0'
            viewBox='0 0 640 512'
            height='2em'
            width='2.5em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm144-248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm176 248c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z'></path>
          </svg>
          <div
            style={{
              marginTop: 50,
              marginBottom: 50,
              backgroundImage: 'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
              backgroundClip: 'text',
              '-webkit-background-clip': 'text',
              color: 'transparent',
            }}
          >
            Stupid AI-powered Blog John Doe
          </div>
          <div
            style={{
              backgroundImage: 'linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40))',
              backgroundClip: 'text',
              '-webkit-background-clip': 'text',
              color: 'transparent',
              fontSize: 70,
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 800,
      }
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
