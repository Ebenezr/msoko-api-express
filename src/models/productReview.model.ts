export interface ProductReview  {
  id: number;
  productId: number;
  userId: number;
  rating: number;
  description: string | null;
};
