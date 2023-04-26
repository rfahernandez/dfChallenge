export interface Product {
  createdAt: Date;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: number;
}

export type Filters = 'earned' | 'redeemed' | null;
