import type { User } from "@privy-io/node";
import FeatureUpcoming from "@/features/user/feature-upcoming";

export interface AddressBookListProps {
  user?: User;
}

export default function AddressBookList(_: AddressBookListProps) {
  return (
    <FeatureUpcoming description="Managing your address book is currently planned but not yet available for use." />
  );
}
