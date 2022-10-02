import { useEffect } from "react"

function CartTotal({currentSale, cartTotal, setCartTotal, setCurrentSale, counter}) {
    const format = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }

    useEffect(() => {
        setCartTotal(currentSale.reduce((accumulator, { price, amount }) => accumulator + (price * amount), 0))
    }, [counter, currentSale, setCartTotal])

    function handleClick() {
        setCurrentSale([])
        setCartTotal([])
    }

    return (
        <div className="cart__checkout">
            <div>
                <p>Total</p>
                <span>{Number(cartTotal).toLocaleString('pt-BR', format)}</span>
            </div>
            
            <button 
            type="button" 
            onClick={() => handleClick()} 
            className="cart__checkout__removeAll">Remover Todos</button>
        </div>
    )
}
export default CartTotal