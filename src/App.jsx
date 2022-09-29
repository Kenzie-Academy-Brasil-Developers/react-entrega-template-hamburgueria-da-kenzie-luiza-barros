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
        <Main products={products}/>
    )
}

export default App