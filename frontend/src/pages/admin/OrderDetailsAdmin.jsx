import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const OrderDetailsAdmin = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const { data } = await axios.get(`/api/orders/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrder(data);
      } catch (err) {
        console.error("❌ Error fetching order details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id, token]);

  if (loading) return <p>Loading order details...</p>;
  if (!order) return <p>Order not found.</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📦 Order Details</h2>

      <p><strong>Customer:</strong> {order.userName}</p>
      <p><strong>Email:</strong> {order.userEmail}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Total:</strong> ${order.totalPrice.toFixed(2)}</p>

      <h3 className="mt-4 font-semibold">📍 Shipping</h3>
      <p>
        {order.shippingAddress?.address}, {order.shippingAddress?.city},{" "}
        {order.shippingAddress?.postalCode}, {order.shippingAddress?.country}
      </p>

      <h3 className="mt-4 font-semibold">💳 Payment</h3>
      <p>Method: {order.paymentMethod}</p>
      <p>
        Paid:{" "}
        {order.isPaid
          ? `✅ on ${new Date(order.paidAt).toLocaleString()}`
          : "❌ Not Paid"}
      </p>

      <h3 className="mt-4 font-semibold">🛒 Items</h3>
      <ul className="list-disc ml-5">
        {order.orderItems.map((item) => (
          <li key={item._id}>
            {item.name} — {item.qty} × ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetailsAdmin;
