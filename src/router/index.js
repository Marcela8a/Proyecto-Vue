import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home-page.vue';
import About from '@/views/About-page.vue';
import Contact from '@/views/Contact-page.vue';
import ItemList from '@/components/ItemList.vue';

const routes = [
  {
    path: '/',
    name: 'Home-page',
    component: Home,
  },
  {
    path: '/about',
    name: 'About-page',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact-page',
    component: Contact,
  },

  {
    path: '/ItemList',
    name: 'ItemList',
    component: ItemList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
