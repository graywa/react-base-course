import About from '../Pages/About'
import PostIdPage from '../Pages/PostIdPage'
import Posts from '../Pages/Posts'
import Login from '../components/Login'

export const privateRoutes = [
  {path: '/posts', component: Posts, exact: true},
  {path: '/about', component: About, exact: true},
  {path: '/posts/:id', component: PostIdPage, exact: true},
]

export const publicRoutes = [
  {path: '/login', component: Login, exact: true},
]