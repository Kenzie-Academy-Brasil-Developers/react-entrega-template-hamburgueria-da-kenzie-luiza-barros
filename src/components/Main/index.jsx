import Card from "../Card"

function Main({products, currentSale, setCurrentSale}) {
    return products.length > 0 
    ? <main>
        <Card products={products} currentSale={currentSale} setCurrentSale={setCurrentSale}/>
      </main>
    : ''
}
export default Main