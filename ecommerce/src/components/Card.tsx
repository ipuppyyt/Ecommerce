import { useNavigate } from 'react-router-dom';
import Cart from '../icons/shopping-cart.png';
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartButton from './CartButton';
const Card = (props: any) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/home/products/${props.id}`);
  };

  const handleBuyNow = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation(); // Prevents the event from bubbling up to the parent div
    navigate(`/home/products/${props.id}/checkout`);
  };

  const { getItemQuantity,increaseItemQuantity, decreaseItemQuantity} = useShoppingCart()

  return (
    <div
      className="w-60 p-2 bg-white rounded-x1 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 mb-4 lg:mt-0"
      onClick={handleClick}
    >
      <img src={props.image} alt={props.name} className="h-40 object-cover rounded-xl" />
      <div className="p-2">
        <h2 className="font-bold text-lg mb-2">{props.name}</h2>
        <p className="text-sm text-gray-600 mt-2 mb-2">{props.description}</p>
      </div>
      <div className="flex items-center justify-center mb-3 gap-2">
        <button
          className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-blue-400"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
        
        <CartButton/>
      </div>
    </div>
  );
};

export default Card;
