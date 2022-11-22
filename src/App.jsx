import QuoteButton from "./components/QuoteButton"
import quoteDB from "./db/quote.json"
import colors from "./db/colors"
import { useState } from "react"
import QuoteBox from "./components/QuoteBox"


function App() {

  // const colors = ["#759eff", "#ffbf75", "#525558", "#ffa43a", "#3f8880"]

  const getRandomElement = (array) => {
    const randomIndex = Math.floor(array.length * Math.random())
    return array[randomIndex]
  }

  const [quote, setQuote] = useState(getRandomElement(quoteDB))
  const [color, setColor] = useState(getRandomElement(colors))



  const getNewValues = () => {
    const newQuote = getRandomElement(quoteDB)
    const newColor = getRandomElement(colors)
    setQuote(newQuote)
    setColor(newColor)
  }

  const backgroundObject = {
    backgroundColor: color
  }

  const backgroundButton = {
    backgroundColor: color
  }

  const colorObject = {
    color: color
  }

  return (
    <div className="App" style={backgroundButton}>
      <QuoteBox 
        quote={quote} 
        getNewValues={getNewValues} 
        colorObject={colorObject}
        // backgroundButton={backgroundButton}
      />
    </div>
  )
}

export default App
