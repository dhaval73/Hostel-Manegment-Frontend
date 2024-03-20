import { Outlet,useLocation } from "react-router-dom"
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
