import { useState, useEffect } from "react"

// hooks
import { useProducts } from "../context/ProductContext"

// components
import SearchBox from "../components/SearchBox"



function ProductsPage() {

    const products = useProducts()


    return (
        <>
            <SearchBox />


            {
                products.map(item)
            }
        </>
    )
}

export default ProductsPage