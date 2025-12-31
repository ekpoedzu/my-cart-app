/*import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext'; // if you're storing user token
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:5000/api/orders/myorders', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.message || 'Failed to fetch orders');

        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              <p><strong>Order ID:</strong> {order._id}</p>
              <p><strong>Total:</strong> ${order.totalAmount.toFixed(2)}</p>
              <p><strong>Status:</strong> {order.paymentStatus}</p>
              <p><strong>Items:</strong></p>
              <ul>
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.title} × {item.quantity} = ${item.price * item.quantity}
                  </li>
                ))}
              </ul>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrders;*/




/*import React, { useEffect, useState } from 'react';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const token = localStorage.getItem('token'); // Or however you're storing it

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/orders/mine', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch orders');
        }

        const data = await res.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>You haven't placed any orders yet.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              <p><strong>Order ID:</strong> {order._id}</p>
              <p><strong>Total:</strong> ${order.totalAmount.toFixed(2)}</p>
              <p><strong>Status:</strong> {order.paymentStatus}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrders;*/


/*import React from 'react';
import { useOrders } from '../hooks/useOrders';

export default function MyOrders() {
  const { orders, loading, error } = useOrders();

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>Error: {error}</p>;
  if (orders.length === 0) return <p>No orders found.</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      <ul className="space-y-2">
        {orders.map(order => (
          <li key={order._id} className="p-4 bg-white shadow rounded">
            <p><strong>ID:</strong> {order._id}</p>
            <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
            <p><strong>Total:</strong> ${order.totalPrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}*/


/*import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const { user, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchOrders = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/orders/mine', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Could not fetch orders');
        setOrders(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchOrders();
  }, [token, navigate]);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
      {error && <p className="text-red-500">{error}</p>}
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div key={index} className="border p-4 rounded-lg shadow">
              <h4 className="font-bold mb-2">Order #{index + 1}</h4>
              <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
              <p><strong>Status:</strong> {order.paymentStatus}</p>
              <p><strong>Total:</strong> ${order.totalAmount.toFixed(2)}</p>
              <p><strong>Shipping:</strong> {order.city}, {order.country}</p>
              <ul className="list-disc list-inside mt-2">
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.name} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;*/

//MyOrders

/*import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
  const { user, token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return navigate('/login');

    const fetchOrders = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/orders/mine', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error('❌ Failed to fetch orders:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token, navigate]);

  if (loading) return <p className="text-center mt-10">Loading your orders...</p>;
  if (!orders.length) return <p className="text-center mt-10">No past orders found.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">My Orders</h2>
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="border border-gray-300 rounded-xl p-4 shadow-sm bg-white"
          >
            <p className="text-sm text-gray-600 mb-2">
              <strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}
            </p>
            <ul className="mb-2">
              {order.items.map((item, i) => (
                <li key={i} className="text-gray-700">
                  {item.name} × {item.quantity} = $
                  {(item.price * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
            <p className="text-gray-800">
              <strong>Total:</strong> ${order.totalAmount.toFixed(2)}
            </p>
            <p className="text-sm text-green-600">
              <strong>Status:</strong> {order.paymentStatus}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;*/

//my current MyOrders
/*import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
  const { user, token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  

  useEffect(() => {
    if (!token) return navigate('/login');

    const fetchOrders = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/orders/mine', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch orders');
        }

        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error('❌ Failed to fetch orders:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token, navigate]);

  if (loading) return <p className="text-center mt-10">Loading your orders...</p>;
  if (!orders.length) return <p className="text-center mt-10">No past orders found.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">My Orders</h2>
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="border border-gray-300 rounded-xl p-4 shadow-sm bg-white"
          >
            <p className="text-sm text-gray-600 mb-1">
              <strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Email:</strong> {order.email}
            </p>
            <ul className="mb-2">
              {order.items.map((item, i) => (
                <li key={i} className="text-gray-700">
                  {item.name} × {item.quantity} = ${(
                    item.price * item.quantity
                  ).toFixed(2)}
                </li>
              ))}
            </ul>
            <p className="text-gray-800 font-medium">
              Total: ${order.totalAmount.toFixed(2)}
            </p>
            <p className="text-sm text-green-600">
              Status: {order.paymentStatus}
            </p>
            <p className="text-sm text-gray-600 mb-1">
             Payment Method: {order.paymentMethod}
           </p>
         <button
            onClick={() => navigate(`/my-orders/${order._id}`)}
            className="text-blue-600 underline text-sm mt-2"
          >
            View Details →
        </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;*/



