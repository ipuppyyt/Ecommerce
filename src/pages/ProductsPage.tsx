import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from "axios";

interface Product {
  id: number
  name: string
  description: string
  price: number
  thumbnail: string
  image: [string]
  availability: number
  reviews: [{ id: number, user: string, rating: number, review: string, date: string }]
  category: [string]
  subcategory: string
}

const ProductsPage = () => {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    console.log('Fetching products...');

    axios.get('https://jsondummy.vercel.app/api/products?type=furniture')
      .then((response) => {
        setProducts(response.data.products)
        console.log('Products fetched:');

      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
  }, [])


  return (
    <>
      <Navbar />
      <div className="flex flex-row flex-wrap gap-3 px-10">
        {products?.map((product: any) => (

          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.thumbnail}
          />

        ))}
      </div>
    </>
  )
}

export default ProductsPage
