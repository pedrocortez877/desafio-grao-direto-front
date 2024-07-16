import storage, { StorageKey } from '@global/utils/storage';
import { create } from 'zustand';
import { TokenObject } from '../types';

export type AuthState = {
  token: string | null;
  firstName: string | null;
  setFirstName: (firstName: string) => void;
  setToken: (token: string) => void;
  clearToken: () => void;
  clearFirstName: () => void;
  initializeSession: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  firstName: null,
  setFirstName: (firstName) => set({ firstName }),
  setToken: (token) => set({ token }),
  clearToken: () => set({ token: null }),
  clearFirstName: () => set({ firstName: null }),
  initializeSession: async () => {
    const tokenObject = await storage.get<TokenObject>(StorageKey.TOKEN);

    if (tokenObject) {
      set({ token: tokenObject.access_token });
    }

    const firstName = await storage.get<string>(StorageKey.USER_FIRST_NAME);

    if (firstName) {
      set({ firstName });
    }
  },
}));
