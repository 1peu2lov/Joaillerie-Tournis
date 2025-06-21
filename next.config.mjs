/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirection www vers non-www pour Netlify
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.tournis.netlify.app',
          },
        ],
        destination: 'https://tournis.netlify.app/:path*',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
