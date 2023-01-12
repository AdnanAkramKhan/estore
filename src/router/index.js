import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import ProductDetail from '../views/ProductDetail.vue'
import CategoryProduct from '../views/CategoryProduct.vue'
import SearchView from '../views/SearchView.vue'
import AddCart from '../views/AddCart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/product_detail',
    name: 'product_detail',
    component: ProductDetail
  },
  {
    path: '/searchview/:id',
    name: 'SearchView',
    component: SearchView
  },
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView
    // component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/category_product',
    name: 'category_product',
    component: CategoryProduct
  },
  {
    path: '/add_cart/:id',
    name: 'AddCart',
    component: AddCart
  },
]

const router = new VueRouter({
  routes
})

export default router
