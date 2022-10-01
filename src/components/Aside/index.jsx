import Cart from "../Cart"
import CartProduct from "../CartProduct"
import { useState } from "react"
import CartTotal from "../CartTotal"

function Aside({currentSale, setCurrentSale}) {
    const [cartTotal, setCartTotal] = useState([])
    const [counter, setCounter] = useState(1)

    if (currentSale.length > 0) {
        return (
            <Cart>
                <CartProduct 
                currentSale={currentSale} 
                setCurrentSale={setCurrentSale}
                counter={counter}
                setCounter={setCounter}/>

                <CartTotal 
                currentSale={currentSale}
                cartTotal={cartTotal} 
                setCartTotal={setCartTotal} 
                setCurrentSale={setCurrentSale}
                counter={counter}/>
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