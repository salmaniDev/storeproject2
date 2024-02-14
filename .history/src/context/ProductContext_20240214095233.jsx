import { useEffect, useState, createContext, useContext } from 'react'


import api from '../services/config'

const ProductContext = createContext()


function ProductProvider({ children }) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                setProducts(await api.get('/products'))
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()

        console.log(products);
    }, [])


    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
}


const useProducts = () => {
    const products = useContext(ProductContext)

    return products
}


export default ProductProvider

export { useProducts }