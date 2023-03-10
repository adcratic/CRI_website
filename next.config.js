/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: true },
};

module.exports = nextConfig;
