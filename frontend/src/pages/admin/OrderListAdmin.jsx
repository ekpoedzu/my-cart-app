//Working one

/*import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const OrderListAdmin = () => {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get("/api/orders", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(data);
      } catch (err) {
        console.error("❌ Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [token]);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📦 Order List (Admin)</h2>

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Customer</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Total</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>

       
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td className="p-2 border">{order.user ? order.user.name : "Guest"}</td>
              <td className="p-2 border">{order.user ? order.user.email : "N/A"}</td>
              <td className="p-2 border">${order.totalPrice.toFixed(2)}</td>
              <td className="p-2 border">{order.isPaid ? "Paid" : "Pending"}</td>
              <td className="p-2 border flex gap-2">
                <Link
                  to={`/admin/orders/${order._id}`}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderListAdmin;*/


import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const AdminOrderList = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError('');

      try {
        const res = await axios.get(
          'http://localhost:5000/api/admin/orders',
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        const data = res.data;

        console.log('ADMIN ORDERS RESPONSE:', data);

        if (Array.isArray(data)) {
          setOrders(data);
        } else if (Array.isArray(data.orders)) {
          setOrders(data.orders);
        } else {
          setOrders([]);
        }
      } catch (err) {
        console.error(err);
        setError('Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    if (user?.isAdmin && user?.token) {
      fetchOrders();
    }
  }, [user]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📦 All Orders</h2>

      {loading && <p>Loading orders...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {!loading && orders.length === 0 && !error && <p>No orders found.</p>}

      {orders.length > 0 && (
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Order ID</th>
              <th className="border p-2">User</th>
              <th className="border p-2">Total</th>
              <th className="border p-2">Paid</th>
              <th className="border p-2">Delivered</th>
              <th className="border p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="border p-2">{order._id}</td>
                <td className="border p-2">{order.user?.name || 'N/A'}</td>
                <td className="border p-2">
                  ${order.totalPrice?.toFixed(2)}
                </td>
                <td className="border p-2">
                  {order.isPaid ? '✅' : '❌'}
                </td>
                <td className="border p-2">
                  {order.isDelivered ? '✅' : '❌'}
                </td>
                <td className="border p-2">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminOrderList;





