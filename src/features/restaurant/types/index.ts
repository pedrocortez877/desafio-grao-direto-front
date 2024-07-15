export type Restaurant = {
  id: string;
  name: string;
  description: string;
  rating: number;
  timeToDelivery: string;
  deliveryPrice: number;
};

export type CardRestaurantProps = {
  restaurant: Restaurant;
};

export type RestaurantState = {
  isVisibleSearchInput: boolean;
  setIsVisibleSearchInput: () => void;
};
