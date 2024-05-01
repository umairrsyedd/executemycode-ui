/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: ".build",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
