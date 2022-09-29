import Header from "./components/Header"
import { useState, useEffect } from "react"
import api from "./services/api"
import Main from "./components/Main"

function App() {
    const [products, setProducts] = useState([])

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
                <Main products={products}/>
            </div>
        </div>
    )
}

export default App