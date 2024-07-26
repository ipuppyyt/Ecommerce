import { useParams } from 'react-router-dom';
import data from '../data/data'
import { useShoppingCart } from '../context/ShoppingCartContext'


const CheckoutPage = () => {
  
  const { id } = useParams<{ id: string }>();
  

  const {cartItems} = useShoppingCart();
  let product=[];
  if (id) {
      product=[{id:id,quantity:1}]
  } else {
    product = cartItems;
    console.log(product)
  }

  return (
     <>
     {console.log(product)}
    <div className="checkout-page p-4 bg-gray-100">
  <h1 className="text-2xl font-bold mb-4">Checkout</h1>
  <div className="checkout-items">
    {product.map((item: any) => (
      <div key={item.id} className="checkout-item bg-white p-4 mb-4 shadow-md rounded">
        <h2 className="text-lg font-semibold">{item.id}</h2>
        <p className="text-gray-600">{item.quantity}</p>
        <p className="text-green-500">$100</p>
      </div>
    ))}
  </div>
</div>
</>
  );
};

export default CheckoutPage;
