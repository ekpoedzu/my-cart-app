/*import React from 'react';

const ProductList = () => {
  return <h2>ProductList Page</h2>;
};

export default ProductList;*/

/*import React from 'react';
import { useCart } from '../context/CartProvider';

const products = [
  { _id: 'prod-1', name: 'Product One', price: 25 },
  { _id: 'prod-2', name: 'Product Two', price: 40 },
  { _id: 'prod-3', name: 'Product Three', price: 15 },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Products</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map(product => (
          <li key={product._id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
            <strong>{product.name}</strong> — ${product.price.toFixed(2)}
            <br />
            <button onClick={() => addToCart(product)} style={{ marginTop: '0.5rem' }}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;*/


/*import React from 'react';
import { useCart } from '../context/CartProvider';

const products = [
  {
    _id: 'prod-1',
    name: 'Product One',
    price: 25,
    description: 'A great product.',
    category: 'Clothing',
    stock: 10,
    image: 'https://via.placeholder.com/100x100?text=Product+1',
  },
  {
    _id: 'prod-2',
    name: 'Product Two',
    price: 40,
    description: 'An even better product.',
    category: 'Accessories',
    stock: 5,
    image: 'https://via.placeholder.com/100x100?text=Product+2',
  },
  {
    _id: 'prod-3',
    name: 'Product Three',
    price: 15,
    description: 'Affordable and reliable.',
    category: 'Electronics',
    stock: 20,
    image: 'https://via.placeholder.com/100x100?text=Product+3',
  },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Products</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map(product => (
          <li
            key={product._id}
            style={{
              marginBottom: '1.5rem',
              border: '1px solid #ddd',
              borderRadius: '6px',
              padding: '1rem',
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            <img src={product.image} alt={product.name} width="100" height="100" />

            <div>
              <h3>{product.name}</h3>
              <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Stock:</strong> {product.stock}</p>
              <p>{product.description}</p>

              <button
                onClick={() => addToCart(product)}
                disabled={product.stock === 0}
              >
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;*/


/*const products = [
  {
    _id: 'prod-1',
    name: 'Product One',
    price: 25,
    description: 'A great product.',
    category: 'Clothing',
    stock: 10,
    image: 'https://source.unsplash.com/featured/?tshirt',
  },
  {
    _id: 'prod-2',
    name: 'Product Two',
    price: 40,
    description: 'An even better product.',
    category: 'Accessories',
    stock: 5,
    image: 'https://source.unsplash.com/featured/?watch',
  },
  {
    _id: 'prod-3',
    name: 'Product Three',
    price: 15,
    description: 'Affordable and reliable.',
    category: 'Electronics',
    stock: 0,
    image: 'https://source.unsplash.com/featured/?headphones',
  },
];

export default ProductList;*/


/*import React, { useState } from 'react';
import { useCart } from '../context/CartProvider';

const initialProducts = [
  {
    _id: 'prod-1',
    name: 'Product One',
    price: 25,
    description: 'A great product.',
    category: 'Clothing',
    stock: 10,
    image: 'https://source.unsplash.com/featured/?tshirt',
  },
  {
    _id: 'prod-2',
    name: 'Product Two',
    price: 40,
    description: 'An even better product.',
    category: 'Accessories',
    stock: 5,
    image: 'https://source.unsplash.com/featured/?watch',
  },
  {
    _id: 'prod-3',
    name: 'Product Three',
    price: 15,
    description: 'Affordable and reliable.',
    category: 'Electronics',
    stock: 0,
    image: 'https://source.unsplash.com/featured/?headphones',
  },
];*/

