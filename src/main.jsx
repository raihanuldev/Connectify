import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import UserLayout from './Layout/UserLayout.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import Home from './pages/home/Home.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element:<UserLayout/>,
    errorElement: <ErrorPage/>,
    children:[
    {
      path:'/',
      element: <Home/>
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
