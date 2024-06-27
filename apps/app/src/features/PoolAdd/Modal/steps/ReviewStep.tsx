import { Box, Text } from "@splitfi/ui";

import PoolCard from "@/features/Pool/Card";

import { PoolAddData } from "@/features/PoolAdd/types";

interface ReviewStepProps {
  data: PoolAddData;
}

function PoolReviewCard({ image, name, description }: PoolAddData) {
  return (
    <PoolCard
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
      <Text mb={"6"}>You are about to create the following Payment Pool:</Text>

      <PoolReviewCard {...data} />
    </Box>
  );
}
