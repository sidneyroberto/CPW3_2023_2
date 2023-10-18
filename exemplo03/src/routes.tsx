import { RouteObject } from 'react-router-dom'
import Login from './pages/Login'
import CreateUser from './pages/CreateUser'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/create-user',
    element: <CreateUser />
  },
  {
    path: '/home',
    element: <ProtectedRoute><Home /></ProtectedRoute>
  }
]