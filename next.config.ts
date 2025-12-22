// next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Default page extensions
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],

  // Allow all external images currently used in your sections
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '4irelabs.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cheqd.io',  // <-- This fixes the current error
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tokenbrice.xyz',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'preview.redd.it',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.redd.it',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'external-preview.redd.it',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'globalextramoney.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dwptxtcjzzofa.cloudfront.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'public.bnbstatic.com',
        pathname: '/**',
      },
      // Add more if you introduce new external images later
    ],
  },
}

export default nextConfig