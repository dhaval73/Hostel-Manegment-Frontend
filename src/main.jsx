import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Contect, Home, Login, Rooms} from './pages/index.js';

const router = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/login",
      element:<Login />
    },
    {
      path:"/rooms",
      element:<Rooms />
    },
    {
      path:"/contect",
      element:<Contect />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