/*const initialProducts = [
  {
    _id: 'prod-1',
    name: 'Product One',
    price: 25,
    description: 'A great product.',
    category: 'Clothing',
    stock: 10,
    image: '/images/tshirt.jpg',
  },
  {
    _id: 'prod-2',
    name: 'Product Two',
    price: 40,
    description: 'An even better product.',
    category: 'Accessories',
    stock: 5,
    image: '/images/watch.jpg',
  },
  {
    _id: 'prod-3',
    name: 'Product Three',
    price: 15,
    description: 'Affordable and reliable.',
    category: 'Electronics',
    stock: 0,
    image: '/images/headphones.jpg',
  },
];


const ProductList = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;

    addToCart(product);

    setProducts(prev =>
      prev.map(p =>
        p._id === product._id
          ? { ...p, stock: p.stock - 1 }
          : p
      )
    );
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Products</h2>

      <label>
        Filter by Category:{' '}
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredProducts.map(product => (
          <li
            key={product._id}
            style={{
              marginBottom: '1.5rem',
              border: '1px solid #ccc',
              padding: '1rem',
              borderRadius: '5px',
              display: 'flex',
              gap: '1rem'
            }}
          >
            <img src={product.image} alt={product.name} width={100} height={100} />
            <div>
              <h3>{product.name}</h3>
              <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Stock:</strong> {product.stock}</p>
              <p>{product.description}</p>
              <button
                onClick={() => handleAddToCart(product)}
                disabled={product.stock === 0}
              >
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;*/

/*import React, { useState } from 'react';
import { useCart } from '../context/CartProvider';
import { useOutletContext } from 'react-router-dom';

const initialProducts = [
  {
    _id: 'prod-1',
    name: 'TShirt',
    price: 25,
    description: 'A great product.',
    category: 'Clothing',
    stock: 10,
    image: '/images/tshirt.jpg',
  },
  {
    _id: 'prod-2',
    name: 'Watch',
    price: 40,
    description: 'An even better product.',
    category: 'Accessories',
    stock: 5,
    image: '/images/watch.jpg',
  },
  {
    _id: 'prod-3',
    name: 'Headphones',
    price: 15,
    description: 'Affordable and reliable.',
    category: 'Electronics',
    stock: 0,
    image: '/images/headphones.jpg',
  },
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

const ProductList = () => {
  const { addToCart } = useCart();
  const { searchTerm } = useOutletContext(); // gets searchTerm from Layout
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;

    addToCart(product);

    setProducts(prev =>
      prev.map(p =>
        p._id === product._id
          ? { ...p, stock: p.stock - 1 }
          : p
      )
    );
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Products</h2>

      <label>
        Filter by Category:{' '}
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredProducts.length === 0 ? (
          <p>No products match your search.</p>
        ) : (
          filteredProducts.map(product => (
            <li
              key={product._id}
              style={{
                marginBottom: '1.5rem',
                border: '1px solid #ccc',
                padding: '1rem',
                borderRadius: '5px',
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                style={{ objectFit: 'cover', borderRadius: '5px' }}
              />
              <div style={{ flex: 1 }}>
                <h3>{product.name}</h3>
                <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Stock:</strong> {product.stock}</p>
                <p>{product.description}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                  style={{
                    backgroundColor: product.stock === 0 ? '#ccc' : '#007bff',
                    color: product.stock === 0 ? '#666' : '#fff',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
                  }}
                >
                  {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ProductList;*/


/*import React, { useState } from 'react';
import { useCart } from '../context/CartProvider';

const initialProducts = [
  {
    _id: 'prod-1',
    name: 'TShirt',
    price: 25,
    description: 'A great product.',
    category: 'Clothing',
    stock: 10,
    image: '/images/tshirt.jpg',
  },
  {
    _id: 'prod-2',
    name: 'Watch',
    price: 40,
    description: 'An even better product.',
    category: 'Accessories',
    stock: 5,
    image: '/images/watch.jpg',
  },

  {
    _id: 'prod-3',
    name: 'Headphones',
    price: 15,
    description: 'Affordable and reliable.',
    category: 'Electronics',
    stock: 0,
    image: '/images/headphones.jpg',
  },


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
    description: 'GosticHandmade unique collection .',
    category: 'Handmade',
    stock: 10,
    image: '/images/bracelet.jpg',
  },


];

const ProductList = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Extract categories for filter dropdown
  const categories = ['All', ...new Set(products.map(p => p.category))];

  // Filter products by category and search term
  const filteredProducts = products.filter(product => {
    const matchCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Handle Add to Cart click
  const handleAddToCart = (product) => {
    if (product.stock === 0) return;

    addToCart(product);

    // Decrement stock locally to reflect UI immediately
    setProducts(prev =>
      prev.map(p =>
        p._id === product._id
          ? { ...p, stock: p.stock - 1 }
          : p
      )
    );
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Products</h2>

     
      <label>
        Filter by Category:{' '}
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label>


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
          display: 'block',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />

     
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredProducts.map(product => (
          <li
            key={product._id}
            style={{
              marginBottom: '1.5rem',
              border: '1px solid #ccc',
              padding: '1rem',
              borderRadius: '5px',
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              style={{ objectFit: 'cover', borderRadius: '5px' }}
            />
            <div style={{ flex: 1 }}>
              <h3>{product.name}</h3>
              <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Stock:</strong> {product.stock}</p>
              <p>{product.description}</p>
              <button
                onClick={() => handleAddToCart(product)}
                disabled={product.stock === 0}
                style={{
                  backgroundColor: product.stock === 0 ? '#ccc' : '#007bff',
                  color: product.stock === 0 ? '#666' : '#fff',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
                }}
              >
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;*/



