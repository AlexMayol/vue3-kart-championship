import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pilots',
    name: 'Pilots Dashboard',
    component: () => import(/* webpackChunkName: "pilots" */ '../views/Pilots.vue')
  },
  {
    path: '/pilots/:name',
    name: 'Pilot Information',
    component: () => import(/* webpackChunkName: "pilot" */ '../views/Pilot.vue')
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: () => import(/* webpackChunkName: "leaderboard" */ '../views/Leaderboard.vue')
  },
  { path: '/:pathMatch(.*)*',
  name: 'Page not found',
  component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')   
},  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
