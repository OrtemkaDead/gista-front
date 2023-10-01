/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  sassOptions: {
    additionalData: '@import "@/assets/styles/main.scss";',
  },
}

module.exports = nextConfig
