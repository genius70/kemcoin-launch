// mdx-components.tsx

import type { MDXComponents } from 'mdx/types'

// This function is required by @next/mdx for the App Router
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows you to customize default HTML elements.
    // Example: h1: ({ children }) => <h1 style={{ color: 'red' }}>{children}</h1>,

    // Your custom components will be returned here
    ...components,
  }
}