/*import React, { useState } from 'react';
import { useCart } from '../context/CartProvider';
import { useOutletContext } from 'react-router-dom';

const initialProducts = [
  {
    _id: 'prod-1',
    name: 'TShirt',
    price: 25,
    description: 'A great product.',
    category: 'Clothing',
    stock: 10,
    image: '/images/tshirt.jpg',
  },
  {
    _id: 'prod-2',
    name: 'Watch',
    price: 40,
    description: 'An even better product.',
    category: 'Accessories',
    stock: 5,
    image: '/images/watch.jpg',
  },
  {
    _id: 'prod-3',
    name: 'Headphones',
    price: 15,
    description: 'Affordable and reliable.',
    category: 'Electronics',
    stock: 0,
    image: '/images/headphones.jpg',
  },
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

const ProductList = ({ searchTerm: propSearchTerm }) => {
  const { addToCart } = useCart();
  const outletContext = useOutletContext?.();
  const contextSearchTerm = outletContext?.searchTerm;

  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Combine searchTerm from context or prop
  const searchTerm = contextSearchTerm ?? propSearchTerm ?? '';

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;

    addToCart(product);

    setProducts((prev) =>
      prev.map((p) =>
        p._id === product._id ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Products</h2>

      
      <label>
        Filter by Category:{' '}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

     
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredProducts.map((product) => (
          <li
            key={product._id}
            style={{
              marginBottom: '1.5rem',
              border: '1px solid #ccc',
              padding: '1rem',
              borderRadius: '5px',
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              style={{ objectFit: 'cover', borderRadius: '5px' }}
            />
            <div style={{ flex: 1 }}>
              <h3>{product.name}</h3>
              <p>
                <strong>Price:</strong> ${product.price.toFixed(2)}
              </p>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>
                <strong>Stock:</strong> {product.stock}
              </p>
              <p>{product.description}</p>
              <button
                onClick={() => handleAddToCart(product)}
                disabled={product.stock === 0}
                style={{
                  backgroundColor: product.stock === 0 ? '#ccc' : '#007bff',
                  color: product.stock === 0 ? '#666' : '#fff',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
                }}
              >
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;*/


/*import React, { useState } from 'react';
import { useCart } from '../context/CartProvider';
import { useOutletContext } from 'react-router-dom';

const initialProducts = [
  {
    _id: 'prod-1',
    name: 'TShirt',
    price: 25,
    description: 'A great product.',
    category: 'Clothing',
    stock: 10,
    image: '/images/tshirt.jpg',
  },
  {
    _id: 'prod-2',
    name: 'Watch',
    price: 40,
    description: 'An even better product.',
    category: 'Accessories',
    stock: 5,
    image: '/images/watch.jpg',
  },
  {
    _id: 'prod-3',
    name: 'Headphones',
    price: 15,
    description: 'Affordable and reliable.',
    category: 'Electronics',
    stock: 0,
    image: '/images/headphones.jpg',
  },
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

const ProductList = ({ searchTerm: propSearchTerm }) => {
  const { addToCart } = useCart();
  const outletContext = useOutletContext?.();
  const contextSearchTerm = outletContext?.searchTerm;

  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Combine searchTerm from context or prop
  const searchTerm = contextSearchTerm ?? propSearchTerm ?? '';

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;

    addToCart(product);

    setProducts((prev) =>
      prev.map((p) =>
        p._id === product._id ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Products</h2>

   
      <label>
        Filter by Category:{' '}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

    
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredProducts.map((product) => (
          <li
            key={product._id}
            style={{
              marginBottom: '1.5rem',
              border: '1px solid #ccc',
              padding: '1rem',
              borderRadius: '5px',
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              style={{ objectFit: 'cover', borderRadius: '5px' }}
            />
            <div style={{ flex: 1 }}>
              <h3>{product.name}</h3>
              <p>
                <strong>Price:</strong> ${product.price.toFixed(2)}
              </p>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>
                <strong>Stock:</strong> {product.stock}
              </p>
              <p>{product.description}</p>
              <button
                onClick={() => handleAddToCart(product)}
                disabled={product.stock === 0}
                style={{
                  backgroundColor: product.stock === 0 ? '#ccc' : '#007bff',
                  color: product.stock === 0 ? '#666' : '#fff',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
                }}
              >
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;*/



