import { useEffect, useState } from 'react'
import { Header, Footer } from '../components/navigation/admin'
import authStore from '../store/authStore';
import { LoadingPage } from '../pages';
import { useNavigate } from "react-router-dom"

function AdminLayout({ children, authentication = false }) {
  const { user } = authStore((state) => ({ user: state.user }))
  const navigate = useNavigate()
  const authStatus = authStore((state) => state.isLoggedin)
  console.log(authStatus);
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setLoader(true)
    if (authentication && authStatus !== authentication) {
      navigate("/admin/login")
    } else if (!authentication && authentication !== authStatus) {
      if (user?.role != "Admin"){
        navigate("/admin/login")
      }
    }
    setLoader(false)
  }, [authStatus, authentication, navigate, user])

  return loader ?
    <><LoadingPage /></> :
    <>
      <div className="flex flex-col min-h-screen  bg-zinc-50">
        <Header />
        <div className="flex-grow  ">
          {children}
        </div>
        <Footer />
      </div>
    </>
}

export default AdminLayout