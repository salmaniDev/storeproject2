
import { useParams } from 'react-router-dom'

import { useProductDetails } from '../context/ProductContext';
import Loader from '../components/Loader';

function ProductDetails() {

    const { id } = useParams()

    const data = useProductDetails(+id)


    const { image, title, description, price } = data

    return (
        <>
            {!data && <Loader />}
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h3>{product.price}</h3>
        </>
    )
}

export default ProductDetails