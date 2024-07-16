import { Restaurant } from '@features/restaurant/types';

export type Favorite = {
  id: string;
  userId: string;
  restaurantId: string;
  restaurant: Restaurant;
};
