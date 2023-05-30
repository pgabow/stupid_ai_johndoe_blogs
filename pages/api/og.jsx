import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import React from 'react'

export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
  try {
		console.log('ку')
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
      : "https://stupid-ai-johndoe-blogs.vercel.app/preview.png"

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            backgroundColor: 'white',
            backgroundImage: `url(${image})`,
            backgroundSize: '1200px 630px',
            fontSize: 40,
            letterSpacing: -2,
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              marginBottom: '60px',
              backgroundImage: 'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
              backgroundClip: 'text',
              '-webkit-background-clip': 'text',
              color: 'transparent',
              textDecoration: 'underline',
            }}
          >
            Stupid AI-powered Blog John Doe
          </div>
          <div
            style={{
              backgroundImage: 'linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))',
              backgroundClip: 'text',
              '-webkit-background-clip': 'text',
              color: 'white',
              fontSize: 70,
              lineHeight: 1.1,
              fontFamily: 'Montserrat',
              // fontWeight: 400,
            }}
          >
            {title}
          </div>
        </div>
      ),

      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
