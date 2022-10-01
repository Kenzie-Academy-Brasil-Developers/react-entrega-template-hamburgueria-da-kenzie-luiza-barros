import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Card({products, currentSale, setCurrentSale}) {
    const format = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }
    const notify = () => toast(`Produto adicionado ao carrinho`)

    function handleClick(event, product) {
        const btnID = Number(event.target.id)
        
        if (btnID === product.id) {
            const itHasRepeatedItem = currentSale.every(sale => sale.name !== product.name)
            itHasRepeatedItem && setCurrentSale([...currentSale, product])
            notify()
        }
    }

    return (
        <ul>
            {products.map(product => {
                return (
                    <li key={product.id}>
                        <div>
                            <img src={product.img} alt={product.name}/>
                        </div>
                        <h2>{product.name}</h2>
                        <span>{product.category}</span>
                        <p>{Number(product.price).toLocaleString('pt-BR', format)}</p>
                        <button id={product.id} onClick={(event) => handleClick(event, product)}>Adicionar</button>
                    </li>
                )
            })}
           <ToastContainer/>
        </ul>
    )
}
export default Card