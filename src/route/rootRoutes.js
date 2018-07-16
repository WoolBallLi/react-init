import Detail from '../components/Detail'
import App from '../App'

const rootRoutes = [
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/',
    component: App
  },
]

export default rootRoutes
