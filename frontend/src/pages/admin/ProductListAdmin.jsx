
//working file
/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const ProductListAdmin = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const API_BASE = import.meta.env.VITE_API_BASE_URL;
  const { token } = useAuth();

  // ✅ Fetch products (optionally filter by category)
  /*const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${API_BASE}/products`);
      const filtered = category ? data.filter((p) => p.category === category) : data;
      setProducts(filtered);
    } catch (err) {
      console.error('❌ Failed to fetch products:', err);
      setError('Failed to load products.');
    }
  };*/
/*const fetchProducts = async () => {
  try {
    const { data } = await axios.get(`${API_BASE}/products`);
    
    // If data is an object with a `products` array
    const productList = data.products || data; 
    
    const filtered = category
      ? productList.filter((p) => p.category.toLowerCase() === category.toLowerCase())
      : productList;

    setProducts(filtered);
  } catch (err) {
    console.error('❌ Failed to fetch products:', err);
    setError('Failed to load products.');
    setProducts([]); // fallback to empty array
  }
};

  useEffect(() => {
    fetchProducts();
  }, [category]);

  // ✅ Delete product
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      await axios.delete(`${API_BASE}/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success('Product deleted successfully!');
      setProducts(products.filter((p) => p._id !== id)); // remove from state
    } catch (err) {
      console.error('❌ Error deleting product:', err.response?.data?.message || err.message);
      toast.error('Failed to delete product');
    }
  };

  // ✅ Edit product
  const handleEdit = (id) => {
    navigate(`/admin/products/edit/${id}`);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Admin: Product Management</h1>

      // Category Filter + Add Product 
      <div className="mb-4 flex items-center justify-between">
        <div>
          <label className="mr-2 font-medium">Filter by Category:</label>
          <select
            className="border p-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="clothing">Clothing</option>
            <option value="accessories">Accessories</option>
            <option value="food">Food</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
        <button
          onClick={() => navigate('/admin/products/add')}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add Product
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      // Product Table 
      <div className="overflow-x-auto bg-white rounded shadow">
        {products.length === 0 ? (
          <p className="p-4">No products found.</p>
        ) : (
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Name</th>
                <th className="border p-3 text-left">Price</th>
                <th className="border p-3 text-left">Category</th>
                <th className="border p-3 text-left">Stock</th>
                <th className="border p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id} className="hover:bg-gray-50">
                  <td className="border p-3">{product.name}</td>
                  <td className="border p-3">${product.price.toFixed(2)}</td>
                  <td className="border p-3">{product.category}</td>
                  <td className="border p-3">{product.stock}</td>
                  <td className="border p-3 text-center space-x-2">
                    <button
                      onClick={() => handleEdit(product._id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ProductListAdmin;*/


//current work
/*import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useAuth } from '../context/AuthContext';
import { useAuth } from "../../context/AuthContext";


const ProductListAdmin = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `http://localhost:5000/api/products?category=${category}&page=${page}`,
          {
            headers: token ? { Authorization: `Bearer ${token}` } : {},
          }
        );

        const data = await res.json();
        console.log('ADMIN PRODUCTS RAW RESPONSE:', data);

        // 🔒 Force products to ALWAYS be an array
        const list =
          Array.isArray(data) ? data :
          Array.isArray(data.products) ? data.products :
          Array.isArray(data.data) ? data.data :
          [];

        setProducts(list);

        // Pagination safety
        setTotalPages(
          Number(data.totalPages || data.pages || 1)
        );
      } catch (err) {
        console.error(err);
        setError('Failed to fetch products');
        setProducts([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, page, token]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleEdit = (id) => {
    navigate(`/admin/products/edit/${id}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">📦 Admin Product List</h2>

      <div className="mb-4">
        <label className="mr-2 font-medium">Filter by Category:</label>
        <select
          className="border p-2 rounded"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          <option value="clothing">Clothing</option>
          <option value="accessories">Accessories</option>
          <option value="food">Food</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>

      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && products.length === 0 && <p>No products found.</p>}

      {!loading && products.length > 0 && Array.isArray(products) && (
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Stock</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td className="p-2 border">{product.name}</td>
                <td className="p-2 border">{product.category}</td>
                <td className="p-2 border">${product.price}</td>
                <td className="p-2 border">{product.stock}</td>
                <td className="p-2 border">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    onClick={() => handleEdit(product._id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="flex justify-between items-center mt-4">
        <button
          className="px-3 py-1 bg-gray-300 rounded"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          className="px-3 py-1 bg-gray-300 rounded"
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductListAdmin;*/



// src/pages/admin/ProductListAdmin.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProductListAdmin = () => {
  const { token, user } = useAuth();
  const navigate = useNavigate();

  const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`${API_BASE}/products?category=${category}&page=${page}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });

      const data = await res.json();
      console.log('ADMIN PRODUCTS RAW RESPONSE:', data);

      const list =
        Array.isArray(data) ? data :
        Array.isArray(data.products) ? data.products :
        Array.isArray(data.data) ? data.data :
        [];

      setProducts(list);

      setTotalPages(Number(data.totalPages || data.pages || 1));
    } catch (err) {
      console.error(err);
      setError('Failed to fetch products');
      setProducts([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, page, token]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleEdit = (id) => {
    navigate(`/admin/products/edit/${id}`);
  };

  const handleAdd = () => {
    navigate('/admin/products/add');
  };

  const handleDelete = async (id) => {
    if (!user?.isAdmin) {
      alert('Admin only');
      return;
    }

    const ok = window.confirm('Delete this product?');
    if (!ok) return;

    try {
      await fetch(`${API_BASE}/products/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // refresh list
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert('Failed to delete product');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">📦 Admin Product List</h2>

        <button
          onClick={handleAdd}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          + Add Product
        </button>
      </div>

      <div className="mb-4">
        <label className="mr-2 font-medium">Filter by Category:</label>
        <select className="border p-2 rounded" value={category} onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="clothing">Clothing</option>
          <option value="accessories">Accessories</option>
          <option value="food">Food</option>
          <option value="electronics">Electronics</option>
          <option value="handmade">Handmade</option>
        </select>
      </div>

      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && products.length === 0 && <p>No products found.</p>}

      {!loading && Array.isArray(products) && products.length > 0 && (
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Stock</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td className="p-2 border">{product.name}</td>
                <td className="p-2 border">{product.category}</td>
                <td className="p-2 border">${product.price}</td>
                <td className="p-2 border">{product.stock}</td>
                <td className="p-2 border space-x-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    onClick={() => handleEdit(product._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="flex justify-between items-center mt-4">
        <button
          className="px-3 py-1 bg-gray-300 rounded"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          className="px-3 py-1 bg-gray-300 rounded"
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductListAdmin;












