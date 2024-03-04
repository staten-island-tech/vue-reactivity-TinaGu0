import { createRouter, createWebHistory } from 'vue-router'
import StoreFront from "../views/StoreFront.vue"
import GachaScreen from '../views/GachaScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/', //will show on page load
      name: 'default',
      component: StoreFront
    },
    {
      path: '/StoreFront',
      name: 'home',
      component: StoreFront
    },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      {
        path: '/GachaScreen',
        name: 'gacha',
        component: GachaScreen
      }
  ]
})

export default router
