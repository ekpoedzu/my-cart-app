
// src/pages/admin/EditProductPage.jsxworking very well
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import EditProduct from '../../components/admin/EditProduct';

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`${API_BASE}/products/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProductData(data);
      } catch (err) {
        console.error(err);
        toast.error('Failed to fetch product.');
      }
    };
    fetchProduct();
  }, [id]);

  // Submit handler
  const handleUpdate = async (updatedData) => {
    try {
      setLoading(true);
      await axios.put(`${API_BASE}/products/${id}`, updatedData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Product updated successfully!');
      navigate('/admin/products');
    } catch (err) {
      console.error(err);
      toast.error('Failed to update product.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
      {productData ? (
        <EditProduct
          productData={productData}
          onSubmit={handleUpdate} // ✅ Pass function here
          loading={loading}
        />
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
};

export default EditProductPage;







