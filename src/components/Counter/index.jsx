function Counter({ counter, setCounter }) {
    function addNumber() {
        setCounter(counter + 1)
    }
    
    function subNumber() {
        setCounter(counter - 1)
    }

    return (
        <div className="cart__counter cart__content">
            <p>{counter}</p>
            <button onClick={() => addNumber()}>+</button>
            <button onClick={() => counter > 1 && subNumber()}>-</button>
        </div>
    )
}
export default Counter