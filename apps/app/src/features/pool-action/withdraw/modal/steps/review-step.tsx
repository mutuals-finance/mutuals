import PoolCard, { type PoolCardProps } from "@/features/pool/card";

export type PoolReviewCardProps = PoolCardProps;

function PoolReviewCard(props: PoolReviewCardProps) {
  return <PoolCard {...props} />;
}

export type ReviewStepProps = PoolReviewCardProps;

export function ReviewStep(props: ReviewStepProps) {
  return (
    <div className={"flex w-full flex-col space-y-6"}>
      <p>You are about to create the following payment pool:</p>

      <PoolReviewCard {...props} />
    </div>
  );
}
