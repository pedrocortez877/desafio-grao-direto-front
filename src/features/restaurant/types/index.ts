import { Product } from '@features/product/types';

export type Restaurant = {
  id: string;
  name: string;
  description: string;
  rating: number;
  timeToDelivery: string;
  deliveryPrice: number;
  menus?: Menu[];
};

export type Menu = {
  id: string;
  name: string;
  description: number;
  restaurantId: string;
  products?: Product[];
};
