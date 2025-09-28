import { Box, Text } from "@mutuals/ui";

import PoolCard from "@/features/Pool/Card";

import { UseFormReturn } from "react-hook-form";
import { PoolCreateInput } from "@mutuals/sdk-react";

interface ReviewStepProps extends UseFormReturn<PoolCreateInput> {}

function PoolReviewCard({ image, name, description }: PoolCreateInput) {
  return (
    <PoolCard
      {...{
        id: "id",
        name: name ?? "",
        //image: image!.preview!.toString(),
        description: description ?? "",
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
