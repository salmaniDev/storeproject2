
import { useParams } from 'react-router-dom'

import { useProductDetails } from '../context/ProductContext';

function ProductDetails() {

    const { id } = useParams()

    const data = useProductDetails(+id)

    const { image, title, description, price } = data

    return (
        <>
        </>
    )
}

export default ProductDetails