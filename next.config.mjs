/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  generateEtags: false,
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        // Apply immutable cache to all static media and assets so they always serve with 200 (from cache)
        source: '/:all*(svg|jpg|jpeg|png|webp|gif|ico|webmanifest|mp4|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

