import Link from 'next/link';

import clsxm from '@/lib/utils/clsxm';

import Date from '@/components/Date';
import { SplitImage } from '@/components/SplitImage';

import { FragmentType, useFragment } from '@/graphql/__generated__';
import { SplitBaseFragmentFragment } from '@/graphql/__generated__/graphql';
import { splitBaseFragment } from '@/graphql/fragments';

interface SplitFragmentCardProps {
  fragment: FragmentType<typeof splitBaseFragment>;
}

export function SplitFragmentCard(props: SplitFragmentCardProps) {
  const split = useFragment(splitBaseFragment, props.fragment);

  return <SplitCard {...split} />;
}

type SplitCardProps = Partial<SplitBaseFragmentFragment>;

export default function SplitCard({ id, metaData, timestamp }: SplitCardProps) {
  const wrapperClass =
    'rounded-default bg-default border border-default flex flex-col w-full p-6 h-52 transition';

  const splitCardContent = (
    <>
      <div className='flex items-center justify-start space-x-2'>
        <div className={'flex-shrink-0'}>
          {!!metaData?.image && (
            <SplitImage
              src={metaData.image}
              alt={metaData?.name || 'UNKNOWN'}
            />
          )}
        </div>
        <div className={'flex-1 overflow-hidden'}>
          <h3 className={'text-default block truncate font-semibold'}>
            {metaData?.name === '' ? 'Unknown' : metaData?.name}
          </h3>
        </div>
      </div>
      <div className={'mt-auto py-2'}>
        <p className={'line-clamp-3'}>{metaData?.description}</p>
      </div>
      <div>
        <Date className={'text-xs'} timestamp={timestamp} />
      </div>
    </>
  );

  return (
    <article>
      {!!id ? (
        <Link
          className={clsxm(
            wrapperClass,
            `hover:bg-default-2 hover:-translate-y-2 hover:!pb-8`
          )}
          href={`/splits/${id}`}
        >
          {splitCardContent}
        </Link>
      ) : (
        <div className={wrapperClass}>{splitCardContent}</div>
      )}
    </article>
  );
}
