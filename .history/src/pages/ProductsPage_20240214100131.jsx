import { useState, useEffect } from "react"

// hooks
import { useProducts } from "../context/ProductContext"

// components
import SearchBox from "../components/SearchBox"
import Card from "../components/Card"
import Loader from '../components/Loader'



function ProductsPage() {

    const products = useProducts()

    const [display, setDisplay] = useState([])

    useEffect(() => {
        setDisplay(products)

        console.log(display);
    }, [products])


    return (
        <>
            <div className="container mt-[100px]">
                <SearchBox />

                {!display.length && <Loader />}

                {display.map(i => <Card key={i.id} />)}
            </div>

        </>
    )
}

export default ProductsPage