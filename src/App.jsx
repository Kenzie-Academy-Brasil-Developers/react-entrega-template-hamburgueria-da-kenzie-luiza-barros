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
            <Header/>
            <Main products={products}/>
        </div>
    )
}

export default App