export type Product = {
  id: number;
  name: string;
  description: string | null | undefined;
  price: number;
  rating: number | null | undefined;
  image_url: string;
  size: string;
  reviews: ProductReview[] | null | undefined;
  categoryId: number;
  discountId: number | null | undefined;
};

export type ProductCategory = {
  id: number;
  name: string;
  code: string;
  products: Product[] | null | undefined;
};

export type ProductReview = {
  id: number;
  productId: number;
  userId: number;
  rating: number;
  description: string | null | undefined;
};

export type ProductInventory = {
  id: number;
  productId: number;
  quantity: number;
};

export type ProductDiscount = {
  id: number;
  name: string;
  percentage_discount: number;
  active: boolean;
  code: string;
};

export type Address = {
  id: number;
  userId: number;
  phone1: string;
  phone2: string | null | undefined;
  station: string | null | undefined;
};

export type Orders = {
  id: number;
  userId: number;
  productPaymentId: number;
  addressId: number;
  // TODO :make enum
  status: string;
  amount: number;
};

export type OrderList = {
  id: number;
  productId: number;
  orderId: number;
};

export type productPayment = {
  id: number;
  provider: string;
  acc_number: string;
  userId: number;
};

// user
export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  image: string | null | undefined;
};