/*import React, { useState } from 'react';
import { useCart } from '../context/CartProvider';

const initialProducts = [
  {
    _id: 'prod-1',
    name: 'TShirt',
    price: 25,
    description: 'A great product.',
    category: 'Clothing',
    stock: 10,
    image: '/images/tshirt.jpg',
  },
  {
    _id: 'prod-2',
    name: 'Watch',
    price: 40,
    description: 'An even better product.',
    category: 'Accessories',
    stock: 5,
    image: '/images/watch.jpg',
  },
  {
    _id: 'prod-3',
    name: 'Headphones',
    price: 15,
    description: 'Affordable and reliable.',
    category: 'Electronics',
    stock: 0,
    image: '/images/headphones.jpg',
  },
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

const ProductList = ({ searchTerm = '' }) => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;

    addToCart(product);

    setProducts((prev) =>
      prev.map((p) =>
        p._id === product._id ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Products</h2>

      
      <label>
        Filter by Category:{' '}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

     
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredProducts.map((product) => (
          <li
            key={product._id}
            style={{
              marginBottom: '1.5rem',
              border: '1px solid #ccc',
              padding: '1rem',
              borderRadius: '5px',
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              style={{ objectFit: 'cover', borderRadius: '5px' }}
            />
            <div style={{ flex: 1 }}>
              <h3>{product.name}</h3>
              <p>
                <strong>Price:</strong> ${product.price.toFixed(2)}
              </p>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>
                <strong>Stock:</strong> {product.stock}
              </p>
              <p>{product.description}</p>
              <button
                onClick={() => handleAddToCart(product)}
                disabled={product.stock === 0}
                style={{
                  backgroundColor: product.stock === 0 ? '#ccc' : '#007bff',
                  color: product.stock === 0 ? '#666' : '#fff',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
                }}
              >
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;*/


/*import React, { useState } from 'react';
import { useCart } from '../context/CartProvider';
import { useOutletContext } from 'react-router-dom';

const initialProducts = [
  {
    _id: 'prod-1',
    name: 'TShirt',
    price: 25,
    description: 'A great product.',
    category: 'Clothing',
    stock: 10,
    image: '/images/tshirt.jpg',
  },
  {
    _id: 'prod-2',
    name: 'Watch',
    price: 40,
    description: 'An even better product.',
    category: 'Accessories',
    stock: 5,
    image: '/images/watch.jpg',
  },
  {
    _id: 'prod-3',
    name: 'Headphones',
    price: 15,
    description: 'Affordable and reliable.',
    category: 'Electronics',
    stock: 0,
    image: '/images/headphones.jpg',
  },
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

//const ProductList = () => {
 // const { addToCart } = useCart();
 // const { searchTerm = '' } = useOutletContext();

const ProductList = () => {
  const { addToCart } = useCart();
  const { searchTerm = '' } = useOutletContext() || {};

  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;

    addToCart(product);

    setProducts((prev) =>
      prev.map((p) =>
        p._id === product._id ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Products</h2>

      / Category Filter 
      <label>
        Filter by Category:{' '}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      // Product List 
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredProducts.map((product) => (
          <li
            key={product._id}
            style={{
              marginBottom: '1.5rem',
              border: '1px solid #ccc',
              padding: '1rem',
              borderRadius: '5px',
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              style={{ objectFit: 'cover', borderRadius: '5px' }}
            />
            <div style={{ flex: 1 }}>
              <h3>{product.name}</h3>
              <p>
                <strong>Price:</strong> ${product.price.toFixed(2)}
              </p>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>
                <strong>Stock:</strong> {product.stock}
              </p>
              <p>{product.description}</p>
              <button
                onClick={() => handleAddToCart(product)}
                disabled={product.stock === 0}
                style={{
                  backgroundColor: product.stock === 0 ? '#ccc' : '#007bff',
                  color: product.stock === 0 ? '#666' : '#fff',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
                }}
              >
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;*/



