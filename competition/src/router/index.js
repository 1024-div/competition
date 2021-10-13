import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/User/Home')
  },
  {
    path: '/favlist',
    name: 'FavList',
    component: () => import('@/views/User/FavList')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('@/views/User/Chat')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/User/Category')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/Error/404')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
