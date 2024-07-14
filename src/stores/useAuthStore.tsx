import { create } from 'zustand';

type AuthState = {
  token: string | null;
  expiresAt: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  expiresAt: null,
  setToken: (token) => set({ token }),
  clearToken: () => set({ token: null, expiresAt: null }),
}));
