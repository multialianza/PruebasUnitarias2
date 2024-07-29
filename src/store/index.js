import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
  },
  getters: {
    getCount( state ) {
      return state.count;
    }
  },
  mutations: {
    INCREMENT( state ) {
      state.count++;
    },
    DECREMENT( state ) {
      state.count > 0 && state.count--;
    }
  },
  actions: {
    async increment( context ) {
      context.commit("INCREMENT")
    },
    async decrement( context ) {
      context.commit("DECREMENT")
    }
  },
  modules: {
  }
})
