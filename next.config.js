/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.shopify.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        port: "",
        pathname: "/s/files/1/0551/9242/0441/products/**",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        port: "",
        pathname: "https://cdn.shopify.com/s/files/1/0551/9242/0441/files/**",
      },
    ],
    // domains: ["https://cdn.shopify.com/s/files/1/0551/9242/0441/products/"],
  },
};

module.exports = nextConfig;
