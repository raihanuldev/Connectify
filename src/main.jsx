import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import UserLayout from './Layout/UserLayout.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import Home from './pages/home/Home.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import Login from './pages/Login/Login.jsx'
import SingUp from './pages/SingUp/SingUp.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      }, 
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/singup',
        element: <SingUp />
      }
    ]
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
