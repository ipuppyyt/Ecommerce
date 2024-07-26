export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  src: string[];
}
const data: Product[] = [{
    id: 1,
    name: "Blah",
    description: "Blah blah blah blah",
    price:1,
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
    src: [
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
      "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg",
      "https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg",
      "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg"
    ],
  },
  {
    id: 2,
    name: "Bleh",
    description: "Blah blah blah blah",
    price:3,
    image: "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg",
    src: [
      
      "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg",
      "https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg",
      "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg",
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
    ],
  },
  {
    id: 3,
    name: "Blhh",
    description: "Blah blah blah blah",
    price:1,
    image: "https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg",
    src: [
      "https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg",
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
      "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg",
      "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg"
    ],
  },
  {
    id: 4,
    name: "Blih",
    description: "Blah blah blah blah",
    price:4,
    image: "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg",
    src: [
      "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg",
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
      "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg",
      "https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg",
      
    ],
  },
  {
    id: 5,
    name: "Blbh",
    description: "Blah blah blah blah",
    price:5,
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
    src: [
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
      "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg",
      "https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg",
      "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg"
    ],
  }
  ];

  export default data;

  