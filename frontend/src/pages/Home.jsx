// Home.jsx
/*const Home = () => <h2>Home Page</h2>;
export default Home;*/

/*import React from 'react';
import { useCart } from '../context/CartProvider';

const Home = () => {
  const { addToCart } = useCart();

  const sampleProduct = {
    _id: 'prod-1',
    name: 'Sample Product',
    price: 20,
  };

  return (
    <div>
      <h2>Home</h2>
      <p>{sampleProduct.name} — ${sampleProduct.price}</p>
      <button onClick={() => addToCart(sampleProduct)}>Add to Cart</button>
    </div>
  );
};

export default Home;*/


/*import React from 'react';
import { useCart } from '../context/CartProvider';
import { Link } from 'react-router-dom';

const Home = () => {
  const { addToCart } = useCart();

  const sampleProduct = {
    _id: 'prod-1',
    name: 'Sample Product',
    price: 20,
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Welcome to My Store</h2>
      <p>Browse our <Link to="/products">Products</Link> and add them to your cart.</p>

      <hr />

      <h3>Quick Add Sample Product</h3>
      <p>{sampleProduct.name} — ${sampleProduct.price}</p>
      <button onClick={() => addToCart(sampleProduct)}>Add to Cart</button>
    </div>
  );
};

export default Home;*/


/*import React from 'react';
import { useCart } from '../context/CartProvider';
import { Link } from 'react-router-dom';

const Home = () => {
  const { addToCart } = useCart();

  const sampleProduct = {
    _id: 'prod-1',
    name: 'Sample Product',
    price: 20,
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Welcome to My Store</h2>
      <p>
        Browse our <Link to="/products">Products</Link> and add them to your cart.
      </p>

      <hr />

      <h3>Quick Add Sample Product</h3>
      <p>{sampleProduct.name} — ${sampleProduct.price}</p>
      <button onClick={() => addToCart(sampleProduct)}>Add to Cart</button>
    </div>
  );
};

export default Home;*/


/*import React, { useState } from 'react';
import ProductList from './ProductList';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Welcome to My Store</h1>
      <p>Browse our Products and add them to your cart.</p>

      
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{
          margin: '1rem 0',
          padding: '0.5rem',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />

    
      <ProductList searchTerm={searchTerm} />
    </div>
  );
};

export default Home;*/



/*import React from 'react';
import ProductList from './ProductList';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
  const { searchTerm } = useOutletContext();

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Welcome to My Store</h1>
      <p>Browse our Products and add them to your cart.</p>

      
      <ProductList searchTerm={searchTerm} />
    </div>
  );
};

export default Home;*/


/*import React, { useState } from 'react';
import ProductList from './ProductList';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Welcome to My Store</h1>
      <p>Browse our Products and add them to your cart.</p>

      // Search bar 
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{
          margin: '1rem 0',
          padding: '0.5rem',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />

      // Pass searchTerm to ProductList 
      <ProductList searchTerm={searchTerm} />
    </div>
  );
};

export default Home; // ✅ This is essential*/



/*import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Welcome to My Store</h1>
      <p>Browse our products and add them to your cart.</p>
    </div>
  );
};

export default Home;*/


// src/pages/Home.jsx
/*import React from 'react';
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


const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our Store</h1>
      <div style={styles.grid}>
        {sampleProducts.map((product) => (
  <div key={product._id} style={styles.card}>
    <img src={product.image} alt={product.name} style={styles.image} />
    <h3>{product.name}</h3>
    <p>${product.price.toFixed(2)}</p>
    <button style={styles.button}>View Product</button>
  </div>
))}




      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '2rem',
    fontSize: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '1rem',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  button: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    background: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Home;*/


import React from 'react';
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

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our Zirayco Store</h1>
      <div style={styles.grid}>
        {sampleProducts.map((product) => (
          <div key={product._id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button
              style={styles.button}
              onClick={() => navigate(`/products/${product._id}`)}
            >
              View Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '2rem',
    fontSize: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '1rem',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  button: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    background: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Home;


