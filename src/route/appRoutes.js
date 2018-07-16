import Kind from '../components/Kind'
import Cart from '../components/Cart'
import Home from '../components/Home'
import User from '../components/User'
import Ui from '../components/UI'

const appRoute = [
  {
    path: '/kind',
    component: Kind
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/ui',
    component: Ui
  },
  {
    path: '/home',
    component: Home
  }
]

export default appRoute