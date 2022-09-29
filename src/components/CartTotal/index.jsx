function CartTotal({currentSale, cartTotal, setCartTotal, setCurrentSale}) {
    setCartTotal(currentSale.reduce((accumulator, { price }) => accumulator + price, 0))

    function handleClick() {
        setCurrentSale([])
    }

    return (
        <div>
            <div>
                <p>Total</p>
                <span>{cartTotal}</span>
            </div>
            <button type="button" onClick={() => handleClick()}>Remover Todos</button>
        </div>
    )
}
export default CartTotal