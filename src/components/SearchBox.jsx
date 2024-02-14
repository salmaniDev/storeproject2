import React, { useState } from 'react'
import { ImSearch } from "react-icons/im"

function SearchBox({ setQuery }) {

 

    const searchHandler = () => {
        setQuery(serach)
    }

    return (
        <>
            <div className="container">
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder='search' value={serach} onChange={e => setSearch(e.target.value)} />
                    <button onClick={searchHandler}><ImSearch /></button>
                </form>
            </div>
        </>
    )
}

export default SearchBox;