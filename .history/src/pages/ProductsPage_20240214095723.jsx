import { useState, useEffect } from "react"

// hooks
import { useProducts } from "../context/ProductContext"

// components
import SearchBox from "../components/SearchBox"
import Card from "../components/Card"



function ProductsPage() {

    const products = useProducts()


    return (
        <>
            <SearchBox />


            {
                products.map(item => <Card />)
            }
        </>
    )
}

export default ProductsPage