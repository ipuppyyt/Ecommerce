import Card from "../components/Card";
import Navbar from "../components/Navbar";
import data from "../data/data"
const ProductsPage = () => {
  const products = data
  return (
    <>
      <Navbar/>
      <div className="flex flex-row flex-wrap gap-3 px-10">
        {products.map((product) => (

          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
            src={product.src}
          />

        ))}
      </div>
    </>
  )
}

export default ProductsPage
