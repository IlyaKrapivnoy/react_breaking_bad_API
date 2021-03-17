import React from 'react'
import spinner from '../../img/spinner.gif'

const Spinner = () => {
    return (
        <img 
            src={spinner} 
            style={{ width: 70, margin: 'auto', display: 'block' }} 
            alt='Loading' 
        />
    )
}

export default Spinner
