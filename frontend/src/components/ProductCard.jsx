/*import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      width: '200px',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <img
        src={product.image || 'https://via.placeholder.com/200'}
        alt={product.name}
        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
      />
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;*/


/*import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        width: '200px',
        padding: '1rem',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
          borderRadius: '4px',
          marginBottom: '0.5rem',
        }}
      />
      <h4>{product.name}</h4>
      <p>${product.price.toFixed(2)}</p>
      <p>{product.category}</p>
      <p>Stock: {product.stock}</p>
      <button
        onClick={onAddToCart}
        disabled={product.stock === 0}
        style={{
          backgroundColor: product.stock === 0 ? '#ccc' : '#007bff',
          color: '#fff',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
        }}
      >
        {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;*/



/*import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '1rem',
      width: '200px',
      textAlign: 'center',
      boxShadow: '2px 2px 8px rgba(0,0,0,0.1)',
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }}
      />
      <h3>{product.name}</h3>
      <p><strong>${product.price}</strong></p>
      <p style={{ fontSize: '0.9rem', color: '#555' }}>{product.category}</p>

   
   
      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
        <Link to={`/product/${product._id}`}>
          <button style={{ padding: '0.4rem 0.6rem' }}>View</button>
        </Link>
        <button
          onClick={() => alert('Add to Cart coming soon')} // Replace with real handler
          disabled={product.stock === 0}
          style={{
            backgroundColor: product.stock === 0 ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            padding: '0.4rem 0.6rem',
            cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
          }}
        >
          {product.stock === 0 ? 'Out of Stock' : 'Add'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;*/


/*import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';



const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <img src={`http://localhost:5000${product.image}`}
      alt={product.name}
      style={styles.image}
    />

      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>

      //✅ Correct Link 
      <Link to={`/products/${product._id}`}>
        <button style={styles.button}>View</button>
      </Link>
//Add to Cart 
      <button
        style={{
          ...styles.button,
          backgroundColor: product.stock === 0 ? '#ccc' : '#0070f3',
          cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
        }}
        onClick={onAddToCart}
        disabled={product.stock === 0}
      >
        {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '1rem',
    width: '200px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  button: {
    marginTop: '0.5rem',
    padding: '0.5rem 1rem',
    background: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
};

export default ProductCard;*/



import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Get the API base URL from environment variables
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={styles.card}>
      {/* ✅ Display image from backend server */}
      <img
        src={`${baseUrl}${product.image}`}
        alt={product.name}
        style={styles.image}
      />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>

      {/* View Product Details */}
      <Link to={`/products/${product._id}`}>
        <button style={styles.button}>View</button>
      </Link>

      {/* Add to Cart Button */}
      <button
        style={{
          ...styles.button,
          backgroundColor: product.stock === 0 ? '#ccc' : '#0070f3',
          cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
        }}
        onClick={onAddToCart}
        disabled={product.stock === 0}
      >
        {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '1rem',
    width: '200px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  button: {
    marginTop: '0.5rem',
    padding: '0.5rem 1rem',
    background: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
};

export default ProductCard;




