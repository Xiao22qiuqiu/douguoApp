import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Recommend from '@/components/recommend/recommend'
import shoppingCart from '@/components/shopping-cart/shoppingCart'
import personalHomepage from '@/components/personalHomepage/personalHomepage'

import '@/base/css/font_386054_1xv8k5ba0ea02j4i/iconfont.css'
import '@/base/css/font_386481_g7zv91vlg08gp66r/iconfont.css'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart
    },
    {
      path: '/personalHomepage',
      name: 'personalHomepage',
      component: personalHomepage
    }
  ]
})
