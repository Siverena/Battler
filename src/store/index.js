import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth.js';
import adaptive from './modules/adaptive.js';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { auth, adaptive },
});