/*import React, { useState } from 'react';
import { useCart } from '../context/CartProvider';
import { useOutletContext } from 'react-router-dom';
import ProductCard from './ProductCard';

const initialProducts = [
  {
    _id: 'prod-1',
    name: 'TShirt',
    price: 25,
    description: 'A great product.',
    category: 'Clothing',
    stock: 10,
    image: '/images/tshirt.jpg',
  },
  {
    _id: 'prod-2',
    name: 'Watch',
    price: 40,
    description: 'An even better product.',
    category: 'Accessories',
    stock: 5,
    image: '/images/watch.jpg',
  },
  {
    _id: 'prod-3',
    name: 'Headphones',
    price: 15,
    description: 'Affordable and reliable.',
    category: 'Electronics',
    stock: 0,
    image: '/images/headphones.jpg',
  },
  
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

const ProductList = () => {
  const { addToCart } = useCart();
  const { searchTerm = '' } = useOutletContext() || {};

  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;

    addToCart(product);

    setProducts((prev) =>
      prev.map((p) =>
        p._id === product._id ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };
const ProductList = ({ products }) => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      {products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Products</h2>

  
      <label>
        Filter by Category:{' '}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredProducts.length === 0 ? (
          <li style={{ padding: '1rem', color: 'gray' }}>
            No products found for your search.
          </li>
        ) : (
          filteredProducts.map((product) => (
            <li
              key={product._id}
              style={{
                marginBottom: '1.5rem',
                border: '1px solid #ccc',
                padding: '1rem',
                borderRadius: '5px',
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                style={{ objectFit: 'cover', borderRadius: '5px' }}
              />
              <div style={{ flex: 1 }}>
                <h3>{product.name}</h3>
                <p>
                  <strong>Price:</strong> ${product.price.toFixed(2)}
                </p>
                <p>
                  <strong>Category:</strong> {product.category}
                </p>
                <p>
                  <strong>Stock:</strong> {product.stock}
                </p>
                <p>{product.description}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                  style={{
                    backgroundColor: product.stock === 0 ? '#ccc' : '#007bff',
                    color: product.stock === 0 ? '#666' : '#fff',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
                  }}
                >
                  {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ProductList;*/



/*import React, { useState } from 'react';
//import { useCart } from '../context/CartProvider';
import { useOutletContext } from 'react-router-dom';
//import ProductCard from './ProductCard';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';


const initialProducts = [
  {
    _id: 'prod-1',
    name: 'TShirt',
    price: 25,
    description: 'A great product.',
    category: 'Clothing',
    stock: 10,
    image: '/images/tshirt.jpg',
  },
  {
    _id: 'prod-2',
    name: 'Watch',
    price: 40,
    description: 'An even better product.',
    category: 'Accessories',
    stock: 5,
    image: '/images/watch.jpg',
  },
  {
    _id: 'prod-3',
    name: 'Headphones',
    price: 15,
    description: 'Affordable and reliable.',
    category: 'Electronics',
    stock: 0,
    image: '/images/headphones.jpg',
  },
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

const ProductList = () => {
  const { addToCart } = useCart();
  const { searchTerm = '' } = useOutletContext() || {};

  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;

    addToCart(product);

    setProducts((prev) =>
      prev.map((p) =>
        p._id === product._id ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Products</h2>

      //Category Filter 
      <label>
        Filter by Category:{' '}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      // Product Grid 
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: '1rem',
        }}
      >
        {filteredProducts.length === 0 ? (
          <p style={{ padding: '1rem', color: 'gray' }}>
            No products found for your search.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;*/



/*import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/cart'); // or directly to /checkout
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
};

export default ProductList;*/


/*import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/cart'); // or directly to /checkout
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
};

// Define ProductList component
const ProductList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;*/




