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
  ],
});
