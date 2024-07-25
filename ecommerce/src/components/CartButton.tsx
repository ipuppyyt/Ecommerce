
import Cart from '../icons/shopping-cart.png';

const CartButton = () => {
  return (
    <div>
      <button className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-500 " >
          <img src={Cart} alt="Cart" className="w-6" />
          <div className='rounded-lg bg-red-700 flex justify-content-center align-items-center w-4 h-4'></div>
        </button>

    </div>
  )
}

export default CartButton
