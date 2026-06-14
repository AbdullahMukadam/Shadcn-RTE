import { createMDX } from 'fumadocs-mdx/next';
import '@shadcn-RTE/env/web';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // typedRoutes: true, // disabled due to Next.js 16 bug with @base-ui/react Form types
  reactCompiler: true,
  transpilePackages: ['@shadcn-rte/editor'],
};

const withMDX = createMDX();
export default withMDX(nextConfig);
