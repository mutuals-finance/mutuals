import React from 'react';

import SplitDetailsLayoutHeader from '@/layouts/split-details/Header';

export default function SplitDetailsLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <>
      <SplitDetailsLayoutHeader
        title={'SplitFi'}
        address={'0x8bc7ccfac818a5f5ed0c7b327024b8075e4f1407'}
        image={
          'ipfs://bafybeign5hlhm67okrhpcc6p5yj754kjgltn2u7bfflwkdmmbdkrtbywte'
        }
      />

      {children}
    </>
  );
}
