import '@/assets/styles';
import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '@/assets/styles/iconfont/iconfont.css';

Vue.prototype.serverPath = '图片域名地址';

Vue.config.productionTip = false;

Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
