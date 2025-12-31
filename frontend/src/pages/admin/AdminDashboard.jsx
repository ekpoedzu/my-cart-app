// src/pages/admin/AdminDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="space-y-4">
        <Link to="/admin/products" className="block text-blue-600 underline">📦 Manage Products</Link><br></br>
        <Link to="/admin/orders" className="block text-blue-600 underline">📑 View Orders</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
