import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/pages/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pilots',
    name: 'Pilots Dashboard',
    component: () => import(/* webpackChunkName: "pilots" */ '../views/pages/Pilots.vue')
  },
  {
    path: '/pilots/:name',
    name: 'Pilot Information',
    component: () => import(/* webpackChunkName: "pilot" */ '../views/pages/Pilot.vue')
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: () => import(/* webpackChunkName: "leaderboards" */ '../views/pages/Leaderboards.vue')
  },
  {
    path: '/races',
    name: 'Races',
    component: () => import(/* webpackChunkName: "races" */ '../views/pages/Races.vue')
  },
  {
    path: '/races/:name',
    name: 'Race Information',
    component: () => import(/* webpackChunkName: "race" */ '../views/pages/Race.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Page not found',
    component: () => import(/* webpackChunkName: "404" */ '../views/pages/404.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
