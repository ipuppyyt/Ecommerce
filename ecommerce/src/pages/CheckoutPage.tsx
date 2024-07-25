import { useParams } from 'react-router-dom';

const CheckoutPage = () => {
  // Destructure the id from the useParams hook
  const { id } = useParams<{ id: string }>();

  // Use the id as needed in your component
  return (
    <div>
      <h1>Checkout Page</h1>
      <p>Product ID: {id}</p>
      {/* Add your checkout form or details here */}
    </div>
  );
};

export default CheckoutPage;
