import { create } from 'zustand';

type GlobalState = {
  isVisibleSearchInput: boolean;
  setIsVisibleSearchInput: () => void;
};

export const useGlobalStore = create<GlobalState>((set) => ({
  isVisibleSearchInput: false,
  setIsVisibleSearchInput: () =>
    set((state) => ({ isVisibleSearchInput: !state.isVisibleSearchInput })),
}));
