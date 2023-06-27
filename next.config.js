/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["react.semantic-ui.com"],
  },
  sassOptions: {
    includePaths: ['/src/styles'],
  },
};
