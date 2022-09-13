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
      'images.unplash.com',
      's3.us-west-2.amazonaws.com'
    ]
  }
};

module.exports = nextConfig;
