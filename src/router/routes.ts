import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/inicio',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'inicio', component: () => import('src/pages/HomePage.vue') },
      { path: 'contato', component: () => import('src/pages/ContactPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
