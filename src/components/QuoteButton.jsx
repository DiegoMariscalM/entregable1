import React from 'react'

const QuoteButton = ({getNewValues, backgroundButton}) => {
    return (
        <button onClick={getNewValues} style={backgroundButton}>
            <i className='bx bx-chevron-right'></i>
        </button>
    )
}   

export default QuoteButton