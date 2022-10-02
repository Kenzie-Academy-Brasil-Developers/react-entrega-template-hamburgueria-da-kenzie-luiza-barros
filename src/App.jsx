import Header from "./components/Header"
import { useState, useEffect } from "react"
import api from "./services/api"
import Main from "./components/Main"
import Aside from "./components/Aside"
import './components/globalStyles/index.css'

function App() {
    const [products, setProducts] = useState([])
    const [currentSale, setCurrentSale] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        api.get()
        .then(response => setProducts(response.data))
    }, [])

    return (
        <div>
            <div className="menu">
                <Header 
                products={products} 
                setFilteredProducts={setFilteredProducts}/>
            </div>

            <div className="container mainContent">
                <Main 
                products={products} 
                currentSale={currentSale} 
                setCurrentSale={setCurrentSale} 
                filteredProducts={filteredProducts}/>
                
                <Aside 
                currentSale={currentSale} 
                setCurrentSale={setCurrentSale}/>
            </div>
        </div>
    )
}

export default App