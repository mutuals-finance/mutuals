import { Box, Text } from '@chakra-ui/react';

import SplitCard from '@/components/Split/Card';

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
        image: image?.preview.toString(),
        description: description,
      }}
    />
  );
}

export function ReviewStep({ data }: ReviewStepProps) {
  return (
    <Box>
      <Text mb={'6'}>You are about to create the following Split:</Text>

      <SplitReviewCard {...data} />
    </Box>
  );
}
