

//curent StripePayment.jsx

import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripeCheckoutForm from './StripeCheckoutForm'; // Your working form component

const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
const stripePromise = loadStripe(stripePublicKey);

const StripePayment = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        // Example: amount from localStorage or hardcoded for testing
        const totalAmount = JSON.parse(localStorage.getItem('checkoutTotal')) || 30;

        const res = await fetch('/api/stripe/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          //body: JSON.stringify({ amount: Math.round(totalAmount * 100) }), // amount in cents
          body: JSON.stringify({totalAmount}),
        });

        const data = await res.json();
        if (res.ok) {
          setClientSecret(data.clientSecret);
        } else {
          console.error('Error fetching clientSecret:', data.error || data.message);
        }
      } catch (error) {
        console.error('Error fetching clientSecret:', error);
      }
    };

    fetchClientSecret();
  }, []);

  const options = {
    clientSecret,
    appearance: { theme: 'stripe' },
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      {clientSecret ? (
        <Elements stripe={stripePromise} options={options}>
          <StripeCheckoutForm clientSecret={clientSecret} />
        </Elements>
      ) : (
        <p>Loading payment session...</p>
      )}
    </div>
  );
};

export default StripePayment;



