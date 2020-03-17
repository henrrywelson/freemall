import Vue from 'vue'
import Router from 'vue-router'
import Cart from './pages/Cart.vue'
import Address from './pages/Address.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'cart',
      component: Cart,
      meta: {
        auth: true
      }
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    }
  ]
})
