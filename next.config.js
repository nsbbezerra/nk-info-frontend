/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1380, 1920, 2048, 3840],
    domains: [
      "image.freepik.com",
      "img.freepik.com",
      "localhost",
      "vps34531.publiccloud.com.br",
    ],
  },
  trailingSlash: true,
  reactStrictMode: false,
};
