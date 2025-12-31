
//Actual working file
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Success = () => {
  const { state } = useLocation();
  const orderFromState = state?.order;
  const [order, setOrder] = useState(orderFromState || null);

  useEffect(() => {
    if (!order) {
      const savedOrder = JSON.parse(localStorage.getItem('latestOrder'));
      if (savedOrder) setOrder(savedOrder);
    }
  }, [order]);

  if (!order) return <p className="text-center py-20">Loading order...</p>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-green-600 mb-4">🎉 Order Confirmed!</h2>
      <p className="text-lg">Thank you, {order.userName}.</p>

      <div className="mt-6 space-y-2">
        <p><strong>📧 Email:</strong> {order.userEmail}</p>
        <p><strong>📦 Shipping to:</strong> {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}, {order.shippingAddress.country}</p>
        <p><strong>🧾 Payment ID:</strong> {order.paymentResult?.id || 'N/A'}</p>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Items:</h3>
        <ul className="space-y-4">
          {order.orderItems.map(item => (
            <li key={item.product} className="flex items-center space-x-4 border-b pb-2">
              <img src={item.image || '/images/default.jpg'} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <p>{item.name}</p>
                <p>{item.qty} × ${item.price.toFixed(2)} = ${(item.qty * item.price).toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-lg">
          <strong>Total Paid:</strong> ${order.totalPrice.toFixed(2)}
        </p>
      </div>

      <div className="mt-8 text-center">
        <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;


