import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "difariabarbermusic.vercel.app" }],
        destination: "https://difariabarbermusic.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
