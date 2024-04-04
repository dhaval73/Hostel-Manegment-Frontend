import { useEffect, useState } from 'react'
import { Header, Footer } from '../components/navigation/admin'
import authStore from '../store/authStore';
import { LoadingPage } from '../pages';
import { useNavigate } from "react-router-dom"

function AdminLayout({ children, authentication = false }) {
  const { user } = authStore((state) => ({ user: state.user }))
  const navigate = useNavigate()
  const isLoggedin = authStore((state) => state.isLoggedin)
  const authStatus = authStore((state)=> state.user.role == "Admin")
  console.log(authStatus);
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setLoader(true)
    if(isLoggedin){
      if (authentication && authStatus !== authentication) {
        navigate("/admin/login")
      } else if (!authentication && authentication !== authStatus) {
        navigate('/admin')
    }
  }else{
    navigate("/admin/login") 
  }
    
    setLoader(false)
  }, [authStatus, authentication, navigate, user,isLoggedin])

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