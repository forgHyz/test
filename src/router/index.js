import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/buju',
      name: 'buju',
      redirect: '/buju/colum',
      component: () => import('../page/buju'),
      children: [
        {
          path: 'colum',
          name: 'colum',
          component: () => import('../page/colum')
        },
        {
          path: 'box',
          name: 'box',
          component: () => import('../page/box')
        },
        {
          path: 'flex',
          name: 'flex',
          component: () => import('../page/flex')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../page/login'),
      children: []
    },
    {
      path: '/animate',
      name: 'animte',
      component: () => import('../page/animate/bone'),
      children: []
    }
  ]
})
