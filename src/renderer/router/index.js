import Vue from 'vue'
import Router from 'vue-router'
import View from '@/renderer/components/View.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: require('@/renderer/components/Home').default,
    },
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/view/:id',
      component: View
    }
  ],
})
