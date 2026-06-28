import { createRouter, createWebHistory } from 'vue-router';
import PeopleView from '@/views/PeopleView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/people' },
    { path: '/people', component: PeopleView },
  ],
});

export default router;
