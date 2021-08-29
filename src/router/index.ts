import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from "@/views/admin/Login.vue";
import AdminList from "@/views/admin/AdminList.vue";
import AdminDetail from "@/views/admin/AdminDetail.vue";

import { initFirebaseApp, getLoginUser } from '@/lib/firebase';

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth: boolean
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: false}
  },
  {
    path: '/admin/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false}
  },
  {
    path: '/admin/list',
    name: 'AdminList',
    component: AdminList,
    meta: { requiresAuth: true}
  },
  {
    path: '/admin/detail/:id?',
    name: 'AdminDetail',
    component: AdminDetail,
    props: true,
    meta: { requiresAuth: true}
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from) => {
  if(to.meta.requiresAuth) {
    const isAuthenticated = await getLoginUser();
    if(!isAuthenticated) router.push({name: "Login"});
  }
});

export default router;