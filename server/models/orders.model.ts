export interface Orders {
  id: number;
  userId: number;
  productPaymentId: number;
  addressId: number;
  // TODO :make enum
  status: string;
  amount: number;
}
