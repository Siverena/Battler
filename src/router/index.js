import Vue from 'vue';
import VueRouter from 'vue-router';

import HelpPage from '@/pages/HelpPage/HelpPage.vue';
import ReferalPage from '@/pages/ReferalPage/ReferalPage.vue';
import MoneyPage from '@/pages/MoneyPage/MoneyPage.vue';
import ProfilePage from '@/pages/ProfilePage/ProfilePage.vue';
import MainPage from '@/pages/MainPage/MainPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
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
    path: '/profile',
    name: 'profile',
    component: ProfilePage,
  },
  {
    path: '/money',
    name: 'money',
    component: MoneyPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
