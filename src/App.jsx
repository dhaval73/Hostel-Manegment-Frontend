import { Outlet } from "react-router-dom"
import { AuthLayout, UserLayout } from "./Layout"
function App() {
  return (
    <>
      <UserLayout>
        <Outlet />
      </UserLayout>
      {/* <AuthLayout>
        <Outlet />
      </AuthLayout>         */}
    </>
  )
}

export default App
