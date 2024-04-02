import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import authStore from "../store/authStore"
import { LoadingPage } from "../pages"
import { Footer, Header } from '../components/navigation'

function UserLayout({children , authentication = false  }) {
    const navigate = useNavigate()
    const authStatus = authStore((state)=>state.isLoggedin)
    console.log(authStatus);
    const [loader , setLoader]=useState(true)

    useEffect(()=>{
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        }else if (!authentication && authentication !== authStatus){
            
        }
        setLoader(false)
    },[authStatus , authentication , navigate])

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

export default UserLayout