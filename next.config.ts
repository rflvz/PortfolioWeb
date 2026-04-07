import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.100"],
  transpilePackages: ["@paper-design/shaders-react", "@paper-design/shaders"],
};

export default nextConfig;
