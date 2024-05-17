import WalletDrawer from '@/app/(dashboard)/(home)/wallet/WalletDrawer';

export default function WalletEditPage({ params }: { params: { id: string } }) {
  return (
    <WalletDrawer
      title={'Manage Wallet'}
      defaultValues={{ name: 'Company Multisig', address: params.id }}
    />
  );
}
