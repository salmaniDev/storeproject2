
import { useParams } from 'react-router-dom'

import { useProductDetails } from '../context/ProductContext';

function ProductDetails() {

    const { id } = useParams()

    const { image, title, description, price } = useProductDetails(+id)

    return (
        <>
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
        <h3>{price}</h3>
      </>
    )
}

export default ProductDetails