import React from 'react'
import { Link } from 'react-router-dom'
import { PiShoppingCartSimpleBold } from 'react-icons/pi'

function Layout({ children }) {
    return (
        <>
            <nav className='flex justify-between'>
                <div className="container">
                    <Link>Home</Link>

                    <Link to='/checkout'><PiShoppingCartSimpleBold />

                        <span>0</span>
                    </Link>
                </div>
            </nav>
            {children}
            <footer>
                footer
            </footer>
        </>
    )
}

export default Layout