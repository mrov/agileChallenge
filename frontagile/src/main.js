import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 100)
  next()
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
