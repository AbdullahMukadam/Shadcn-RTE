import "@shadcn-RTE/env/web";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  reactCompiler: true,
  transpilePackages: ["@shadcn-rte/editor"],
};

export default nextConfig;
