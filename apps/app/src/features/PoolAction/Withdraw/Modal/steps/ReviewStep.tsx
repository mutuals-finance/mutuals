import PoolCard from "@/features/Pool/Card";

interface ReviewStepProps {
  data: any;
}

function PoolReviewCard({ image, name, description }: any) {
  return (
    <PoolCard
      {...{
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
      <p>You are about to create the following payment pool:</p>

      <PoolReviewCard {...data} />
    </div>
  );
}
