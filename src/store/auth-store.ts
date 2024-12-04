import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Auth {
  user: User;
  access_token: string;
  token_type: string;
  expires_in: number;
}
interface AuthStore {
  auth: Auth | null;
  setAuth: (auth: Auth | null) => void;
}

export const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      auth: null,
      setAuth: (auth) => set({ auth }),
    }),
    {
      name: "auth-storage",
    }
  )
);
