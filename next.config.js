const { redirect } = require('next/dist/server/api-utils')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['daisyui.com', 'ui-avatars.com', 'res.cloudinary.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/admin/auth/login',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
