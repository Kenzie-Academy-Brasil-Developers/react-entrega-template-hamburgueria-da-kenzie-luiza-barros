import Card from "../Card"

function Main({products}) {
    return products.length > 0 
    ? <main><Card products={products}/></main>
    : ''
}
export default Main