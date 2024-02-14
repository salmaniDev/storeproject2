
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
            {/* <img src={image} alt={title} />
            <h1>{title}</h1>
            <p>{description}</p>
            <h3>{price}</h3> */}
        </>
    )
}

export default ProductDetails