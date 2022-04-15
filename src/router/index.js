import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/cart',
    name: 'CashOutPage',
    component: () => import('../views/Cashout.vue')
  },
  {
    path: '/signIn',
    name: 'SignInPage',
    component: () => import('../views/SignInPage.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../components/AdminDashBoard.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
