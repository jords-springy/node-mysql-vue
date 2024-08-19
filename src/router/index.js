import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/LoginView.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import( '../views/SignInView.vue')
  },
  {
    path: '/fruit',
    name: 'fruit',
    component: () => import( '../views/FruitView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
