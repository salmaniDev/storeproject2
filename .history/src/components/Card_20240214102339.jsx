import React from 'react'
import { Link } from 'react-router-dom'
import { TbListDetails, TbShoppingBagCheck } from 'react-icons/tb'
import { shortenText } from '../helper/helper'

function Card({ id, title, image, price }) {
    return (
        <>
            <div className='card text-center'>
                <img className='h-[100px] mx-auto' src={image} alt={title} />
                <h3 className='title'>{shortenText(title)}</h3>
                <p>{price}</p>
                <div className='actions'>
                    <Link to={`/products/${id}`}><TbListDetails /></Link>
                </div>
            </div>
        </>
    )
}

export default Card