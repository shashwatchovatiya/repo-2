import path from "path";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@repo-1": path.resolve(__dirname, "../repo-1/src"),
    };
    return config;
  },
};

export default nextConfig;
