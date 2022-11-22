import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({quote, getNewValues, backgroundObject, colorObject, backgroundButton}) => {
    console.log(quote)
    return (
        <article className='quoteBox'>
            <p style={colorObject}>{quote.quote}</p>
            <h4 style={colorObject}>{quote.author}</h4>
            <section className='quoteBox-footer'>
            <QuoteButton 
                getNewValues={getNewValues}
                backgroundButton={backgroundButton}/>
                <i style={colorObject} className='bx bxs-quote-alt-left'></i>
            </section>    
        </article>
    )
}

export default QuoteBox