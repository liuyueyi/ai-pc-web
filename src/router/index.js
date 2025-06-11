import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import AboutView from '../views/AboutView.vue'
import WebAppView from '../views/WebAppView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: DetailView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/webapp',
    name: 'webapp',
    component: WebAppView
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router