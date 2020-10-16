import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router";
import mixin from "@/mixins";
import Plugin from '@/plugins'

Plugin();//element组件
import * as filters from '@/utils/filters'
Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]));

Vue.config.productionTip = false

import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)
Vue.mixin(mixin)
/**
 * 用于组件间通讯
 */
const EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
  $EventBus: {
    get: function() {
      return EventBus;
    },
  },
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
