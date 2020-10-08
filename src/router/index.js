import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import '../assets/css/tailwind.css'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/connectivity',
    name: 'Connectivity',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Connectivity.vue')
  },
  {
    path: '/:id/ticket',
    name: 'Ticket',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Ticket.vue')
  },
  {
    path: '/admin/eventmanager',
    name: 'AdminEventManager',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminEventManager.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
