// next.config.mjs

import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX, Markdown, and TSX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Add any other Next.js config here (e.g., images, webpack, etc.)
}

const withMDX = createMDX({
  // You can add remark or rehype plugins here if needed (e.g., for syntax highlighting, TOC generation, etc.)
  options: {
    // Example: To support GitHub Flavored Markdown
    // remarkPlugins: [require('remark-gfm')], 
  }
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)