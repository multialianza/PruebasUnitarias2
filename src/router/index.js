import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ejercicio1View from '../views/Ejercicio1View.vue'
import Ejercicio2View from '../views/Ejercicio2View.vue'
import Ejercicio3View from '../views/Ejercicio3View.vue'
import Ejercicio4View from '../views/Ejercicio4View.vue'

// Creamos las rutas

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ejercicio-1',
    name: 'ejercicio1',
    component: Ejercicio1View
  },
  {
    path: '/ejercicio-2',
    name: 'ejercicio2',
    component: Ejercicio2View
  },
  {
    path: '/ejercicio-3',
    name: 'ejercicio3',
    component: Ejercicio3View
  },
  {
    path: '/ejercicio-4',
    name: 'ejercicio4',
    component: Ejercicio4View
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
