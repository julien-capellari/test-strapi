/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'tasteful-cabbage-5ce3a64417.media.strapiapp.com',
      }
    ],
  },
}

module.exports = nextConfig
