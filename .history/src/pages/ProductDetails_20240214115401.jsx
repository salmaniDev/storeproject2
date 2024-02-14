
import { useParams } from 'react-router-dom'

import { useProductDetails } from '../context/ProductContext';
import Loader from '../components/Loader';

function ProductDetails() {

    const { id } = useParams()

    const data = useProductDetails(+id)


    return (
        <>
            {!data && <Loader />} 
            <img src={data.image} alt={title} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <h3>{data.price}</h3>
        </>
    )
}

export default ProductDetails