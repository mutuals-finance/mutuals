import { Box, Text } from "@mutuals/ui";

import PoolCard from "@/features/Pool/Card";

import { PoolAddData } from "@/features/PoolAdd/types";
import { toBigInt } from "ethers";

interface ReviewStepProps {
  data: PoolAddData;
}

function PoolReviewCard({ image, name, description }: PoolAddData) {
  return (
    <PoolCard
      timestamp={toBigInt(new Date().getTime())}
      metaData={{
        id: "id",
        name: name,
        image: image!.preview!.toString(),
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
