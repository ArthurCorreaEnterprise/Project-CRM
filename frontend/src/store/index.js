import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      token: null,
      user: null,
    };
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
    },
    clearAuthData(state) {
      state.token = null;
      state.user = null;
    },
  },
  actions: {
    login({ commit }, authData) {
      return new Promise((resolve, reject) => {
        fetch('http://localhost:4000/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: authData.email,
            password: authData.password,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.token) {
              commit('setToken', data.token);
              commit('setUser', data.user);

              // Se "Remember Me" estiver marcado, salva no localStorage; caso contrário, salva no sessionStorage
              if (authData.rememberMe) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
              } else {
                sessionStorage.setItem('token', data.token);
                sessionStorage.setItem('user', JSON.stringify(data.user));
              }

              resolve(data);
            } else {
              reject('Authentication failed');
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    logout({ commit }) {
      commit('clearAuthData');
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
    },
    tryAutoLogin({ commit }) {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user') || sessionStorage.getItem('user'));
      if (token) {
        commit('setToken', token);
        commit('setUser', user);
      }
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.token !== null;
    },
    getUser(state) {
      return state.user;
    },
  },
});

export default store;
