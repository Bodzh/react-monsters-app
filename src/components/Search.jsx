import React from 'react'
import './styles/search.css'

export const Search = ({ placeholder, handleChange }) => {
    return (
        <input className="search-input" 
               type="search"
               placeholder={placeholder}
               onChange={handleChange}>
        </input>
    )
}