import { Stack } from "@mutuals/ui";
import AllocationFormTree from "@/features/Allocation/FormTree";

export default function PoolAddFormClaims() {
  return (
    <Stack>
      {/*        <AuthSignInCard
            description={
              "You must sign in to your account to configure allocations."
            }
          />*/}
      <AllocationFormTree id={"addClaims"} />
    </Stack>
  );
}
