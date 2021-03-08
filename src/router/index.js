import Vue from 'vue'
import VueRouter from 'vue-router'

/*
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
*/
const Msite = () => import('../pages/Msite/Msite')
const Search = () => import('../pages/Search/Search')
const Order = () => import('../pages/Order/Order')
const Profile = () => import('../pages/Profile/Profile')


import Login from "../pages/Login/Login";
import Shop from "../pages/Shop/Shop";
import ShopRatings from "../pages/Shop/ShopRatings/ShopRatings";
import ShopInfo from "../pages/Shop/ShopInfo/ShopInfo";
import ShopGoods from "../pages/Shop/ShopGoods/ShopGoods";

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: Msite, // 返回路由组件的函数, 只有执行此函数才会加载路由组件, 这个函数在请求对应的路由路径时才会执行
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/login',
      component: Login,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/shop',
      component: Shop,
      meta: {
        showFooter: false
      },
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        },
      ]
    },
  ]
})
