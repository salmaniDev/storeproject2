import React from 'react'
import { Link } from 'react-router-dom'
import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import { IoIosHeart } from "react-icons/io";

function Layout({ children }) {
    return (
        <>
            <nav className='bg-slate-300 py-6'>
                <div className="container flex justify-between ">
                    <Link className='text-[20px]'>Home</Link>

                    <Link className='flex items-center text-[20px]' to='/checkout'>
                        <span className='mr-[10px]'>0</span>
                        <PiShoppingCartSimpleBold className='align-middle' />
                    </Link>
                </div>
            </nav>
            {children}
            <footer className='flex justify-center items-center fixed bottom-0'>
                Designed with love <IoIosHeart className='text-red-600 ml-[5px] text-[20px]' />
            </footer>
        </>
    )
}

export default Layout