/*import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

const initialProducts = [
  {
    _id: 'prod-1',
    name: 'TShirt',
    price: 25,
    description: 'A great product.',
    category: 'Clothing',
    stock: 10,
    image: '/images/tshirt.jpg',
  },
  {
    _id: 'prod-2',
    name: 'Watch',
    price: 40,
    description: 'An even better product.',
    category: 'Accessories',
    stock: 5,
    image: '/images/watch.jpg',
  },
  {
    _id: 'prod-3',
    name: 'Headphones',
    price: 15,
    description: 'Affordable and reliable.',
    category: 'Electronics',
    stock: 0,
    image: '/images/headphones.jpg',
  },
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
    description: 'Gostic Handmade unique collection.',
    category: 'Handmade',
    stock: 10,
    image: '/images/bracelet.jpg',
  },
];

const ProductList = () => {
  const { addToCart } = useCart();
  const { searchTerm = '' } = useOutletContext() || {};

  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;

    addToCart(product);

    setProducts((prev) =>
      prev.map((p) =>
        p._id === product._id ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Products</h2>

      // Category Filter 
      <label>
        Filter by Category:{' '}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      // Product Grid 
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: '1rem',
        }}
      >
        {filteredProducts.length === 0 ? (
          <p style={{ padding: '1rem', color: 'gray' }}>
            No products found for your search.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;*/



/*import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

const ProductList = () => {
  const { addToCart } = useCart();
  const { searchTerm = '' } = useOutletContext() || {};

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/products');
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error('❌ Failed to fetch products:', err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;

    addToCart(product);
    setProducts((prev) =>
      prev.map((p) =>
        p._id === product._id ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Products</h2>

     // Category Filter 
      <label>
        Filter by Category:{' '}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      // Product Grid 
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: '1rem',
        }}
      >
        {filteredProducts.length === 0 ? (
          <p style={{ padding: '1rem', color: 'gray' }}>
            No products found for your search.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;*/



