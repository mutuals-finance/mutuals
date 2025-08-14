import { Box, Text } from "@mutuals/ui";

import PoolCard from "@/features/Pool/Card";

import { PoolAddData } from "@/features/PoolAdd/types";
import { UseFormReturn } from "react-hook-form";

interface ReviewStepProps extends UseFormReturn<PoolAddData> {}

function PoolReviewCard({ image, name, description }: PoolAddData) {
  return (
    <PoolCard
      {...{
        id: "id",
        name: name,
        //image: image!.preview!.toString(),
        description: description,
      }}
    />
  );
}

export function ReviewStep({ getValues }: ReviewStepProps) {
  return (
    <Box>
      <Text mb={"6"}>You are about to create the following Payment Pool:</Text>

      <PoolReviewCard {...getValues()} />
    </Box>
  );
}
