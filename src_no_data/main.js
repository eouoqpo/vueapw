import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'flex.css';
import './utils/rem.js';
import '@/assets/css/common.css';   //   清除全局的默认样式
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import district from './utils/district.js';
import axios from '../src/utils/axios';  //  引入 axios 进行获取数据
import 'muse-ui-message/dist/muse-ui-message.css';
import Message from 'muse-ui-message';

Vue.config.productionTip = false;


Vue.prototype.$http = axios;


Vue.use(Message);
Vue.use(MuseUI);
Vue.use(district);
// Vue.use(iView);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
