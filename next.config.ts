import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
   remotePatterns:[
    {
      protocol: "https",
      hostname: "a.imagem.app",
      port: "",

    }
   ]
  },
};

export default nextConfig;
