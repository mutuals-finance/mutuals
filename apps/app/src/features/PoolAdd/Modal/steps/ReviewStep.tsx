import { Box, Text } from "@splitfi/ui";

import SplitCard from "@/components/Split/Card";

import { PoolAddData } from "@/features/PoolAdd/types";

interface ReviewStepProps {
  data: PoolAddData;
}

function SplitReviewCard({ image, name, description }: PoolAddData) {
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
      <Text mb={"6"}>You are about to create the following Split:</Text>

      <SplitReviewCard {...data} />
    </Box>
  );
}
