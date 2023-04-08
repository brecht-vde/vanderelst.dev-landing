/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'bin',
  experimental: {
    appDir: true, 
  },
}

module.exports = nextConfig