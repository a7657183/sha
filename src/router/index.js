import Vue from 'vue';
import Router from 'vue-router';
import homePage from '@/modules/home-page';
import news from './news';
import personalCenter from './personal-center';
import release from './release';
import discover from './discover';
import plate from './plate';
import login from './login';
import order from './order';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'homePage',
    component: homePage,
    meta: {
      title: '首页入口'
    }
  },
  ...login,
  ...news,
  ...personalCenter,
  ...release,
  ...discover,
  ...plate,
  ...order
  ]
});
