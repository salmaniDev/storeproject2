
import { useParams } from 'react-router-dom'

import { useProductDetails } from '../context/ProductContext';

function ProductDetails() {

    const { id } = useParams()

    const data = useProductDetails(+id)

    console.log(data);

    const { image, title, description, price } = data

    return (
        <>
        </>
    )
}

export default ProductDetails