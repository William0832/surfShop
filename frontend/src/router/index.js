import Vue from 'vue'
import VueRouter from 'vue-router'
import Notfound from '../views/NotFound.vue'
import Signin from '../views/Signin.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/SkateProducts.vue')
  },
  {
    path: '/skates',
    name: 'skates',
    component: () => import('../views/SkateProducts.vue')
  },
  {
    path: '/skates/:id',
    name: 'skate',
    component: () => import('../views/ProductDetail.vue')
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: Signin
  },
  {
    path: '*',
    name: 'not-found',
    component: Notfound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
