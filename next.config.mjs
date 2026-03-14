/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
  // Reduce file watchers to avoid "EMFILE: too many open files" on macOS
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        ignored: /node_modules/,
      };
    }
    return config;
  },
};

export default nextConfig;
