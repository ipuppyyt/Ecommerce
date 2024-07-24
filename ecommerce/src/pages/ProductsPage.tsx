import { Link } from "react-router-dom"

const ProductsPage = () => {
    const products = [1,2,3,4,5];
  return (
    <div className="flex flex-col gap-3">
        {products.map((product)=>(
        <Link key = {product} to={`/products/${product}`}>
        Product {product}
        </Link>
        ))}
    </div>    

  )
}

export default ProductsPage
