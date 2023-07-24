import { createStore } from "vuex";

const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, userData) {
      state.user = userData;
    },
  },
  actions: {
    login({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const user = {
            id: 1,
            name: "Usuario Ejemplo",
            email: "usuario@example.com",
          };
          commit("setUser", user);
          resolve();
        }, 1000);
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit("setUser", null);
        resolve();
      });
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.user !== null;
    },
    currentUser(state) {
      return state.user;
    },
  },
});

export default store;
