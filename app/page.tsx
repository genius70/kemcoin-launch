// app/page.tsx

import React from 'react';
// 1. Import the MDX file. Next.js treats this as a component.
// The '@/' alias typically points to your project root. Adjust path if needed.
import KemCoinContent from '@/app/content/KemCoinPresale';
import Header from '@/app/content/Header';
import Footer from '@/app/content/Footer';

// If you want to use custom components (like the KemCoinAlert from the previous step)
// make sure to import them and define the provider/wrapper here, or globally in mdx-components.tsx
// import { KemCoinAlert } from '@/components/KemCoinAlert'; 

export default function HomePage() {
  return (
    <>
      {/* Header component with presale links */}
      <Header />
      
      {/* 2. You might want a container to center the content, especially for a long landing page. */}
      {/* Updated: Added overflow control and full width wrapper for better mobile responsiveness */}
      <div className="w-full max-w-full overflow-x-hidden">
        
        {/* 3. Render the imported MDX content */}
        <KemCoinContent />
        
      </div>
      
      {/* Footer component with links and social icons */}
      <Footer />
    </>
  );
}

// Note: If you want to include components defined in mdx-components.tsx, you 
// don't need to wrap the KemCoinContent in an MDXProvider (that is handled 
// automatically by the Next.js MDX integration for the App Router).