import React from 'react';
import Link from 'next/link';

export default function SidebarMeta() {
  return (
    <div
      className={
        'flex flex-shrink-0 flex-col px-4 py-2 text-center text-xs text-neutral-600/50 lg:px-8 lg:py-4'
      }
    >
      <p>Copyright © {new Date().getFullYear()}, SplitFi</p>
      <p>
        Website by <Link href={'https://decentum.co'}>Decentum</Link>
      </p>
    </div>
  );
}
