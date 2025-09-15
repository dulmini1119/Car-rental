import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   experimental: {
    turbo: false, // disables Turbopack globally
  },

  images:{
     domains: [
      "media.graphassets.com",
      "ap-south-1.graphassets.com" // add this domain
    ],
  },
  
};

export default nextConfig;
