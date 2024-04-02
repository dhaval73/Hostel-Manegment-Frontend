import { create } from 'zustand';
const authStore = create((set) => ({
  isLoggedin: false,
  user: {}, 
  login: (user) => set(() => ({ isLoggedin: true, user: user })),
  logout: () => set(() => ({ isLoggedin: false, user: {} })) 
}));

export default authStore;