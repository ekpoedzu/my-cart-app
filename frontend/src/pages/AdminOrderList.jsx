



//wprking 1
/*import { useEffect, useState, useContext } from 'react';
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
      try {
        const res = await axios.get('http://localhost:5000/api/admin/orders', { // use full backend URL
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });
        if (Array.isArray(res.data)) {
          setOrders(res.data);
        } else {
          setOrders([]);
          console.warn('Expected an array of orders but got:', res.data);
        }
      } catch (err) {
        setError('Failed to fetch orders');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.isAdmin) {
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
                <td className="border p-2">${order.totalPrice?.toFixed(2)}</td>
                <td className="border p-2">{order.isPaid ? '✅' : '❌'}</td>
                <td className="border p-2">{order.isDelivered ? '✅' : '❌'}</td>
                <td className="border p-2">{new Date(order.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminOrderList;*/


//second
/*import { useEffect, useState, useContext } from 'react';
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

export default AdminOrderList;*/

//my current AdminOrderList
/*import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const AdminOrderList = () => {
  const { user } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);
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

        console.log('ADMIN ORDERS RAW RESPONSE:', res.data);

        // 🔒 HARD SAFETY
        if (Array.isArray(res.data)) {
          setOrders(res.data);
        } else if (Array.isArray(res.data.orders)) {
          setOrders(res.data.orders);
        } else if (Array.isArray(res.data.data)) {
          setOrders(res.data.data);
        } else {
          console.warn('Orders response not array:', res.data);
          setOrders([]);
        }

      } catch (err) {
        console.error(err);
        setError('Failed to fetch orders');
        setOrders([]);
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

      {Array.isArray(orders) && orders.length > 0 && (
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
            {orders.map(order => (
              <tr key={order._id}>
                <td className="border p-2">{order._id}</td>
                <td className="border p-2">
                  {order.user?.name || order.user?.email || 'N/A'}
                </td>
                <td className="border p-2">
                  ${Number(order.totalPrice || 0).toFixed(2)}
                </td>
                <td className="border p-2">
                  {order.isPaid ? '✅' : '❌'}
                </td>
                <td className="border p-2">
                  {order.isDelivered ? '✅' : '❌'}
                </td>
                <td className="border p-2">
                  {order.createdAt
                    ? new Date(order.createdAt).toLocaleDateString()
                    : '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminOrderList;*/



//update

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const AdminOrderList = () => {
  const { user, token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError('');

      try {
        const res = await axios.get('http://localhost:5000/api/admin/orders', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setOrders(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error(err);
        setError(err?.response?.data?.message || 'Failed to fetch orders');
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    if (user?.isAdmin && token) fetchOrders();
  }, [user, token]);

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
                <td className="border p-2">
                  {order.user?.name || order.userEmail || 'N/A'}
                </td>
                <td className="border p-2">
                  ${Number(order.totalPrice || 0).toFixed(2)}
                </td>
                <td className="border p-2">{order.isPaid ? '✅' : '❌'}</td>
                <td className="border p-2">{order.isDelivered ? '✅' : '❌'}</td>
                <td className="border p-2">
                  {order.createdAt ? new Date(order.createdAt).toLocaleString() : '—'}
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




