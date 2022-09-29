import { useState } from "react"

function CartProduct({ currentSale, setCurrentSale }) {
    function handleClick(sale) {
        
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
                            <p>{sale.price}</p>
                            <button id={(sale.id) * 2} onClick={() => handleClick(sale)}>Remover</button>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
export default CartProduct