import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Tickets from '../pages/tickets'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/tickets',
      name:'Tickets',
      component: Tickets
    }
  ]
})
