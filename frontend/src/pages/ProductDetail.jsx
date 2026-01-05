// pages/ProductDetail.jsx
/*import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/products/${productId}`);
        setProduct(data);
      } catch (err) {
        console.error('AxiosError', err);
        setError('Failed to load product. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <p className="p-4">Loading product...</p>;
  if (error) return <p className="text-red-500 p-4">{error}</p>;
  if (!product) return <p className="p-4">Product not found.</p>;

  // Optional: navigate to checkout
  const handleBuyNow = () => {
    navigate('/checkout');
  };
  

  // Function to render stars for rating (if your product has rating)
  const renderStars = (rating = 0) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {'★'.repeat(fullStars)}
        {halfStar && '½'}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        // Product Image 
      
        <img src={product.image || '/images/placeholder.jpg'} alt={product.name} style={{ width: 300 }} />
          

        * Product Info 
        <div className="md:w-1/2 flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-700">{product.description}</p>
          <p className="font-semibold text-lg">Category: {product.category}</p>
          {product.brand && <p className="font-medium text-gray-800">Brand: {product.brand}</p>}

          //Rating & Reviews 
          {product.rating !== undefined && (
            <div className="flex items-center gap-2 text-yellow-500">
              <span>{renderStars(product.rating)}</span>
              <span className="text-gray-600">({product.numReviews || 0} reviews)</span>
            </div>
          )}

          <p className="font-bold text-xl mt-2">Price: ${product.price}</p>
          <p className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
            {product.stock > 0 ? `In Stock: ${product.stock}` : 'Out of Stock'}
          </p>

          <button
            onClick={handleBuyNow}
            disabled={product.stock === 0}
            className={`mt-4 px-4 py-2 rounded text-white ${
              product.stock === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;*/



// pages/ProductDetail.jsx
/*import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext"; // ✅ add this

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ add this

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/products/${productId}`);
        setProduct(data);
      } catch (err) {
        console.error("AxiosError", err);
        setError("Failed to load product. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <p className="p-4">Loading product...</p>;
  if (error) return <p className="text-red-500 p-4">{error}</p>;
  if (!product) return <p className="p-4">Product not found.</p>;

  // ✅ Buy Now should add item to cart first
  const handleBuyNow = () => {
    if (product.stock === 0) return;

    // Add to cart first (same behavior as ProductList)
    addToCart(product);

    // Then navigate to checkout
    navigate("/checkout");
  };

  const renderStars = (rating = 0) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar && "½"}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        // Product Image 
        <img src={product.image || "/images/placeholder.jpg"}
          alt={product.name}
          style={{ width: 300 }}
        />

        //Product Info 
        <div className="md:w-1/2 flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-700">{product.description}</p>
          <p className="font-semibold text-lg">Category: {product.category}</p>
          {product.brand && (
            <p className="font-medium text-gray-800">Brand: {product.brand}</p>
          )}

          // Rating & Reviews 
          {product.rating !== undefined && (
            <div className="flex items-center gap-2 text-yellow-500">
              <span>{renderStars(product.rating)}</span>
              <span className="text-gray-600">
                ({product.numReviews || 0} reviews)
              </span>
            </div>
          )}

          <p className="font-bold text-xl mt-2">Price: ${product.price}</p>
          <p className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
            {product.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}
          </p>

          <button
            onClick={handleBuyNow}
            disabled={product.stock === 0}
            className={`mt-4 px-4 py-2 rounded text-white ${
              product.stock === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;*/



// pages/ProductDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext"; // ✅ add this
//import { getImageSrc } from "../utils/image";


const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ add this

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/products/${productId}`);
        setProduct(data);
      } catch (err) {
        console.error("AxiosError", err);
        setError("Failed to load product. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <p className="p-4">Loading product...</p>;
  if (error) return <p className="text-red-500 p-4">{error}</p>;
  if (!product) return <p className="p-4">Product not found.</p>;

  // ✅ Buy Now should add item to cart first
  const handleBuyNow = () => {
    if (product.stock === 0) return;

    // Add to cart first (same behavior as ProductList)
    addToCart(product);

    // Then navigate to checkout
    navigate("/checkout");
  };

  const renderStars = (rating = 0) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar && "½"}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <img src={product.image || "/images/placeholder.jpg"} alt={product.name} style={{ width: 300 }} />

        {/*<img
             src={getImageSrc(product.image)}
            alt={product.name}
            style={{ width: 300 }}
            onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/placeholder.jpg";
         }}
       />*/}


        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-700">{product.description}</p>
          <p className="font-semibold text-lg">Category: {product.category}</p>
          {product.brand && (
            <p className="font-medium text-gray-800">Brand: {product.brand}</p>
          )}

          {/* Rating & Reviews */}
          {product.rating !== undefined && (
            <div className="flex items-center gap-2 text-yellow-500">
              <span>{renderStars(product.rating)}</span>
              <span className="text-gray-600">
                ({product.numReviews || 0} reviews)
              </span>
            </div>
          )}

          <p className="font-bold text-xl mt-2">Price: ${product.price}</p>
          <p className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
            {product.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}
          </p>

          <button
            onClick={handleBuyNow}
            disabled={product.stock === 0}
            className={`mt-4 px-4 py-2 rounded text-white ${
              product.stock === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;







