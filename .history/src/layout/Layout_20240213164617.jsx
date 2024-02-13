import React from 'react'

function Layout({ children }) {
    return (
        <>
            <nav className=''>navbar</nav>
            {children}
            <footer>
                footer
            </footer>
        </>
    )
}

export default Layout