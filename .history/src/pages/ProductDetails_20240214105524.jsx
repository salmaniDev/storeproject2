import React from 'react'
import { useParams } from 'react-router-dom'

import { useProductDetails } from '../context/ProductContext';

function ProductDetails() {

    const { id } = useParams()

    const productDetails = useProductDetails(+id)


    return (
        <div>ProductDetails</div>
    )
}

export default ProductDetails