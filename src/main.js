import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router";
// import perfectScrollBar from './directive'
import ElementUI from 'element-ui';
import '../theme/index.css';
import { Plugin } from 'vue-fragment'
Vue.use(Plugin)

import * as filters from '@/utils/filters'
Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]));


Vue.config.productionTip = false

Vue.use(ElementUI,{ size: 'small'});

import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

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
