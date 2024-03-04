import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Contect, Home, Login, Rooms} from './pages/index.js';
import {Add_students_admin, Home_admin, Rooms_admin} from './pages/admin/';

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
    },
    {
      path:"/admin",
      element:<Home_admin />
    },
    {
      path:"/admin/add_student",
      element:<Add_students_admin/>
    },
    {
      path:"/admin/rooms",
      element:<Rooms_admin/>
    },
    {
      path:"/admin/login",
      element:<Login/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
