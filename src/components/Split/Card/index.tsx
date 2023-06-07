import Link from 'next/link';
import { IoEllipsisHorizontal } from 'react-icons/io5';

import { FragmentType, useFragment } from '@/lib/graphql/__generated__';
import { SplitBaseFragmentFragment } from '@/lib/graphql/__generated__/graphql';
import { splitBaseFragment } from '@/lib/graphql/fragments';
import {
  formatPrefixedAddress,
  getShortNameByChainId,
  shortenAddress,
} from '@/lib/utils';
import clsxm from '@/lib/utils/clsxm';

import { ButtonOutline } from '@/components/Button';
import Date from '@/components/Date';
import { SplitImage } from '@/components/Split/Image';

interface SplitFragmentCardProps {
  fragment: FragmentType<typeof splitBaseFragment>;
}

export function SplitFragmentCard(props: SplitFragmentCardProps) {
  const split = useFragment(splitBaseFragment, props.fragment);

  return <HorizontalSplitCard {...split} />;
}

type SplitCardProps = Partial<SplitBaseFragmentFragment>;

function HorizontalSplitCard({ id = '', metaData, timestamp }: SplitCardProps) {
  const wrapperClass =
    'flex flex-col justify-end rounded-default w-full p-3 transition';

  const splitCardContent = (
    <>
      <div className='flex items-start justify-between space-x-3'>
        <div>
          <div className={'flex items-start space-x-3'}>
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
              <h3 className={'title-4 mt-1 truncate leading-normal'}>
                {metaData?.name === '' ? 'Unknown' : metaData?.name}
              </h3>
              <span
                className={'text-light block text-xs slashed-zero leading-none'}
              >
                {shortenAddress(id)}
              </span>
            </div>
          </div>
        </div>

        <div
          className={
            'flex flex-col items-end justify-between space-y-3 self-stretch'
          }
        >
          <div className={'flex items-center space-x-3'}>
            <Date className={'text-xs'} timestamp={timestamp} />
            <ButtonOutline
              size={'xs'}
              rounded={'full'}
              icon={<IoEllipsisHorizontal />}
            />
          </div>

          {/*
          <IoArrowForward className={'-rotate-45 text-2xl'} />
*/}
        </div>
      </div>
    </>
  );

  return (
    <article>
      {!!id ? (
        <Link
          className={clsxm(wrapperClass, `hover:bg-default-2`)}
          href={`/splits/${formatPrefixedAddress(
            id,
            getShortNameByChainId(80001)
          )}`}
        >
          {splitCardContent}
        </Link>
      ) : (
        <div className={wrapperClass}>{splitCardContent}</div>
      )}
    </article>
  );
}

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
          href={`/splits/${formatPrefixedAddress(
            id,
            getShortNameByChainId(80001)
          )}`}
        >
          {splitCardContent}
        </Link>
      ) : (
        <div className={wrapperClass}>{splitCardContent}</div>
      )}
    </article>
  );
}
