import { create } from "zustand";

const useAuthStore = create((set) => ({
    isAuthenticated: false,
  user: null,
  login: (userData) => set({ 
    user: userData,
    isAuthenticated: true,
   }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));

export default useAuthStore;
