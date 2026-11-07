import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/about-contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
