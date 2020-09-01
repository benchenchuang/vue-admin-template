import Vuex from 'vuex'
import Vue from 'vue'
import state from './modules/state';
import mutations from './modules/mutations';
import actions from './modules/actions';

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions
});

