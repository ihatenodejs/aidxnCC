export interface AITool {
  name: string;
  icon?: React.ElementType;
  svg?: React.ReactNode;
  description: string;
  status: 'primary' | 'active' | 'occasional' | string;
  link?: string;
  usage?: string;
  price?: number;
  discountedPrice?: number;
}

export interface FavoriteModel {
  name: string;
  provider: string;
  review: string;
  rating: number;
}

export interface AIReview {
  tool: string;
  rating: number;
  pros: string[];
  cons: string[];
  verdict: string;
}