/*import React from 'react';
import { useParams } from 'react-router-dom';

const dummyProducts = [/* same product array as before */;

/*const ProductDetail = () => {
  const { id } = useParams();
  const product = dummyProducts.find(p => p._id === id);

  if (!product) return <p style={{ padding: '1rem' }}>Product not found.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="200" />
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
};

export default ProductDetail;*/


/*import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const sampleProducts = [
  {
    _id: 'prod-4',
    name: 'Organic Honey Jarey',
    price: 15,
    description: 'Raw unfiltered organic honey.',
    category: 'Food',
    stock: 4,
    image: '/images/honey.jpg',
  },
  {
    _id: 'prod-5',
    name: 'Organic Gari',
    price: 15,
    description: 'Delicious crispy gari.',
    category: 'Food',
    stock: 10,
    image: '/images/gari.jpg',
  },
  {
    _id: 'prod-6',
    name: 'Unique Scarf',
    price: 15,
    description: 'Elegant unique scarf.',
    category: 'Clothing',
    stock: 10,
    image: '/images/scarf.jpg',
  },
  {
    _id: 'prod-7',
    name: 'Breaded Bracelet',
    price: 15,
    description: 'GosticHandmade unique collection.',
    category: 'Handmade',
    stock: 10,
    image: '/images/bracelet.jpg',
  },
];
    const navigate = useNavigate();
    navigate('/success'); // after form submit or payment success
    const ProductDetail = () => {
    const { productId } = useParams();
    const product = sampleProducts.find((p) => p._id === productId);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '300px', borderRadius: '10px' }}
      />
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
    </div>
  );
};

export default ProductDetail;*/


//current working file without update
/*import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const sampleProducts = [
  {
    _id: 'prod-4',
    name: 'Organic Honey Jarey',
    price: 15,
    description: 'Raw unfiltered organic honey.',
    category: 'Food',
    stock: 4,
    image: '/images/honey.jpg',
  },
  {
    _id: 'prod-5',
    name: 'Organic Gari',
    price: 15,
    description: 'Delicious crispy gari.',
    category: 'Food',
    stock: 10,
    image: '/images/gari.jpg',
  },
  {
    _id: 'prod-6',
    name: 'Unique Scarf',
    price: 15,
    description: 'Elegant unique scarf.',
    category: 'Clothing',
    stock: 10,
    image: '/images/scarf.jpg',
  },
  {
    _id: 'prod-7',
    name: 'Breaded Bracelet',
    price: 15,
    description: 'GosticHandmade unique collection.',
    category: 'Handmade',
    stock: 10,
    image: '/images/bracelet.jpg',
  },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate(); // ✅ valid inside component

  const product = sampleProducts.find((p) => p._id === productId);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  // Optional: if you want a button to navigate after payment or action
  const handleGoToSuccess = () => {
    navigate('/success');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '300px', borderRadius: '10px' }}
      />
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Stock:</strong> {product.stock}</p>

     // Optional: Add a button to navigate 
    <!button onClick={handleGoToSuccess}>Buy Now</button>
      <button
          onClick={() => navigate('/checkout')}
          style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}
          >
          Buy Now
      </button>


    </div>
  );
};

export default ProductDetail;*/




// frontend/src/pages/ProductDetail.jsx
/*import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load product.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        //Product Image 
        <img
          src={product.image.startsWith('http') ? product.image : `/images/${product.image}`}
          alt={product.name}
          className="w-full md:w-1/2 h-auto object-cover rounded"
        />

        // Product Info 
        <div className="md:w-1/2 flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-700">{product.description}</p>
          <p className="font-semibold text-lg">Category: {product.category}</p>

          // 🆕 Brand *
          {product.brand && (
            <p className="font-medium text-gray-800">Brand: {product.brand}</p>
          )}

          // 🆕 Rating & Reviews 
          <div className="flex items-center gap-2">
            <span className="font-semibold">Rating: {product.rating.toFixed(1)}</span>
            <span className="text-gray-600">({product.numReviews} reviews)</span>
          </div>

          <p className="font-bold text-xl mt-2">Price: ${product.price}</p>
          <p className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;*/




