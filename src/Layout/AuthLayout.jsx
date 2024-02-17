import React from 'react'
import { Footer } from '../components/navigation'

function AuthLayout({children}) {
    return (
        <>
    {children}
    <Footer/>
        </>
  )
}

export default AuthLayout