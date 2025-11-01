import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Categories from '../views/Categories.vue'
import CategoryDetail from '../views/CategoryDetail.vue'
import SpecialistDetail from '../views/SpecialistDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/categories',
      name: 'categories',
      component: Categories
    },
    {
      path: '/category/:slug',
      name: 'category-detail',
      component: CategoryDetail,
      props: true
    },
    {
      path: '/specialist/:id',
      name: 'specialist-detail',
      component: SpecialistDetail,
      props: true
    }
  ]
})

export default router
