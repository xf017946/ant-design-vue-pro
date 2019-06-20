import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Button } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import Authority from '@/components/authority.vue';
import Auth from '@/directives/index.js';

Vue.config.productionTip = false;
Vue.use(Button);
Vue.component('Authority', Authority);
Vue.use(Auth);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
