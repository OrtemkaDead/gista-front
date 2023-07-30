/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    additionalData: '@import "@/assets/styles/main.scss";',
  },
}

module.exports = nextConfig
