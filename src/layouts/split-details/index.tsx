import React from 'react';

import { SplitImage } from '@/components/Split/Image';

import { Header } from '@/layouts/split-details/Header';
import SplitDetailsMenu from '@/layouts/split-details/Menu';

/*
<div className={'flex items-center space-x-1.5'}>
    <SplitImage
        className={'w-8'}
        src={
            'ipfs://bafkreigqqcndcju2dgbagrwq5ste3f4tfw2427kttacbhjz6zokzm4k2fe'
        }
        alt={'Example'}
    />
    <h4 className={'title-4'}>Secchi</h4>
</div>
*/

export default function SplitDetailsLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <>
      <div>
        <Header
          title={'SplitFi'}
          address={'0x8bc7ccfac818a5f5ed0c7b327024b8075e4f1407'}
          image={
            'ipfs://bafybeign5hlhm67okrhpcc6p5yj754kjgltn2u7bfflwkdmmbdkrtbywte'
          }
        >
          <div className={'container py-3'}>
            <div className={'text-lighter w-full max-w-lg line-clamp-2'}>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <SplitDetailsMenu />
        </Header>
      </div>

      <div>{children}</div>
    </>
  );
}