/*import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
  const { user, token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchOrders = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/orders/mine', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch orders');
        }

        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error('❌ Failed to fetch orders:', err);
        setError('Unable to load your orders at the moment.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token, navigate]);

  if (loading) return <p className="text-center mt-10">Loading your orders...</p>;
  if (error) return <p className="text-center text-red-600 mt-10">{error}</p>;
  if (!orders.length) return <p className="text-center mt-10">No past orders found.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">My Orders</h2>
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="border border-gray-300 rounded-xl p-4 shadow-sm bg-white"
          >
            <p className="text-sm text-gray-600 mb-1">
              <strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Email:</strong> {order.email}
            </p>
            <ul className="mb-2">
              {order.items?.map((item, i) => (
                <li key={i} className="text-gray-700">
                  {item.name} × {item.quantity} = ${(
                    item.price * item.quantity
                  ).toFixed(2)}
                </li>
              ))}
            </ul>
            <p className="text-gray-800 font-medium">
              Total: ${order.totalAmount.toFixed(2)}
            </p>
            <p className="text-sm text-green-600">
              Status: {order.paymentStatus}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              Payment Method: {order.paymentMethod}
            </p>
            <button
              onClick={() => navigate(`/my-orders/${order._id}`)}
              className="text-blue-600 underline text-sm mt-2"
            >
              View Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;*/



// src/pages/MyOrders.jsx
/*import { useEffect, useState } from 'react';
//import axios from '../utils/axios';
//import axios from '../utils/axios';
import { useAuth } from '../context/AuthContext';

const MyOrders = () => {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get('/orders/mine', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(res.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch orders');
      }
    };

    fetchOrders();
  }, [token]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      {error && <p className="text-red-600">{error}</p>}
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order._id} className="border p-4 rounded">
              <p><strong>ID:</strong> {order._id}</p>
              <p><strong>Total:</strong> ${order.totalPrice}</p>
              <p><strong>Payment:</strong> {order.paymentMethod}</p>
              <p><strong>Shipping to:</strong> {order.shippingInfo.fullName}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrders;*/




/*import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { useAuth } from '../context/AuthContext';

const MyOrders = () => {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get('/orders/mine', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(res.data);
      } catch (err) {
        console.error('Failed to fetch orders:', err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order._id} className="border p-4 rounded">
              <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
              <p><strong>Items:</strong> {order.items.map(i => `${i.name} x${i.quantity}`).join(', ')}</p>
              <p><strong>Total:</strong> ${order.totalPrice}</p>
              <p><strong>Status:</strong> {order.isPaid ? 'Paid' : 'Pending'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrders;*/


//my current MyOrders
/*import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { useAuth } from '../context/AuthContext';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = user?.token;
        const response = await axios.get('/orders/mine', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(response.data);
      } catch (error) {
        console.error('❌ Failed to fetch orders:', error.response?.data?.message || error.message);
      }
    };

    if (user) {
      fetchOrders();
    }
  }, [user]);

  if (!user) return <p>Please login to view your orders.</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map(order => (
            <li key={order._id} className="p-4 border rounded shadow">
              <p><strong>ID:</strong> {order._id}</p>
              <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
              <p><strong>Total:</strong> ${order.totalPrice.toFixed(2)}</p>
              <p><strong>Status:</strong> {order.isPaid ? 'Paid' : 'Pending'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrders;*/




import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { useAuth } from '../context/AuthContext';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user, token } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        //const response = await axios.get('/orders/mine', {
        const res = await axios.get('/api/orders/myorders', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(response.data);
      } catch (error) {
        console.error('❌ Failed to fetch orders:', error.response?.data?.message || error.message);
      }
    };

    if (user && token) {
      fetchOrders();
    }
  }, [user, token]);

  if (!user) return <p>Please login to view your orders.</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map(order => (
            <li key={order._id} className="p-4 border rounded shadow">
              <p><strong>ID:</strong> {order._id}</p>
              <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
              <p><strong>Total:</strong> ${order.totalPrice.toFixed(2)}</p>
              <p><strong>Status:</strong> {order.isPaid ? 'Paid' : 'Pending'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrders;







