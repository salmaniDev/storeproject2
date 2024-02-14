import React from 'react'
import { Link } from 'react-router-dom'
import { TbListDetails, TbShoppingBagCheck } from 'react-icons/tb'

function Card({ id, title, image, price }) {
    return (
        <>
            <div className='card'>
                <img src={image} alt={title} />
                <h3 className='title'>{title}</h3>
                <p>{price}</p>
                <div className='actions'>
                    <Link to={`/products/${id}`}><TbListDetails /></Link>
                </div>
            </div>
        </>
    )
}

export default Card