/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.pokemondb.net',
        // port: '',
        // pathname: '/account123/**',
      }
    ]
  }
}

module.exports = nextConfig
