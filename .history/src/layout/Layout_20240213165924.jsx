import React from 'react'
import { Link } from 'react-router-dom'
import { PiShoppingCartSimpleBold } from 'react-icons/pi'

function Layout({ children }) {
    return (
        <>
            <nav className='bg-slate-300'>
                <div className="container flex justify-between">
                    <Link>Home</Link>

                    <Link className='flex ' to='/checkout'>
                        <span className='mr-[15px]'>0</span>
                        <PiShoppingCartSimpleBold />
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