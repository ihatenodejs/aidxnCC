import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lastfm.freetls.fastly.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'p0ntus.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

