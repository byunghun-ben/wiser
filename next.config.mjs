/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "m.wisely.store",
      },
    ],
  },
};

export default nextConfig;
