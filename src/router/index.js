import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/quienes-somos',
    name: 'Quienes Somos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/QuienesSomos.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/Contacto.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link-class'
})

export default router
