function Card({products, currentSale, setCurrentSale}) {
    function handleClick(event, product) {
        const btnID = Number(event.target.id)
        
        if (btnID === product.id) {
            setCurrentSale([...currentSale, product])
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
                        <p>{product.price}</p>
                        <button id={product.id} onClick={(event) => handleClick(event, product)}>Adicionar</button>
                    </li>
                )
            })}
        </ul>
    )
}
export default Card