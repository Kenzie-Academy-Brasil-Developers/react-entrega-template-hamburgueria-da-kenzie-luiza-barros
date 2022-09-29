import Header from "./components/Header"
import { useState, useEffect } from "react"
import api from "./services/api"
import Main from "./components/Main"
import Aside from "./components/Aside"

function App() {
    const [products, setProducts] = useState([])
    const [currentSale, setCurrentSale] = useState([])

    useEffect(() => {
        api.get()
        .then(response => setProducts(response.data))
    }, [])

    return (
        <div>
            <div className="container">
                <Header/>
            </div>

            <div className="container">
                <Main products={products} currentSale={currentSale} setCurrentSale={setCurrentSale}/>
                <Aside currentSale={currentSale} setCurrentSale={setCurrentSale}/>
            </div>
        </div>
    )
}

export default App