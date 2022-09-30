import Cart from "../Cart"
import CartProduct from "../CartProduct"
import { useState } from "react"
import CartTotal from "../CartTotal"

function Aside({currentSale, setCurrentSale}) {
    const [cartTotal, setCartTotal] = useState([])
    const [prices, setPrices] = useState([0])

    if (currentSale.length > 0) {
        return (
            <Cart>
                <CartProduct 
                currentSale={currentSale} 
                setCurrentSale={setCurrentSale}
                prices={prices}
                setPrices={setPrices}/>

                <CartTotal 
                prices={prices} 
                setPrices={setPrices}
                currentSale={currentSale}
                cartTotal={cartTotal} 
                setCartTotal={setCartTotal} 
                setCurrentSale={setCurrentSale}/>
            </Cart>
        )
    } else {
        return (
            <Cart>
                <h4>Sua sacola está vazia</h4>
                <span>Adicione itens</span>
            </Cart>
        )
    }
}
export default Aside