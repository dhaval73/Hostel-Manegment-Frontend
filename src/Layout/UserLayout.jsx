import React from 'react'
import { Footer, Header } from '../components/navigation'

function UserLayout({ children }) {
    return (<>
    <div className="flex flex-col min-h-screen  bg-zinc-50">
        <Header />
        <div className="flex-grow  ">
        {children}
        </div>
        <Footer />
    </div>
    </>
    )
}

export default UserLayout