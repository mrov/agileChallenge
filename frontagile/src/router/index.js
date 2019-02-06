import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import AccountHistory from '../views/AccountHistory.vue';
import AccountInfo from '../views/AccountInfo.vue';
import NewAccount from '../views/NewAccount.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/AccountHistory',
      name: 'AccountHistory',
      component: AccountHistory,
    },
    {
      path: '/AccountInfo',
      name: 'AccountInfo',
      component: AccountInfo,
    },
    {
      path: '/NewAccount',
      name: 'NewAccount',
      component: NewAccount,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
  ],
});
