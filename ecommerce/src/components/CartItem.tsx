import data from '../data/data'
import ButtonComponent from './ButtonComponent';
import { useShoppingCart } from '../context/ShoppingCartContext';

type CartItemProps = {
    id: number
    quantity: number
}

const CartItem = ({id, quantity} : CartItemProps) => {


    const item = data.find(i => i.id === id)
    if (item == null) return null;
    const {decreaseItemQuantity, increaseItemQuantity, removeFromCart} = useShoppingCart();

    const handleDecrease = () => {
        
        decreaseItemQuantity(id)
      }
    
      const handleIncrease = () =>{
        
        increaseItemQuantity(id)
      }

      const handleRemove = () =>{
        removeFromCart(id)
      }

    return (
        <>
            <div>
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                        src={item.image}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
            </div>
            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            {item.name}
                        </h3>
                        <p className="ml-4">${item.price}</p>
                    </div>
                    {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty {quantity}</p>
                    <div onClick={handleIncrease}>
                    <ButtonComponent value="+" bg="bg-gray-300"/>
                    </div>
                    <div onClick={handleDecrease}>
                    <ButtonComponent value="-" bg="bg-gray-300"/>
                    </div>

                    <div className="flex">
                        <button type="button" onClick={handleRemove} className="font-medium text-indigo-600 hover:text-indigo-500">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem
