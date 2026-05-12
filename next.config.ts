import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/northside-dental-b",
  images: { unoptimized: true },
};

export default nextConfig;
