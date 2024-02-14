import { useEffect, useState, createContext } from 'react'


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

export default ProductProvider