import WalletList from 'src/app/WalletList';
import DashboardHandlers from 'src/app/Handlers';
import PoolList from 'src/app/PoolList';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
} from '@chakra-ui/react';

export default function DashboardPage() {
  return (
    <>
      <WalletList />
      <DashboardHandlers />
      <PoolList />
    </>
  );
}
