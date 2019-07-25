import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// import flex from 'flex.css'
import 'flex.css'
import './utils/rem.js'
import '@/assets/css/common.css'   //   清除全局的默认样式

Vue.prototype.$axios = axios;

import MuseUI from 'muse-ui';
import Message from 'muse-ui-message';
import 'muse-ui/dist/muse-ui.css';
import district from './utils/district.js';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

//   iview
import { Carousel } from 'iview';

Vue.config.productionTip = false;


Vue.component('Carousel', Carousel);


Vue.use(Message);
Vue.use(MuseUI);
Vue.use(district);
Vue.use(iView);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
