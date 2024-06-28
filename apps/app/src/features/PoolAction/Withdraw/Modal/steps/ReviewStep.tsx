import SplitCard from "@/features/Pool/Card";
import { toBigInt } from "ethers";

interface ReviewStepProps {
  data: any;
}

function SplitReviewCard({ image, name, description }: any) {
  return (
    <SplitCard
      timestamp={toBigInt(new Date().getTime())}
      metaData={{
        id: "id",
        name: name,
        image: image?.preview.toString(),
        description: description,
      }}
    />
  );
}

export function ReviewStep({ data }: ReviewStepProps) {
  return (
    <div className={"flex w-full flex-col space-y-6"}>
      <p>You are about to create the following Split:</p>

      <SplitReviewCard {...data} />
    </div>
  );
}
