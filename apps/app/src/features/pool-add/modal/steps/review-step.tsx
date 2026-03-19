import type { PoolCreateInput } from "@mutuals/sdk-react";
import { Box, Text } from "@mutuals/ui";

import type { UseFormReturn } from "react-hook-form";
import PoolCard from "@/features/pool/card";

interface ReviewStepProps extends UseFormReturn<PoolCreateInput> {}

function PoolReviewCard({ image: _image, name, description }: PoolCreateInput) {
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
