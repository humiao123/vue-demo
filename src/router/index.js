
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: () => import('../components/HelloWorld.vue') },
    { path: '/index', component: () => import('../components/HelloWorld.vue') },
  ]
});