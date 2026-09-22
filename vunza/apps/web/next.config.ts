import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@vunza/database",
    "@vunza/ui",
    "@vunza/types",
    "@vunza/shared",
    "@vunza/config",
  ],
};

export default nextConfig;
