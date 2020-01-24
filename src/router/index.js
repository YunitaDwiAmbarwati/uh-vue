import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Navbar from '../views/Navbar.vue'
import Sidebar from '../views/Sidebar.vue'
import Footer from '../views/Footer.vue'
import Dashboard from '../views/Dashboard.vue'
import DataKantin from '../views/DataKantin.vue'
import DataMakanan from '../views/DataMakanan.vue'
import Pembelian from '../views/Pembelian.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'dashboard',
    components: {default:Dashboard, navbar:Navbar, sidebar:Sidebar, footer:Footer}
  },

  {
    path: '/DataKantin',
    name: 'datakantin',
    components: {default:DataKantin, navbar:Navbar, sidebar:Sidebar, footer:Footer}
  },

  {
    path: '/DataMakanan',
    name: 'datamakanan',
    components: {default:DataMakanan, navbar:Navbar, sidebar:Sidebar, footer:Footer}
  },

  {
    path: '/Pembelian',
    name: 'pembelian',
    components: {default:Pembelian, navbar:Navbar, sidebar:Sidebar, footer:Footer}
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  

]

const router = new VueRouter({
  routes
})

export default router
