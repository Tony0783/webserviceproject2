import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: !!localStorage.getItem('TMDb-Key'),
  }),
  actions: {
    login(apiKey) {
      localStorage.setItem('TMDb-Key', apiKey);
      this.isLoggedIn = true;
    },
    logout() {
      localStorage.removeItem('TMDb-Key');
      this.isLoggedIn = false;
    }
  }
});
