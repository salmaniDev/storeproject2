import { useState, useEffect } from "react"

// hooks
import { useProducts } from "../context/ProductContext"

// components
import SearchBox from "../components/SearchBox"
import Card from "../components/Card"
import Loader from '../components/Loader'
import SideBar from "../components/SideBar"
import { useSearchParams } from "react-router-dom"



function ProductsPage() {

    const products = useProducts()
    const [searchParams, setSearchParams] = useSearchParams({})

    const [display, setDisplay] = useState([])
    const [serach, setSearch] = useState('')
    const [query, setQuery] = useState('')

    useEffect(() => {
        setDisplay(products)
    }, [products])

    useEffect(() => {
        setSearchParams(query)
    }, [query])


    return (
        <>
            <div className="container mt-[50px]">
                <SearchBox setQuery={setQuery} serach={serach} />

                <div className="mt-[80px] flex">
                    {!display.length && <Loader />}

                    <div className="grid grid-cols-4 gap-[40px] flex-1">
                        {display.map(i => <Card key={i.id} {...i} />)}
                    </div>
                    <SideBar />
                </div>



            </div>

        </>
    )
}

export default ProductsPage