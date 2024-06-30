/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dcgre5gxz/image/upload/**",
      },
    ],
    domains: ["lh3.googleusercontent.com"],
  },
  env: {
    SERVICE_BASE_URL: process.env.SERVICE_BASE_URL,
    SERVICE_API_KEY: process.env.SERVICE_API_KEY,
    SERVICE_API_KEY_VALUE: process.env.SERVICE_API_KEY_VALUE,
  },
};

module.exports = nextConfig;