// pages/ProductList.jsx
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('/api/products').then((res) => setProducts(res.data));
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-4">
      //Top Bar with Search 
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">All Products</h2>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      //Product Grid 
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product._id} className="border p-3 rounded shadow">
            <h3 className="font-medium">{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;*/


/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products');
        console.log('📦 products response from backend:', res.data);

        // If backend returns { products: [...] }
        const data = Array.isArray(res.data)
          ? res.data
          : res.data.products || [];

        setProducts(data);
      } catch (error) {
        console.error('❌ Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = Array.isArray(products)
    ? products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  if (loading) return <p className="p-4">Loading products...</p>;

  return (
    <div className="px-4">
   
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">All Products</h2>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id} className="border p-3 rounded shadow">
              <h3 className="font-medium">{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-gray-500">
            No products match your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;*/




/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products');
        console.log('📦 products response from backend:', res.data);

        const data = Array.isArray(res.data)
          ? res.data
          : res.data.products || [];

        setProducts(data);
      } catch (error) {
        console.error('❌ Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ✅ Get unique categories
  const categories = ['All', ...new Set(products.map((p) => p.category))];

  // ✅ Filter products by search + category
  const filteredProducts = Array.isArray(products)
    ? products.filter((product) => {
        const matchCategory =
          selectedCategory === 'All' || product.category === selectedCategory;
        const matchSearch = product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        return matchCategory && matchSearch;
      })
    : [];

  if (loading) return <p className="p-4">Loading products...</p>;

  return (
    <div className="px-4">
      // 🔍 Search + Category Filter 
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div>
          <label className="mr-2 font-medium">Filter by:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      //🛍️ Product Grid 
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="border rounded shadow p-3 hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-gray-600">${product.price}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products match your search or category.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;*/



/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import SearchBar from '../components/SearchBar';

const ProductList = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products');
        const data = Array.isArray(res.data)
          ? res.data
          : res.data.products || [];
        setProducts(data);
      } catch (error) {
        console.error('❌ Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;
    addToCart(product);
  };

  if (loading) return <p className="p-4">Loading products...</p>;

  return (
    <div className="px-4 py-6">
      // 🔍 Filters 
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div>
          <label className="mr-2 font-medium">Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      // 🛍️ Product Grid /
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product._id}
               className="border rounded-lg shadow hover:shadow-lg transition p-3 flex flex-col h-[350px]"
            >

              <img
                src={product.image || 'https://via.placeholder.com/300'}
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-sm text-gray-700">${product.price}</p>

              {product.stock === 0 ? (
                <p className="text-red-500 text-xs mt-1">Out of Stock</p>
              ) : (
                <p className="text-green-600 text-xs mt-1">
                  In Stock: {product.stock}
                </p>
              )}

              <div className="mt-auto flex justify-between gap-2 pt-4">
                <button
                  onClick={() => navigate(`/product/${product._id}`)}
                  className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 w-1/2"
                >
                  View
                </button>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                  className={`${
                    product.stock === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  } px-3 py-1 rounded text-sm w-1/2`}
                >
                  Add
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No matching products.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;*/



// my working pages/ProductList.jsx
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import SearchBar from '../components/SearchBar';

const ProductList = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products');
        const data = Array.isArray(res.data)
          ? res.data
          : res.data.products || [];
        setProducts(data);
      } catch (error) {
        console.error('❌ Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;
    addToCart(product);
  };

  if (loading) return <p className="p-4">Loading products...</p>;

  return (
    <div className="px-4 py-6">
      // 🔍 Filters 
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div>
          <label className="mr-2 font-medium">Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      // 🛍️ Product Grid 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow hover:shadow-lg transition p-3 flex flex-col h-[250px]"
            >
              <img
                src={product.image || 'https://via.placeholder.com/300'}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-sm text-gray-700">${product.price}</p>

              {product.stock === 0 ? (
                <p className="text-red-500 text-xs mt-1">Out of Stock</p>
              ) : (
                <p className="text-green-600 text-xs mt-1">
                  In Stock: {product.stock}
                </p>
              )}

              <div className="mt-auto flex justify-between gap-2 pt-4">
                <button
                  onClick={() => navigate(`/product/${product._id}`)}
                  className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 w-1/2"
                >
                  View

                </button>
                
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                  className={`${
                    product.stock === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  } px-3 py-1 rounded text-sm w-1/2`}
                >
                  Add
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No matching products.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;*/



//working  pages/ProductList.jsx
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import SearchBar from '../components/SearchBar';

const ProductList = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products');
        const data = Array.isArray(res.data)
          ? res.data
          : res.data.products || [];
        setProducts(data);
      } catch (error) {
        console.error('❌ Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;
    addToCart(product);
  };

  const handleBuyNow = (product) => {
    if (product.stock === 0) return;
    addToCart(product);
    navigate('/cart'); // or navigate('/checkout') if you want
  };

  /*const handleBuyNow = (product) => {
  if (product.stock === 0) return;
  navigate(`/product/${product._id}`);
};*/


 /* if (loading) return <p className="p-4">Loading products...</p>;

  return (
    <div className="px-4 py-6">
      //🔍 Filters 
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div>
          <label className="mr-2 font-medium">Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      //🛍️ Product Grid 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: '1rem',
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow hover:shadow-lg transition p-3 flex flex-col h-[260px]"
            >
              <img
                src={product.image || 'https://via.placeholder.com/300'}
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-sm text-gray-700">${product.price}</p>

              {product.stock === 0 ? (
                <p className="text-red-500 text-xs mt-1">Out of Stock</p>
              ) : (
                <p className="text-green-600 text-xs mt-1">
                  In Stock: {product.stock}
                </p>
              )}

              <div className="mt-auto flex justify-between gap-2 pt-4">
                <button
                  onClick={() => handleBuyNow(product)}
                  disabled={product.stock === 0}
                  className={`${
                    product.stock === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  } px-3 py-1 rounded text-sm w-1/2`}
                >
                  View and Buy 
                </button>

                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                  className={`${
                    product.stock === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  } px-3 py-1 rounded text-sm w-1/2`}
                >
                  Add
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No matching products.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;*/




//new working
// pages/ProductList.jsx
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import SearchBar from '../components/SearchBar';

const ProductList = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products');
        const data = Array.isArray(res.data)
          ? res.data
          : res.data.products || [];
        setProducts(data);
      } catch (error) {
        console.error('❌ Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;
    addToCart(product);
  };

  const handleBuyNow = (product) => {
    if (product.stock === 0) return;
    addToCart(product);
    // ✅ Corrected navigation to match App.jsx route
    navigate(`/products/${product._id}`);
  };

  if (loading) return <p className="p-4">Loading products...</p>;

  return (
    <div className="px-4 py-6">
      // Filters 
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div>
          <label className="mr-2 font-medium">Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      //Product Grid 
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: '1rem',
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow hover:shadow-lg transition p-3 flex flex-col h-[260px]"
            >
              <img
                src={product.image || 'https://via.placeholder.com/300'}
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-sm text-gray-700">${product.price}</p>

              {product.stock === 0 ? (
                <p className="text-red-500 text-xs mt-1">Out of Stock</p>
              ) : (
                <p className="text-green-600 text-xs mt-1">
                  In Stock: {product.stock}
                </p>
              )}

              <div className="mt-auto flex justify-between gap-2 pt-4">
                <button
                  onClick={() => handleBuyNow(product)}
                  disabled={product.stock === 0}
                  className={`${
                    product.stock === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  } px-3 py-1 rounded text-sm w-1/2`}
                >
                  View and Buy
                </button>

                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                  className={`${
                    product.stock === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  } px-3 py-1 rounded text-sm w-1/2`}
                >
                  Add
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No matching products.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;*/




// current pages/ProductList.jsx
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import SearchBar from '../components/SearchBar';

const ProductList = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products');
        const data = Array.isArray(res.data)
          ? res.data
          : res.data.products || [];
        setProducts(data);
      } catch (error) {
        console.error('❌ Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;
    addToCart(product);
  };

  const handleBuyNow = (product) => {
    if (product.stock === 0) return;
    addToCart(product);
    navigate('/cart'); // or navigate('/checkout') if you want
  };

  if (loading) return <p className="p-4">Loading products...</p>;

  return (
    <div className="px-4 py-6">
      // 🔍 Filters 
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div>
          <label className="mr-2 font-medium">Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      // 🛍️ Product Grid 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: '1rem',
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow hover:shadow-lg transition p-3 flex flex-col h-[260px]"
            >
              <img
                src={product.image || 'https://via.placeholder.com/300'}
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-sm text-gray-700">${product.price}</p>

              {product.stock === 0 ? (
                <p className="text-red-500 text-xs mt-1">Out of Stock</p>
              ) : (
                <p className="text-green-600 text-xs mt-1">
                  In Stock: {product.stock}
                </p>
              )}

              <div className="mt-auto flex justify-between gap-2 pt-4">
                <button
                  onClick={() => handleBuyNow(product)}
                  disabled={product.stock === 0}
                  className={`${
                    product.stock === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  } px-3 py-1 rounded text-sm w-1/2`}
                >
                  View and Buy 
                </button>

                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                  className={`${
                    product.stock === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  } px-3 py-1 rounded text-sm w-1/2`}
                >
                  Add
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No matching products.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;*/





// pages/ProductList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import SearchBar from '../components/SearchBar';

const ProductList = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products');
        const data = Array.isArray(res.data)
          ? res.data
          : res.data.products || [];
        setProducts(data);
      } catch (error) {
        console.error('❌ Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;
    addToCart(product);
  };

  const handleBuyNow = (product) => {
    if (product.stock === 0) return;
    addToCart(product);
    navigate('/checkout');
  };

  if (loading) return <p className="p-4">Loading products...</p>;

  return (
    <div className="px-4 py-6">
      {/* 🔍 Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div>
          <label className="mr-2 font-medium">Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 🛍️ Product Grid */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: '1rem',
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow hover:shadow-lg transition p-3 flex flex-col h-[260px]"
            >
              <img
                src={product.image || 'https://via.placeholder.com/300'}
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-sm text-gray-700">${product.price}</p>

              {product.stock === 0 ? (
                <p className="text-red-500 text-xs mt-1">Out of Stock</p>
              ) : (
                <p className="text-green-600 text-xs mt-1">
                  In Stock: {product.stock}
                </p>
              )}

              <div className="mt-auto flex justify-between gap-2 pt-4">
                {/* ✅ Navigate to ProductDetail using real _id */}
                <button
                  onClick={() => navigate(`/products/${product._id}`)}
                  disabled={product.stock === 0}
                  className={`${
                    product.stock === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  } px-3 py-1 rounded text-sm w-1/2`}
                >
                  View
                </button>

                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                  className={`${
                    product.stock === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  } px-3 py-1 rounded text-sm w-1/2`}
                >
                  Add
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No matching products.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;






