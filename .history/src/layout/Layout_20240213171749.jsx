import React from 'react'
import { Link } from 'react-router-dom'
import { PiShoppingCartSimpleBold } from 'react-icons/pi'

function Layout({ children }) {
    return (
        <>
            <nav className='bg-slate-300 py-6'>
                <div className="container flex justify-between items-center">
                    <Link>Home</Link>

                    <Link className='flex items-center' to='/checkout'>
                        <span className='mr-[15px]'>0</span>
                        <PiShoppingCartSimpleBold className='align-middle' />
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