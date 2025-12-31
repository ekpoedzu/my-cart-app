import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const ProductForm = () => {
  const { id } = useParams(); // If present, we're editing
  const navigate = useNavigate();
  const { token } = useAuth();

  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    stock: '',
    image: '',
  });

  // Fetch product if editing
  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        const { data } = await axios.get(`${API_BASE}/products/${id}`);
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product:', err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Edit mode
        await axios.put(`${API_BASE}/products/${id}`, product, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert('Product updated!');
      } else {
        // Create mode
        await axios.post(`${API_BASE}/products`, product, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert('Product created!');
      }
      navigate('/admin/products');
    } catch (err) {
      console.error('Failed to save product:', err);
      alert('Failed to save product.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{id ? 'Edit Product' : 'Create Product'}</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="countInStock"
          value={product.stock}
          onChange={handleChange}
          placeholder="Stock Quantity"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          {id ? 'Update Product' : 'Create Product'}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
