import React from 'react'

import { category } from '../constants/menuList'

function SideBar() {
    return (
        <>
            {
                category.map(item => <li key={item.id}>{item.type}</li>)
            }
        </>
    )
}

export default SideBar