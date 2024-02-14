import React from 'react'

import { category } from '../constants/menuList'

function SideBar() {
    return (
        <div>
            {
                category.map(item => <li className='block mb-[15px] border-collapse' key={item.id}>{item.type}</li>)
            }
        </div>
    )
}

export default SideBar