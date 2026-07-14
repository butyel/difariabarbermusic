import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/barbearia-em-presidente-epitacio",
        destination: "/",
        permanent: true,
      },
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
