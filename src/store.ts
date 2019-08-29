import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headTitle: 'css实用样式',
  },
  mutations: {
    setHeadTitle(state, title) {
      state.headTitle = title;
    },
  },
  actions: {

  },
});
