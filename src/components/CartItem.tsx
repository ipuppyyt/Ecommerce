// import data from '../data/data'
import ButtonComponent from './ButtonComponent';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { useEffect, useState } from 'react';
import axios from 'axios';

type CartItemProps = {
    id: number
    quantity: number
}

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


const CartItem = ({id, quantity} : CartItemProps) => {

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


    const item = products.find(i => i.id === id)
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
                        src={item.thumbnail}
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
