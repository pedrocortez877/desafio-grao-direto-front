import storage, { StorageKey } from '@global/utils/storage';
import { create } from 'zustand';
import { AuthState, TokenObject } from '../types';

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
  clearToken: () => set({ token: null }),
  initializeToken: async () => {
    const tokenObject = await storage.get<TokenObject>(StorageKey.TOKEN);

    if (tokenObject) {
      set({ token: tokenObject.access_token });
    }
  },
}));
