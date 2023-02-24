export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  rating?: number;
  image_url?: string;
  quantity?: number;
  size: string;
  reviews?: ProductReview[];
  categoryId: number;
  discountId?: number;
}

export interface productCategory {
  id: number;
  name: string;
  description: string;
  products: Product[];
}

export interface ProductReview {
  id: number;
  productId: number;
  userId: number;
  rating: number;
  description: string | null;
}

export interface ProductInventory {
  id: number;
  productId: number;
  quantity: number;
}

export type ProductDiscount = {
  id: number;
  name: string;
  percentage_discount: number;
  active: boolean;
  code: string;
};

export interface Address {
  id: number;
  userId: number;
  phone1: string | null;
  phone2?: string | null;
  station: string | null;
}

export interface Orders {
  id: number;
  userId: number;
  productPaymentId: number;
  addressId: number;
  // TODO :make enum
  status: string;
  amount: number;
}

export interface OrderList {
  id: number;
  productId: number;
  orderId: number;
}

export interface Payment {
  id: number;
  provider: string;
  acc_number: string;
  userId: number;
}

// user
export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  image: string | null;
}


export interface County{
  name: string;
  id: number;
}

export interface Town{
 id: number;
  name: string;
  countyId: number;
}
