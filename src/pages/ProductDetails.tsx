import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useParams, useNavigate} from 'react-router-dom';
import ButtonComponent from '../components/ButtonComponent';
import { useShoppingCart } from '../context/ShoppingCartContext';
import axios from 'axios';

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

const ProductDetails = () => {

  const [cartStatus, setCartStatus] = useState("Add to Cart")

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

  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const { productId } = useParams<{ productId: string }>();
  const id = Number(productId);

  const { increaseItemQuantity, openCart} = useShoppingCart()
  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }


  const handleTab = (index: number) => {
    setIndex(index);
  };
  // const quantity = getItemQuantity(product.id)

  const handleAddtoCart = () =>{
    setCartStatus("Go to Cart")
      increaseItemQuantity(product.id)
  }
  const handleGoToCart = () =>{
    openCart();
  }
  const handleBuyNow = () => {
    increaseItemQuantity(product.id)
   
    navigate(`/home/products/${product.id}/checkout`);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl w-full mx-auto my-24 shadow-md">
        <div className="flex flex-wrap justify-around py-2.5" key={product.id}>
          <div className="max-w-lg min-w-[290px] overflow-hidden m-6.25">
            <img
              src={product.image[index]}
              alt={product.name}
              className="h-72 object-contain max-h-100"
            />
          </div>

          <div className="max-w-lg min-w-[290px] m-6.25">
            <div className="flex justify-between mb-3.75">
              <h2 className="uppercase tracking-wide">{product.name}</h2>
              <span className="text-crimson font-extrabold">${product.price}</span>
            </div>
            <p className="leading-6 my-3.75">{product.description}</p>

            <div className="w-20 h-25 flex cursor-pointer my-2.5">
              {product.image.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt=""
                  className={`w-22.5 h-16 object-cover border border-gray-300 mr-1.25 rounded-lg ${
                    idx === index ? 'opacity-100 border-lightseagreen' : 'opacity-70'
                  }`}
                  onClick={() => handleTab(idx)}
                />
              ))}
            </div>
            <div className='py-2 px-2 space-x-1 flex'>
              <div onClick= { cartStatus === "Go to Cart"? handleGoToCart:handleAddtoCart}>
              <ButtonComponent value={cartStatus} bg="bg-black" cl="text-white"/>
              </div>
              <div onClick={handleBuyNow}>
              <ButtonComponent value="Buy Now" bg="bg-black" cl="text-white"/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
