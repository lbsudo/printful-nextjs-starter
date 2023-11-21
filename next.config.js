/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.cdn.printful.com",
        port: "",
        pathname: "/files/**",
      },
    ],
  },
}

module.exports = nextConfig
