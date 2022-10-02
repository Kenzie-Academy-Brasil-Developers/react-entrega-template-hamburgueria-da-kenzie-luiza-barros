import Card from "../Card"

function Main({products, currentSale, setCurrentSale, filteredProducts}) {
    return (
      <main className="mainContent__cards">
        <Card products={filteredProducts.length > 0 ? filteredProducts : products} currentSale={currentSale} setCurrentSale={setCurrentSale}/>
      </main>
    )
}
export default Main