import Image from 'next/image';

import bgImage from '@/assets/images/bg.jpg';

export function SplitListWrapper({ children }: React.PropsWithChildren) {
  return (
    <div className={'relative grid w-full lg:grid-cols-5'}>
      <Image
        src={bgImage}
        width={800}
        height={400}
        alt={'Image'}
        className={'absolute left-0 top-0 h-full w-full'}
      />
      <div
        className={
          'bg-default absolute left-0 top-0 h-full w-full bg-opacity-80 dark:bg-opacity-80'
        }
      />
      {children}
    </div>
  );
}
