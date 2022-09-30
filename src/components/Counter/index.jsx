import { useState } from "react"

function Counter({ setPrices, prices }) {
    const [counter, setCounter] = useState(0)

    function getPrice(event) {
        const li = event.target.parentElement.parentElement
        const priceTag = li.childNodes[2].childNodes[0]
        const priceFormattedString = priceTag.innerText.slice(3).replace(',', '.')
        const priceFormattedNumber = Number(priceFormattedString)

        const finalPrice = priceFormattedNumber * counter
        setPrices(finalPrice)
    }

    function addNumber(event) {
        setCounter(counter + 1)
        getPrice(event)
    }
    
    function subNumber(event) {
        setCounter(counter - 1)
        getPrice(event)
    }

    return (
        <div>
            <p>{counter}</p>
            <button onClick={(event) => addNumber(event)}>+</button>
            <button onClick={(event) => counter > 0 && subNumber(event)}>-</button>
        </div>
    )
}
export default Counter