import Link from 'next/link';

import { FragmentType, useFragment } from '@/lib/graphql/__generated__';
import { SplitBaseFragmentFragment } from '@/lib/graphql/__generated__/graphql';
import { splitBaseFragment } from '@/lib/graphql/fragments';
import clsxm from '@/lib/utils/clsxm';

import Date from '@/components/Date';
import { SplitImage } from '@/components/Split/Image';

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
    'rounded-default bg-default border border-default flex flex-col justify-end w-full p-6 h-52 space-y-3 transition';

  const splitCardContent = (
    <>
      <div className='mb-auto flex items-center justify-start space-x-1.5'>
        <div className={'flex-shrink-0'}>
          {!!metaData?.image && (
            <SplitImage
              className={'w-8'}
              src={metaData.image}
              alt={metaData?.name || 'UNKNOWN'}
            />
          )}
        </div>
        <div className={'flex-1 overflow-hidden'}>
          <h3 className={'title-4 truncate'}>
            {metaData?.name === '' ? 'Unknown' : metaData?.name}
          </h3>
        </div>
      </div>

      <div className={'space-y-3'}>
        <div>
          <p className={'line-clamp-2 text-sm'}>{metaData?.description}</p>
        </div>
        <div>
          <Date className={'text-light text-xxs'} timestamp={timestamp} />
        </div>
      </div>
    </>
  );

  return (
    <article>
      {!!id ? (
        <Link
          className={clsxm(
            wrapperClass,
            `hover:bg-default-2 hover:-translate-y-2`
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
