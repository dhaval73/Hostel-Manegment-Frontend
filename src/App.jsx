import { Outlet,useLocation } from "react-router-dom"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Contect, Home, Login, Rooms} from './pages/index.js';
import { AdminLayout, AuthLayout, UserLayout } from "./Layout"
function App() {
  const location = useLocation()

  return (
    <>
    {location.pathname.includes('/admin') ? 
    <AdminLayout>
    <Outlet />
    </AdminLayout>
  :

      <UserLayout>
        <Outlet />
      </UserLayout>

  }
    </>
  )
}

export default App
