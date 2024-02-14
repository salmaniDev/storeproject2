import React, { useState } from 'react'
import { ImSearch } from "react-icons/im"

function SearchBox() {

    const [serach, setSearch] = useState('')

    return (
        <>
            <div className="container mt-[50px]">
                <form>
                    <input type="text" placeholder='search' value={serach} onChange={e => setSearch(e.target.value)} />
                    <button><ImSearch /></button>
                </form>
            </div>
        </>
    )
}

export default SearchBox