import React from 'react'

import { category } from '../constants/menuList'

function SideBar() {
    return (
        <div className='flex'>
            {
                category.map(item => <li key={item.id}>{item.type}</li>)
            }
        </div>
    )
}

export default SideBar