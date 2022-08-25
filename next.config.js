/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'www.notion.so',
      'images.unplash.com'
    ]
  }
};

module.exports = nextConfig;
