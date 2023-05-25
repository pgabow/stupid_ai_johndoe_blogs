/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'https://app.hygraph.com/9b9833b4aa8c433e903fddcc322a23ec/master/settings/',
        permanent: true,
      },
      {
        source: '/analytics',
        destination: 'https://vercel.com/',
        permanent: true,
      },
    ]
  },
}
