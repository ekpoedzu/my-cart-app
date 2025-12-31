import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ShippingScreen() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem('shippingInfo', JSON.stringify({
      fullName, address, city, postalCode, country
    }));
    navigate('/payment');
  };

  return (
    <form onSubmit={submitHandler}>
      <input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" required />
      <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
      <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />
      <input value={postalCode} onChange={(e) => setPostalCode(e.target.value)} placeholder="Postal Code" required />
      <input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" required />
      <button type="submit">Continue</button>
    </form>
  );
}
