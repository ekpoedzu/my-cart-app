/*import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const OrderDetails = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await fetch(`/api/orders/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error('Failed to fetch order');
        const data = await res.json();
        setOrder(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id, token]);

  if (loading) return <p className="text-center mt-10">Loading order...</p>;
  if (!order) return <p className="text-center mt-10">Order not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
      <p><strong>Order Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
      <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
      <p><strong>Status:</strong> {order.paymentStatus}</p>
      <p><strong>Email:</strong> {order.email}</p>
      <p><strong>Shipping:</strong> {order.address}, {order.city}, {order.country}, {order.zip}</p>

      <h3 className="mt-4 font-semibold">Items:</h3>
      <ul className="list-disc list-inside">
        {order.items.map((item, i) => (
          <li key={i}>
            {item.name} × {item.quantity} = ${item.price * item.quantity}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-lg font-bold">Total: ${order.totalAmount.toFixed(2)}</p>

      <button
        onClick={() => navigate('/my-orders')}
        className="mt-6 text-blue-600 underline"
      >
        ← Back to My Orders
      </button>
    </div>
  );
};

export default OrderDetails;*/



// src/pages/OrderDetails.jsx
/*import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const OrderDetails = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return navigate('/login');

    const fetchOrder = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/orders/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch order');
        }

        const data = await res.json();
        setOrder(data);
      } catch (err) {
        console.error('Failed to fetch order', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id, token, navigate]);

  if (loading) return <p className="text-center mt-10">Loading order...</p>;
  if (!order) return <p className="text-center mt-10">Order not found.</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Order Details</h2>

      <div className="border border-gray-300 rounded-xl p-6 shadow-sm bg-white">
        <p className="mb-2 text-gray-700">
          <strong>Order ID:</strong> {order._id}
        </p>
        <p className="mb-2 text-gray-700">
          <strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}
        </p>
        <p className="mb-2 text-gray-700">
          <strong>Email:</strong> {order.email}
        </p>
        <p className="mb-2 text-gray-700">
          <strong>Shipping Address:</strong> {order.address}, {order.city}, {order.zip}, {order.country}
        </p>
        <p className="mb-2 text-gray-700">
          <strong>Payment Method:</strong> {order.paymentMethod}
        </p>
        <p className="mb-2 text-gray-700">
          <strong>Status:</strong> {order.paymentStatus}
        </p>

        <hr className="my-4" />

        <h3 className="text-lg font-medium mb-2">Items</h3>
        <ul>
          {order.items.map((item, i) => (
            <li key={i} className="text-gray-800">
              {item.name} × {item.quantity} = ${(
                item.price * item.quantity
              ).toFixed(2)}
            </li>
          ))}
        </ul>

        <p className="mt-4 text-lg font-semibold">
          Total Paid: ${order.totalAmount.toFixed(2)}
        </p>
      </div>

      <button
        className="mt-6 text-blue-600 underline"
        onClick={() => navigate('/my-orders')}
      >
        ← Back to My Orders
      </button>
    </div>
  );
};

export default OrderDetails;*/


//my current OrderDetail.jsx

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const OrderDetails = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return navigate('/login');

    const fetchOrder = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/orders/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error('Failed to fetch order');
        const data = await res.json();
        setOrder(data);
      } catch (err) {
        console.error('Failed to fetch order', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id, token, navigate]);

  if (loading) return <p className="text-center mt-10">Loading order...</p>;
  if (!order) return <p className="text-center mt-10">Order not found.</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Order Details</h2>

      <div className="border border-gray-300 rounded-xl p-6 shadow-sm bg-white">
        <p><strong>Order ID:</strong> {order._id}</p>
        <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
        <p><strong>Email:</strong> {order.email}</p>
        <p><strong>Shipping Address:</strong> {order.address}, {order.city}, {order.zip}, {order.country}</p>
        <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
        <p><strong>Status:</strong> {order.paymentStatus}</p>

        <hr className="my-4" />

        <h3 className="text-lg font-medium mb-2">Items</h3>
        <ul>
          {order.items.map((item, i) => (
            <li key={i}>
              {item.name} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>

        <p className="mt-4 text-lg font-semibold">
          Total Paid: ${order.totalPrice.toFixed(2)}
        </p>
      </div>

      <button
        className="mt-6 text-blue-600 underline"
        onClick={() => navigate('/my-orders')}
      >
        ← Back to My Orders
      </button>
    </div>
  );
};

export default OrderDetails;


