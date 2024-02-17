import React from 'react'
import { Footer, Header } from '../components/navigation'

function UserLayout({ children }) {
    return (<>
        <Header />
        {children}
        <Footer />
    </>
    )
}

export default UserLayout