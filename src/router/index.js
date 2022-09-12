import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/pages/HomeView.vue';

import HelpPage from '@/pages/HelpPage/HelpPage.vue';
import ReferalPage from '@/pages/ReferalPage/ReferalPage.vue';
import MoneyPage from '@/pages/MoneyPage/MoneyPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/help',
    name: 'help',
    component: HelpPage,
  },
  {
    path: '/referal',
    name: 'referal',
    component: ReferalPage,
  },
  {
    path: '/money',
    name: 'money',
    component: MoneyPage,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
