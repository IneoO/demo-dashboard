import Vue from 'vue';
import Router from 'vue-router';
import Clients from '@/components/Clients/Clients.vue';
import Dashboard from '@/components/Dashboard/Dashboard.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    }, {
      path: '/clients',
      name: 'Clients',
      component: Clients,
    },
  ],
});
