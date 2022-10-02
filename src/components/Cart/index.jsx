import styles from '../modules/styles.module.css'

function Cart({children, className}) {
    return (
        <aside className='cartWrapper'>
            <h3 className={styles.bgCart}>Carrinho de Compras</h3>
            <div className={className}>
                {children}
            </div>
        </aside>
    )
}
export default Cart