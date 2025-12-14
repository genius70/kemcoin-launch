// app/page.tsx

import React from 'react';
// 1. Import the MDX file. Next.js treats this as a component.
// The '@/' alias typically points to your project root. Adjust path if needed.
import KemCoinContent from '@/app/content/KemCoinPresale';

// If you want to use custom components (like the KemCoinAlert from the previous step)
// make sure to import them and define the provider/wrapper here, or globally in mdx-components.tsx
// import { KemCoinAlert } from '@/components/KemCoinAlert'; 

export default function HomePage() {
  return (
    // 2. You might want a container to center the content, especially for a long landing page.
    <div className="container max-w-4xl mx-auto px-4 py-10">
      
      {/* 3. Render the imported MDX content */}
      <KemCoinContent />
      
    </div>
  );
}

// Note: If you want to include components defined in mdx-components.tsx, you 
// don't need to wrap the KemCoinContent in an MDXProvider (that is handled 
// automatically by the Next.js MDX integration for the App Router).