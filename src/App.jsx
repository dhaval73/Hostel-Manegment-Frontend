

import Header from './components/navigation/Header'
import {Outlet} from "react-router-dom"
import HeaderNew from './components/navigation/HeaderNew'

function App() {
  return (
    <>
      <HeaderNew />
      <Outlet />
    
    </>
  )
}

export default App
