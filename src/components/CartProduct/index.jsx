import Counter from "../Counter"
import { useState } from "react"

function CartProduct({ currentSale, setCurrentSale, setPrices, prices }) {
    const format = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }

    function handleClick(sale) {
        setCurrentSale(currentSale.filter(element => element.name !== sale.name))
    }

    return (
        <ul>
            {currentSale.map(sale => {
                return (
                    <li key={(sale.id) * 2}> 
                        <div>
                            <img src={sale.img} alt={sale.name}/>
                        </div>

                        <div>
                            <h2>{sale.name}</h2>
                            <span>{sale.category}</span>
                        </div>
                    
                        <div>
                            <p>{Number(sale.price).toLocaleString('pt-BR', format)}</p>
                            <button id={(sale.id) * 2} onClick={() => handleClick(sale)}>Remover</button>
                        </div>

                        <Counter setPrices={setPrices} prices={prices}/>
                    </li>
                )
            })}
        </ul>
    )
}
export default CartProduct