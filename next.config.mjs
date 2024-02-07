/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
    source: "/",
    headers: [
      {
        key: "Cache-Control",
        value: "no-store",
      },
    ],
  },
};

export default nextConfig;
