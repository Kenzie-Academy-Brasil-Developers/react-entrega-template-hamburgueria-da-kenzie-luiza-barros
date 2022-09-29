function Card({products}) {
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
                        <button>Adicionar</button>
                    </li>
                )
            })}
        </ul>
    )
}
export default Card