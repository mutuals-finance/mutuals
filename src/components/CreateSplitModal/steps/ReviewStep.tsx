import SplitCard from '@/components/SplitterCard';

import { CreateFormData } from '@/templates/split/new';

interface ReviewStepProps {
  data: CreateFormData;
}

function SplitReviewCard({ image, name, description }: CreateFormData) {
  return (
    <SplitCard
      timestamp={new Date().getTime()}
      metaData={{
        name: name,
        image: image?.preview,
        description: description,
      }}
    />
  );
}

export function ReviewStep({ data }: ReviewStepProps) {
  return (
    <div className={'flex w-full flex-col space-y-6'}>
      <p>You are about to create the following Split:</p>

      <SplitReviewCard {...data} />
    </div>
  );
}
