function CartTotal({currentSale, prices, cartTotal, setCartTotal, setCurrentSale, setPrices}) {
    const format = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }

    setCartTotal(currentSale.reduce((accumulator, { price }) => accumulator + price, 0))
    setCartTotal(oldValue => oldValue + prices)

    function handleClick() {
        setCurrentSale([])
        setCartTotal([])
        setPrices([])
    }

    return (
        <div>
            <div>
                <p>Total</p>
                <span>{Number(cartTotal).toLocaleString('pt-BR', format)}</span>
            </div>
            <button type="button" onClick={() => handleClick()}>Remover Todos</button>
        </div>
    )
}
export default CartTotal