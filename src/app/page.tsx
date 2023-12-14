import WalletList from '@/templates/dashboard/wallet-list';
import DashboardHandlers from '@/templates/dashboard/handlers';
import PoolList from '@/templates/dashboard/treasury-list';

export default function DashboardPage() {
  return (
    <>
      <WalletList />
      <DashboardHandlers />
      <PoolList />
    </>
  );
}
