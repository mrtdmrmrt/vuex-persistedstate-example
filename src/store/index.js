import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import {modules} from './modules';

Vue.use(Vuex);
/*
const modules = {
  namespaced: true,
  state: {
    count: 0,
  },
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,
  },
  actions: {},
  getters: {},
};
*/
const store = new Vuex.Store({
  modules: {
    a: modules,
  },
  plugins: [createPersistedState()],
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
