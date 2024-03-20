import React from 'react'
import { Header , Footer } from '../components/navigation/admin'


function AdminLayout({children}) {
  return (
    <>
    <div className="flex flex-col min-h-screen  bg-zinc-50">
    <Header />
    <div className="flex-grow">
        {children}
        </div>
    <Footer />
    </div>
    </>
  )
}

export default AdminLayout