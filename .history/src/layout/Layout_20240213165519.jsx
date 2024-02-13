import React from 'react'
import { Link } from 'react-router-dom'
import { PiShoppingCartSimpleBold } from 'react-icons/pi'

function Layout({ children }) {
    return (
        <>
            <nav className='flex justify-between'>
               
            </nav>
            {children}
            <footer>
                footer
            </footer>
        </>
    )
}

export default Layout