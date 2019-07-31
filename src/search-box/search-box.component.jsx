import React from 'react'
import './search-box.styles.css'

export const SearchBox = ({eventHandler, placeholder}) => {
    return(

    <input className = 'search' type = 'search' onChange = {eventHandler} placeholder = {placeholder} />)
}