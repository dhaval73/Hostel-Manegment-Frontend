import { createBrowserRouter } from "react-router-dom";
import { Contect, Home, Login, Rooms, SignUp } from '../pages/index.js';
import { Add_students_admin, Home_admin, Rooms_admin } from '../pages/admin/index.js';
import { AdminLayout, UserLayout } from '../Layout/index.js';
import App from '../App.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: (
        <UserLayout>
          <Home />
        </UserLayout>
      )
    },
    {
      path: "/login",
      element: (
        <UserLayout>
          <Login />
        </UserLayout>
      )
    },
    {
      path: "/sign_up",
      element: (
        <UserLayout>
          <SignUp />
        </UserLayout>
      )
    },
    {
      path: "/rooms",
      element: (
        <UserLayout authentication>
          <Rooms />
        </UserLayout>
      )
    },
    {
      path: "/contect",
      element: (
        <UserLayout>
          <Contect />
        </UserLayout>
      )
    },
    {
      path: "/admin",
      element: (
        <AdminLayout authentication>
          <Home_admin />

        </AdminLayout>
      )
    },
    {
      path: "/admin/add_student",
      element: (<AdminLayout authentication>

        <Add_students_admin />
      </AdminLayout>
      )
    },
    {
      path: "/admin/rooms",
      element: (
        <AdminLayout authentication>
          <Rooms_admin />
        </AdminLayout>
      )
    },
    {
      path: "/admin/login",
      element: (
        <AdminLayout>
          <Login />
        </AdminLayout>
      )
    }
  ]
}])

export default router