/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        port: "",
        pathname: "/s/files/1/0551/9242/0441/products/**",
      },
    ],
    // domains: ["https://cdn.shopify.com/s/files/1/0551/9242/0441/products/"],
  },
};

module.exports = nextConfig;
