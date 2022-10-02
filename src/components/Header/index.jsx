import Logo from './assets/logo.svg'
import styles from '../modules/styles.module.css'

function Header({ products, setFilteredProducts}) {
    function showFilteredProducts(event) {
        const inputValue = event.target.value
        const inputValueFormatted = inputValue.trim().toLowerCase()
        
        setFilteredProducts(products.filter(filterProduct => {
            const categoryToSearch = filterProduct.category.toLowerCase()
            const nameToSearch = filterProduct.name.toLowerCase()
            
            return categoryToSearch.includes(inputValueFormatted) || nameToSearch.includes(inputValueFormatted)
        }))
    }

    return (
        <header className='container'>
            <img src={Logo} alt="Burguer Kenzie"/>
            <input 
            type="search" 
            name="search" 
            id="search" 
            placeholder="Digitar Pesquisa" onChange={(event) => showFilteredProducts(event)}/>
            <button type="button" className={styles.primaryBtn}>Pesquisar</button>
        </header>
    )
}
export default Header