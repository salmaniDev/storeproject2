import React from 'react'

import { category } from '../constants/menuList'

function SideBar() {
    return (
        <div className='sticky top-[100px]'>
            {
                category.map(item => <li className='block mb-[15px]' key={item.id}>{item.type}</li>)
            }
        </div>
    )
}

export default SideBar