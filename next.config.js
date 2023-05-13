/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://in-up.github.io/youlu'
      : '',
}

module.exports = nextConfig
