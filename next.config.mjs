/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pixabay.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
    ],
  },
  experimental: {
    appDir: true, // Ensure App Router is enabled
  },
  // We no longer use `output: export`
};

export default nextConfig;
