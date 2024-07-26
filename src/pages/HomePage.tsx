import { Link } from "react-router-dom"

function HomePage() {
  

  return (
    <>
      <h1 className='text-4x1 text-blue-500 mb-10'>Ecommerce Project</h1>
      <Link to='/home/products' className="p-5 bg-blue-500">Products</Link>
    </>
  )
}

export default HomePage
