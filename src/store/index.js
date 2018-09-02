import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import state from './getters'
import mutations from './mutations'
import actions from './actions'

export default new Vuex.Store({
  mutations,
  actions,
  state
});
