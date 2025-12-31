
// src/pages/CheckoutPage.jsx
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CheckoutPage = () => {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('checkoutForm', JSON.stringify(formData));
    localStorage.setItem('checkoutCart', JSON.stringify(cartItems));

    navigate('/payment', {state: {hippingAddres}});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border rounded shadow"
    >
      <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>

      <input
        name="fullName"
        placeholder="Full Name"
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="email"
        //placeholder="Email"
         placeholder="Enter your email"
         value={email}
        //onChange={handleChange}
          onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="address"
        placeholder="Address"
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="city"
        placeholder="City"
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="country"
        placeholder="Country"
        onChange={handleChange}
        required
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        name="zip"
        placeholder="Zip Code"
        onChange={handleChange}
        required
        className="w-full p-2 mb-4 border rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
      >
        Continue to Payment
      </button>
    </form>
  );
};

export default CheckoutPage;





