import Counter from "../Counter"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function CartProduct({ currentSale, setCurrentSale, counter, setCounter}) {
    const format = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }
    const notify = (name) => toast(`${name} removido do carrinho`)

    function handleClick(sale) {
        setCurrentSale(currentSale.filter(element => element.name !== sale.name))
        notify(sale.name)
    }

    return (
        <ul>
            {currentSale.map(sale => {
                sale.amount = counter

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

                        <Counter counter={counter} setCounter={setCounter}/>
                    </li>
                )
            })}
            <ToastContainer/>
        </ul>
    )
}
export default CartProduct