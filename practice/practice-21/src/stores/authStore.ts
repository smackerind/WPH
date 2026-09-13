import { create } from 'zustand';

export type User = {
  id: number;
  name: string;
  email: string;
};

type AuthStore = {
  user: User | null;

  login: (user: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()((set) => ({
  user: null,

  login: (user) => {
    set({ user: user });
  },
  logout: () => {
    set({ user: null });
  },
}));
