/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) config.cache = false
    return config
  },
  async rewrites() {
    return [
      {
        source: '/kohinoor-gen-more',
        destination: '/',
      },
      {
        source: '/kohinoor-gen-more/privacy-policy',
        destination: '/privacy-policy',
      },
    ]
  },
}
module.exports = nextConfig
