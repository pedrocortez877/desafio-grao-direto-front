import { create } from 'zustand';
import { RestaurantState } from '../types';

export const useRestaurantStore = create<RestaurantState>((set) => ({
  isVisibleSearchInput: false,
  setIsVisibleSearchInput: () =>
    set((state) => ({ isVisibleSearchInput: !state.isVisibleSearchInput })),
}));
