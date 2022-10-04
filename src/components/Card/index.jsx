import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from '../modules/styles.module.css'
import '../globalStyles/texts.css'

function Card({products, currentSale, setCurrentSale}) {
    const format = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }
    const notify = (message) => toast.success(message, {
        theme: "colored"
    })

    function handleClick(event, product) {
        const btnID = Number(event.target.id)
        
        if (btnID === product.id) {
            const itHasRepeatedItem = currentSale.every(sale => sale.name !== product.name)
            if (itHasRepeatedItem) {
                notify(`Produto adicionado ao carrinho`)
                setCurrentSale([...currentSale, product])
            } else {
                notify(`Produto já foi adicionado ao carrinho`)
            }
        }
    }

    return (
        <ul>
            {products.map(product => {
                return (
                    <li key={product.id} className="card">
                        <div className="card__imgWrapper">
                            <img src={product.img} alt={product.name}/>
                        </div>

                        <div className="card__contentWrapper">
                            <h2>{product.name}</h2>
                            <span>{product.category}</span>
                            <p>{Number(product.price).toLocaleString('pt-BR', format)}</p>
                            
                            <button
                            id={product.id}
                            onClick={(event) => handleClick(event, product)}
                            className={styles.primaryBtn}>Adicionar</button>
                        </div>
                    </li>
                )
            })}
           <ToastContainer/>
        </ul>
    )
}
export default Card