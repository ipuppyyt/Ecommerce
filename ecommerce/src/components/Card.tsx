import { Link } from 'react-router-dom';
import Cart from '../icons/shopping-cart.png'

const Card = ( props: any ) => {
   
  return (
    <Link to={`/products/${props.id}`} state={props}>
      <div className="w-60 p-2 bg-white rounded-x1 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 mb-4 lg:mt-0">
        <img src={props.image} alt={props.name} className='h-40 object-cover rounded-xl' />
        <div className='p-2'>
          <h2 className='font-bold text-lg mb-2'>{props.name}</h2>
          <p className='text-sm text-gray-600 mt-2 mb-2'>{props.description}</p>
        </div>
        <div className='flex items-center justify-center mb-3 gap-2'>
          <button className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-blue-400">Buy Now</button>
          <button className='px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-500'>
            <img src={Cart} alt="Cart" className='w-6'/>
          </button>
        </div>
      </div>
    </Link>
  );
}
export default Card;
