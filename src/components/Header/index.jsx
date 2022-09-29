import Logo from "./assets/logo.svg"

function Header() {
    return (
        <header>
            <img src={Logo} alt="Burguer Kenzie"/>
            <input 
            type="search" 
            name="search" 
            id="search" 
            placeholder="Digitar Pesquisa"/>
            <button type="button">Pesquisar</button>
        </header>
    )
}
export default Header