// frontend/src/pages/ProductDetail.jsx
/*import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load product.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p>Product not found.</p>;

  // Function to render stars
  const renderStars = (rating) => {
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
        //Product Image 
        <img
          src={product.image.startsWith('http') ? product.image : `/images/${product.image}`}
          alt={product.name}
          className="w-full md:w-1/2 h-auto object-cover rounded"
        />

        //Product Info 
        <div className="md:w-1/2 flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-700">{product.description}</p>
          <p className="font-semibold text-lg">Category: {product.category}</p>

          // Brand 
          {product.brand && (
            <p className="font-medium text-gray-800">Brand: {product.brand}</p>
          )}

          // Rating & Reviews with stars 
          <div className="flex items-center gap-2 text-yellow-500">
            <span>{renderStars(product.rating)}</span>
            <span className="text-gray-600">({product.numReviews} reviews)</span>
          </div>

          <p className="font-bold text-xl mt-2">Price: ${product.price}</p>
          <p className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;*/



/*import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const sampleProducts = [
  {
    _id: 'prod-4',
    name: 'Organic Honey Jarey',
    price: 15,
    description: 'Raw unfiltered organic honey.',
    category: 'Food',
    stock: 4,
    image: '/images/honey.jpg',
  },
  {
    _id: 'prod-5',
    name: 'Organic Gari',
    price: 15,
    description: 'Delicious crispy gari.',
    category: 'Food',
    stock: 10,
    image: '/images/gari.jpg',
  },
  {
    _id: 'prod-6',
    name: 'Unique Scarf',
    price: 15,
    description: 'Elegant unique scarf.',
    category: 'Clothing',
    stock: 10,
    image: '/images/scarf.jpg',
  },
  {
    _id: 'prod-7',
    name: 'Breaded Bracelet',
    price: 15,
    description: 'GosticHandmade unique collection.',
    category: 'Handmade',
    stock: 10,
    image: '/images/bracelet.jpg',
  },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate(); // ✅ valid inside component

  const product = sampleProducts.find((p) => p._id === productId);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  // Optional: if you want a button to navigate after payment or action
  const handleGoToSuccess = () => {
    navigate('/success');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '300px', borderRadius: '10px' }}
      />
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Stock:</strong> {product.stock}</p>

      // Optional: Add a button to navigate 
      <!button onClick={handleGoToSuccess}>Buy Now</button>
      <button
          onClick={() => navigate('/checkout')}
          style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}
          >
          Buy Now
      </button>


    </div>
  );
};

export default ProductDetail;*/


//anaother working file

/*import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams(); // match backend route
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/api/products/${id}`); // use :id
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load product.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>
      <img src={product.image || '/images/placeholder.jpg'} alt={product.name} style={{ width: 300 }} />
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>{product.description}</p>
      <p>Stock: {product.stock}</p>
      <button onClick={() => navigate('/checkout')}>Buy Now</button>
    </div>
  );
};

export default ProductDetail;*/





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
        const { data } = await axios.get(`/api/products/${productId}`);
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load product.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>
      <img
        src={product.image.startsWith('http') ? product.image : `/images/${product.image}`}
        alt={product.name}
        style={{ width: '300px', borderRadius: '10px' }}
      />
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Stock:</strong> {product.stock}</p>

      <button
        onClick={() => navigate('/checkout')}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductDetail;*/




// pages/ProductDetail.jsx
import React, { useEffect, useState } from 'react';
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
        {/* Product Image */}
      
        <img src={product.image || '/images/placeholder.jpg'} alt={product.name} style={{ width: 300 }} />
          

        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-700">{product.description}</p>
          <p className="font-semibold text-lg">Category: {product.category}</p>
          {product.brand && <p className="font-medium text-gray-800">Brand: {product.brand}</p>}

          {/* Rating & Reviews */}
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

export default ProductDetail;


