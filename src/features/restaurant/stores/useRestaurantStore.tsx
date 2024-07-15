import { create } from 'zustand';

type RestaurantState = {
  isVisibleSearchInput: boolean;
  setIsVisibleSearchInput: () => void;
};

export const useRestaurantStore = create<RestaurantState>((set) => ({
  isVisibleSearchInput: false,
  setIsVisibleSearchInput: () =>
    set((state) => ({ isVisibleSearchInput: !state.isVisibleSearchInput })),
}));
