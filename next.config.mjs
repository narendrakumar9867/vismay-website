/** @type {import('next').NextConfig} */
const nextConfig = {};

// export default nextConfig;
// // next.config.mjs

export default {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // PDF.js SSR issues fix
      config.resolve.alias.canvas = false;
      config.resolve.alias.encoding = false;
    }
    return config;
  },
};
