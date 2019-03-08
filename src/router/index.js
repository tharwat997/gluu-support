import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Tickets from '../pages/tickets/tickets'
import TicketDetail from '../pages/ticket_detail/ticket-detail'
import Profile from '../pages/profile/profile.vue'

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
    },
    {
      path:'/ticket-detail',
      name:'TicketDetail',
      component: TicketDetail
    },
    {
      path:'/profile',
      name:'Profile',
      component: Profile
    }
  ]
})
