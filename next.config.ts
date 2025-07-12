import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
      viewTransition: true,
  },
};

//import { unstable_ViewTransition as ViewTransition } from 'react'

export default nextConfig;
