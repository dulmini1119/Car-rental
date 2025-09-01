import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   experimental: {
    turbo: false, // disables Turbopack globally
  },
  
};

export default nextConfig;
