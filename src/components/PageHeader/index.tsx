import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';

import { ButtonLink } from '@/components/Button';

interface PageHeaderProps {
  title: string;
  titleBefore?: React.ReactNode;
  titleAfter?: React.ReactNode;
  showBack?: boolean;
}

export default function PageHeader({
  title,
  titleBefore,
  titleAfter,
  showBack = true,
}: PageHeaderProps) {
  const router = useRouter();

  return (
    <header className={'pt-6 lg:col-span-6'}>
      <div className={'container flex h-32 flex-col justify-end'}>
        {showBack && (
          <div className={'mb-auto'}>
            <ButtonLink icon={<IoArrowBack />} onClick={() => router.back()}>
              Back
            </ButtonLink>
          </div>
        )}

        <div className={'flex items-center justify-between space-x-6'}>
          <div
            className={
              'flex items-center justify-start space-x-3 overflow-hidden'
            }
          >
            {titleBefore}
            <h1 className={'title-2 truncate leading-normal'}>{title}</h1>
          </div>
          {titleAfter}
        </div>
      </div>
    </header>
  );
}
