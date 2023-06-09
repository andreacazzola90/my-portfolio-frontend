/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'images.unsplash.com',
      'flowbite.s3.amazonaws.com'
    ],
  }
}

module.exports = nextConfig
