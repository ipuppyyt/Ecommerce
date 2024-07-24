import  { useState } from 'react';
import Navbar from '../components/Navbar';

const ProductDetails = () => {
  const [products] = useState([
    {
      _id: "1",
      title: "NSofa",
      src: [
        "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
        "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg",
        "https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg",
        "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg"
      ],
      description: "blah blah blah",
      content: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.",
      price: 23,
      colors: ["red", "black", "crimson", "teal"],
      count: 1
    }
  ]);

  const [index, setIndex] = useState(0);

  const handleTab = (index:any) => {
    setIndex(index);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl w-full mx-auto my-24 shadow-md">
        {products.map(item => (
          <div className="flex flex-wrap justify-around py-2.5" key={item._id}>
            <div className="max-w-lg min-w-[290px] overflow-hidden m-6.25">
              <img src={item.src[index]} alt="" className="w-full h-full max-h-100 object-cover" />
            </div>

            <div className="max-w-lg min-w-[290px] m-6.25">
              <div className="flex justify-between mb-3.75">
                <h2 className="uppercase tracking-wide">{item.title}</h2>
                <span className="text-crimson">${item.price}</span>
              </div>
              <div className="flex space-x-1.25">
                {item.colors.map((color, idx) => (
                  <button key={color} className={`w-7.5 h-7.5 border border-black outline-none cursor-pointer ${index === idx ? 'border-black' : ''}`} style={{ backgroundColor: color }} onClick={() => handleTab(idx)} />
                ))}
              </div>

              <p className="leading-6 my-3.75">{item.description}</p>
              <p className="leading-6 my-3.75">{item.content}</p>

              <div className="w-20 h-25 flex cursor-pointer my-2.5">
                {item.src.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt=""
                    className={`w-22.5 h-full object-cover border border-gray-300 mr-1.25 rounded-lg ${idx === index ? 'opacity-100 border-lightseagreen' : 'opacity-70'}`}
                    onClick={() => handleTab(idx)}
                  />
                ))}
              </div>
              <div className='py-2 px-2 space-x-1 '>
                <button className="bg-black text-white outline-none border-none cursor-pointer py-2.5 px-3 mt-3.75">Add to cart</button>
                <button className="bg-black text-white outline-none border-none cursor-pointer py-2.5 px-3 mt-3.75">Buy Me</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetails;
