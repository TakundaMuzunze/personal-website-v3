import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Avoid persisting build-time environment values in the deployment cache.
    turbopackFileSystemCacheForBuild: false,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
