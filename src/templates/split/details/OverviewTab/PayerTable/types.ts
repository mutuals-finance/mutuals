export type Payer = {
  payee: string;
  timestamp: string;
  isActive?: boolean;
};

export type PayerTableProps = {
  payers: Payer[];
};
