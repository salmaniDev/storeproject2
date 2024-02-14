import React, { useState } from 'react'
import { ImSearch } from "react-icons/im"

function SearchBox() {

    const [serach, setSearch] = useState('')

    return (
        <>
            <form>
                <input type="text" placeholder='search' value={serach} onChange={e => setSearch(e.target.value)} />
                <button><ImSearch /></button>
            </form>
        </>
    )
}

export default SearchBox