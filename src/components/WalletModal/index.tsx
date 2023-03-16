import Modal, { ModalProps } from '@/components/Modal';
import ConnectorItem from '@/components/WalletModal/ConnectorItem';
import { useConnect } from 'wagmi';

interface WalletModalProps {
  onClose: ModalProps['onClose'];
  open: ModalProps['open'];
}

export default function WalletModal({ onClose, open }: WalletModalProps) {
  const { connect, connectors, isLoading, pendingConnector } = useConnect({
    onSuccess() {
      onClose?.(false);
    },
  });

  function getItems() {
    return connectors.map((connector) => {
      return (
        <li key={connector.id}>
          <ConnectorItem
            {...connector}
            isPending={isLoading && connector.id === pendingConnector?.id}
            onClick={() => connect({ connector })}
          />
        </li>
      );
    });
  }

  return (
    <Modal header={`Connect a Wallet`} onClose={onClose} open={open}>
      <div className='flex w-full flex-col space-y-6'>
        <div>
          <ul className='flex flex-col space-y-3'>{getItems()}</ul>
        </div>
        <div>
          <p className='text-xs text-neutral-400 dark:text-neutral-500'>
            By connecting a wallet, you agree to SplitFi’s Terms of Service and
            acknowledge that you have read and understand the Azqira Disclaimer.
          </p>
        </div>
      </div>
    </Modal>
  );
}
