import PoolCard from "@/features/pool/card";

interface ReviewStepProps {
  data: unknown;
}

function PoolReviewCard({ image, name, description }: unknown) {
  return (
    <PoolCard
      {...{
        id: "id",
        name,
        image: image?.preview.toString(),
        description,
      }}
    />
  );
}

export function ReviewStep({ data }: ReviewStepProps) {
  return (
    <div className={"flex w-full flex-col space-y-6"}>
      <p>You are about to create the following payment pool:</p>

      <PoolReviewCard {...data} />
    </div>
  );
}
