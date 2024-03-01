import React from 'react'
import { Footer, Header } from '../components/navigation'

function UserLayout({ children }) {
    return (<>
    <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-grow">
        {children}
        </div>
        <Footer />
    </div>
    </>
    )
}

export default UserLayout