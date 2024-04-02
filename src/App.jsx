import { Outlet, useLocation } from "react-router-dom"
import { AdminLayout, UserLayout } from "./Layout"
import { useEffect, useState } from "react"
import authStore from "./store/authStore"
import authService from "./service/auth"
import { LoadingPage } from "./pages"
function App() {
  const [loding ,setLoding]= useState(true)
  const location = useLocation()
  const {login , logout}= authStore((state)=>({login:state.login , logout:state.logout}))
  useEffect(()=>{
    try {
      (async ()=>{
       const res = await authService.getUser()
        if(res){
          console.log(res);
          login(res)
          setLoding(false)
        }else{
          setLoding(false)
          logout()
        }
      })()
    } catch (error) {
      console.log(error);
    }  
  },[login,logout])

  return (
    <>
    {!loding ? 
      <Outlet />
  :
  <div className=" w-screen h-screen flex justify-center items-center">
    <LoadingPage/>
  </div>
  }
    </>
  )
}

export default App
