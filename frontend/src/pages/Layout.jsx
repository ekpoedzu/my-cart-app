/*import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <header>
   
      <h1>My Store</h1>
    </header>

    <main>
      <Outlet />  
    </main>
  </div>
);

export default Layout;*/


/*import { Outlet, Link } from 'react-router-dom';

const Layout = () => (
  <div>
    <nav style={{ marginBottom: '1rem' }}>
      <Link to="/">Home</Link> |{' '}
      <Link to="/products">Products</Link> |{' '}
      <Link to="/cart">Cart</Link>
    </nav>
    <main>
      <Outlet />
    </main>
  </div>
);

export default Layout;*/

/*import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div style={{ padding: '1rem' }}>
    
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/products">Products</Link> |{' '}
        <Link to="/cart">Cart</Link>
      </nav>

     
      {location.pathname === '/products' && (
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{
            marginBottom: '1rem',
            padding: '0.5rem',
            width: '100%',
            maxWidth: '400px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            display: 'block',
          }}
        />
      )}

      
      <Outlet context={{ searchTerm }} />
    </div>
  );
};

export default Layout;*/


/*import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <header style={{ padding: '1rem', background: '#f4f4f4' }}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{
            padding: '0.5rem',
            width: '100%',
            maxWidth: '400px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
      </header>

  
      <Outlet context={{ searchTerm }} />
    </div>
  );
};

export default Layout;



/*import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div style={{ padding: '1rem' }}>
      {/* Nav
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/products">Products</Link> |{' '}
        <Link to="/cart">Cart</Link>
      </nav>

      <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '0.5rem',
            maxWidth: '300px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
      </div>

      
      <Outlet context={{ searchTerm }} />
    </div>
  );
};

export default Layout;*/


/*import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div style={{ padding: '1rem' }}>
    
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/products">Products</Link> |{' '}
        <Link to="/cart">Cart</Link>
      </nav>

     
      {location.pathname === '/products' && (
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{
            marginBottom: '1rem',
            padding: '0.5rem',
            width: '100%',
            maxWidth: '400px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            display: 'block',
          }}
        />
      )}

      
      <Outlet context={{ searchTerm }} />
    </div>
  );
};

export default Layout;*/


/*import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div style={{ padding: '1rem' }}>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/products">Products</Link> |{' '}
        <Link to="/cart">Cart</Link>
      </nav>

      {location.pathname === '/products' && (
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            marginBottom: '1rem',
            padding: '0.5rem',
            width: '100%',
            maxWidth: '400px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            display: 'block',
          }}
        />
      )}

      <Outlet context={{ searchTerm }} />
    </div>
  );
};

export default Layout;*/


/*import { useCart } from '../context/CartProvider';

const Layout = () => {
  // ...other code
  const { cartItems } = useCart();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={{ marginBottom: '1rem' }}>
      <Link to="/">Home</Link> |{' '}
      <Link to="/products">Products</Link> |{' '}
      <Link to="/cart">
        Cart {totalQuantity > 0 && <span>({totalQuantity})</span>}
      </Link>
    </nav>
    // ...rest of Layout
  );
};*/


/*import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // ✅

const Layout = () => {
  const { cartItems } = useCart(); // ✅ Get cart items
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0); // ✅ Total quantity

  return (
    <>
      <nav style={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartCount})</Link>//* ✅ Show count 
         <Link to="/cart">Cart ({cartItems.length})</Link>
         <Link to="/cart">  Cart ({totalQuantity})</Link>
      </nav>
      <Outlet />
    </>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
  },
};

export default Layout;*/



/*import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // ✅ Import cart context

const Layout = () => {
  const { cartItems } = useCart(); // ✅ Access cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0); // ✅ Calculate total quantity

  return (
    <>
      <nav style={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          🛒 Cart {totalQuantity > 0 && `(${totalQuantity})`}
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    gap: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    fontSize: '1.2rem',
  },
};

export default Layout;*/



/*import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Layout = () => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/cart" style={styles.link}>
          🛒 Cart{totalQuantity > 0 ? ` (${totalQuantity})` : ''}
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    fontSize: '1.2rem',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
  },
};

export default Layout;*/


/*import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa'; // 🛒 FontAwesome cart icon

const Layout = () => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/cart" style={styles.link}>
          <FaShoppingCart style={{ marginRight: '6px' }} />
          Cart{totalQuantity > 0 ? ` (${totalQuantity})` : ''}
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    fontSize: '1.2rem',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
  },
};

export default Layout;*/


/*import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const Layout = () => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/cart" style={{ ...styles.link, position: 'relative' }}>
          <FaShoppingCart style={{ marginRight: '6px' }} />
          Cart
          {totalQuantity > 0 && (
            <span style={styles.badge}>{totalQuantity}</span>
          )}
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    fontSize: '1.2rem',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: '-6px',
    right: '-10px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    fontSize: '12px',
    padding: '2px 6px',
    minWidth: '20px',
    textAlign: 'center',
  },
};

export default Layout;*/



/*import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const Layout = () => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>

        <div style={styles.cartWrapper}>
          <Link to="/cart" style={styles.cartLink}>
            <FaShoppingCart style={{ marginRight: '6px' }} />
            Cart
          </Link>
          {totalQuantity > 0 && (
            <span style={styles.badge}>{totalQuantity}</span>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    fontSize: '1.2rem',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
  },
  cartWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  cartLink: {
    textDecoration: 'none',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: '-6px',
    right: '-10px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    fontSize: '12px',
    padding: '2px 6px',
    minWidth: '20px',
    textAlign: 'center',
  },
};

export default Layout;*/


/*import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa'; // Ensure this package is installed

const Layout = () => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>

        <div style={styles.cartWrapper}>
          <Link to="/cart" style={styles.cartLink}>
            // Replace below line temporarily with emoji to debug 
            <FaShoppingCart style={{ marginRight: '6px' }} />
            // <span style={{ marginRight: '6px' }}>🛒</span> 
            Cart
          </Link>
          {totalQuantity > 0 && (
            <span style={styles.badge}>{totalQuantity}</span>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    fontSize: '1.2rem',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
  },
  cartWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  cartLink: {
    textDecoration: 'none',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: '-6px',
    right: '-10px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    fontSize: '12px',
    padding: '2px 6px',
    minWidth: '20px',
    textAlign: 'center',
  },
};

export default Layout;*/


/*import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';

const Layout = () => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>

        {user ? (
          <>
            <Link to="/profile" style={styles.link}>Profile</Link>
            <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
          </>
        ) : (
          <Link to="/login" style={styles.link}>Login</Link>
        )}

        <div style={styles.cartWrapper}>
          <Link to="/cart" style={styles.cartLink}>
            <FaShoppingCart style={{ marginRight: '6px' }} />
            Cart
          </Link>
          {totalQuantity > 0 && (
            <span style={styles.badge}>{totalQuantity}</span>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    fontSize: '1.2rem',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
  },
  logoutButton: {
    background: 'none',
    border: 'none',
    color: '#333',
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontFamily: 'inherit',
    padding: 0,
    marginLeft: '0.5rem',
  },
  cartWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto', // Push cart icon to the right
  },
  cartLink: {
    textDecoration: 'none',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: '-6px',
    right: '-10px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    fontSize: '12px',
    padding: '2px 6px',
    minWidth: '20px',
    textAlign: 'center',
  },
};

export default Layout;*/



/*import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { FaShoppingCart } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext.jsx';

const Layout = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/login'); // redirect to login after logout
  };

  return (
    <>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>

        <div style={styles.cartWrapper}>
          <Link to="/cart" style={styles.cartLink}>
            <FaShoppingCart style={{ marginRight: '6px' }} />
            Cart
          </Link>
          {totalQuantity > 0 && (
            <span style={styles.badge}>{totalQuantity}</span>
          )}
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {user ? (
            <>
              <span>Welcome, {user.name || user.email}</span>
              <Link to="/profile" style={styles.link}>Profile</Link>
              <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" style={styles.link}>Login</Link>
              <Link to="/register" style={styles.link}>Register</Link>
            </>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    fontSize: '1.2rem',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
  },
  cartWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  cartLink: {
    textDecoration: 'none',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: '-6px',
    right: '-10px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    fontSize: '12px',
    padding: '2px 6px',
    minWidth: '20px',
    textAlign: 'center',
  },
  logoutButton: {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#333',
    fontSize: '1rem',
  }
};

export default Layout;*/


/*import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;*/


/*import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Footer from './Footer';


const Layout = () => {
  const { user } = useAuth();

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/register">Register</Link>}
        {user && <Link to="/profile">Profile</Link>}
        {user && <Link to="/logout">Logout</Link>}
      </nav>
      <Outlet />
    </>
  );

<>
  <nav style={styles.navbar}>...nav content...</nav>

  <main style={{ padding: '1rem', minHeight: '80vh' }}>
    <Outlet />
  </main>

  <Footer />
</>


};

export default Layout;*/

/*import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';
import Register from "./pages/Register";

const Layout = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      // Navbar 
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 border-b border-gray-300">
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-black font-medium">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-black font-medium">Products</Link>
          <Link to="/cart" className="flex items-center text-gray-700 hover:text-black font-medium">
          <Link to="/Register" className="text-gray-700 hover:text-black font-medium">Register</Link>

            <FaShoppingCart className="mr-1" />
            Cart
            {totalQuantity > 0 && (
              <span className="ml-1 bg-red-600 text-white rounded-full text-xs px-2 py-0.5">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <Link to="/profile" className="text-gray-700 hover:text-black font-medium">Profile</Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="text-gray-700 hover:text-black font-medium">Login</Link>
           
          )}

        
        </div>
      </nav>

      //Main Content 
      <main className="p-4 min-h-[80vh]">
        <Outlet />
      </main>

      // Footer 
      <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4 border-t border-gray-300">
        © {new Date().getFullYear()} My E-Commerce Site. All rights reserved.
      </footer>

    </>
  );
};

export default Layout;*/



// src/components/Layout.jsx
/*import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';
import Footer from './Footer';

const Layout = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      // Navbar 
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 border-b border-gray-300">
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-black font-medium">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-black font-medium">Products</Link>
          <Link to="/cart" className="flex items-center text-gray-700 hover:text-black font-medium">
            <FaShoppingCart className="mr-1" />
            Cart
            {totalQuantity > 0 && (
              <span className="ml-1 bg-red-600 text-white rounded-full text-xs px-2 py-0.5">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <Link to="/profile" className="text-gray-700 hover:text-black font-medium">Profile</Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-black font-medium">Login</Link>
              <Link to="/register" className="text-gray-700 hover:text-black font-medium">Register</Link>
            </>
          )}
        </div>
      </nav>

      // Page Content 
      <main className="p-4 min-h-[80vh]">
        <Outlet />
      </main>

      //Footer 
      <Footer />
    </>
  );
};

export default Layout;*/



/*import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';
import Footer from './Footer';

const Layout = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      // Navbar 
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 border-b border-gray-300">
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-black font-medium">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-black font-medium">Products</Link>
          <Link to="/cart" className="flex items-center text-gray-700 hover:text-black font-medium">
            <FaShoppingCart className="mr-1" />
            Cart
            {totalQuantity > 0 && (
              <span className="ml-1 bg-red-600 text-white rounded-full text-xs px-2 py-0.5">
                {totalQuantity}
              </span>
            )}
          </Link>

          {user && (
            <Link to="/orders" className="text-gray-700 hover:text-black font-medium">
              My Orders
            </Link>
          )}
        </div>

        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <Link to="/profile" className="text-gray-700 hover:text-black font-medium">Profile</Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-black font-medium">Login</Link>
              <Link to="/register" className="text-gray-700 hover:text-black font-medium">Register</Link>
            </>
          )}
        </div>
      </nav>

      // Page Content 
      <main className="p-4 min-h-[80vh]">
        <Outlet />
      </main>

      // Footer 
      <Footer />
    </>
  );
};

export default Layout;*/


// src/components/Layout.jsx
/*import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';
import Footer from './Footer';
c

onsole.log('Auth User:', user);


const Layout = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      // Navbar 
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 border-b border-gray-300">
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-black font-medium">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-black font-medium">Products</Link>
          <Link to="/cart" className="flex items-center text-gray-700 hover:text-black font-medium">
            <FaShoppingCart className="mr-1" />
            Cart
            {totalQuantity > 0 && (
              <span className="ml-1 bg-red-600 text-white rounded-full text-xs px-2 py-0.5">
                {totalQuantity}
              </span>
            )}
          </Link>

          {user && (
            <Link to="/my-orders" className="text-gray-700 hover:text-black font-medium">
              My Orders
            </Link>
          )}
        </div>

        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <Link to="/profile" className="text-gray-700 hover:text-black font-medium">Profile</Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-black font-medium">Login</Link>
              <Link to="/register" className="text-gray-700 hover:text-black font-medium">Register</Link>
            </>
          )}
        </div>
      </nav>

      // Page Content 
      <main className="p-4 min-h-[80vh]">
        <Outlet />
      </main>

      // Footer 
      <Footer />
    </>
  );
};

export default Layout;*/


/*import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';
import Footer from './Footer';

const Layout = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      //Navbar 
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 border-b border-gray-300">
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-black font-medium">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-black font-medium">Products</Link>
          <Link to="/cart" className="flex items-center text-gray-700 hover:text-black font-medium">
            <FaShoppingCart className="mr-1" />
            Cart
            {totalQuantity > 0 && (
              <span className="ml-1 bg-red-600 text-white rounded-full text-xs px-2 py-0.5">
                {totalQuantity}
              </span>
            )}
          </Link>

          // Show My Orders if user is logged in 
          {user && (
            <Link to="/my-orders" className="text-gray-700 hover:text-black font-medium">My Orders</Link>
          )}
        </div>

        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <Link to="/profile" className="text-gray-700 hover:text-black font-medium">Profile</Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-black font-medium">Login</Link>
              <Link to="/register" className="text-gray-700 hover:text-black font-medium">Register</Link>
            </>
          )}
        </div>
      </nav>

      //Main content 
      <main className="p-4 min-h-[80vh]">
        <Outlet />
      </main>

      // Footer 
      <Footer />
    </>
  );
};

export default Layout;*/



/*import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';
import Footer from './Footer';

const Layout = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      // Navbar 
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 border-b border-gray-300">
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-black font-medium">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-black font-medium">Products</Link>
          <Link to="/cart" className="flex items-center text-gray-700 hover:text-black font-medium">
            <FaShoppingCart className="mr-1" />
            Cart
            {totalQuantity > 0 && (
              <span className="ml-1 bg-red-600 text-white rounded-full text-xs px-2 py-0.5">
                {totalQuantity}
              </span>
            )}
          </Link>

          // ✅ Show My Orders only if user is logged in 
          {user && (
            <Link to="/my-orders" className="text-gray-700 hover:text-black font-medium">
              My Orders
            </Link>
          )}
        </div>

        <div className="flex gap-4 items-center">
          //✅ Auth buttons 
          {user ? (
            <>
              <Link to="/profile" className="text-gray-700 hover:text-black font-medium">Profile</Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-black font-medium">Login</Link>
              <Link to="/register" className="text-gray-700 hover:text-black font-medium">Register</Link>
            </>
          )}
        </div>
      </nav>

      // Page Content 
      <main className="p-4 min-h-[80vh]">
        <Outlet />
      </main>

      // ✅ Always show Footer 
      <Footer />
    </>
  );
};

export default Layout;*/



/*import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';
import Footer from '../Components/Footer';

const Layout = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      // Navbar 
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 border-b border-gray-300">
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-black font-medium">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-black font-medium">Products</Link>
          <Link to="/cart" className="flex items-center text-gray-700 hover:text-black font-medium">
            <FaShoppingCart className="mr-1" />
            Cart
            {totalQuantity > 0 && (
              <span className="ml-1 bg-red-600 text-white rounded-full text-xs px-2 py-0.5">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <Link to="/orders" className="text-gray-700 hover:text-black font-medium">My Orders</Link>
              <Link to="/profile" className="text-gray-700 hover:text-black font-medium">Profile</Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-black font-medium">Login</Link>
              <Link to="/register" className="text-gray-700 hover:text-black font-medium">Register</Link>
            </>
          )}
        </div>
      </nav>

     // Page Content 
      <main className="p-4 min-h-[80vh]">
        <Outlet />
      </main>

      //Footer 
      <Footer />
    </>
  );
};

export default Layout;*/




/*import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';
import Footer from './Footer';

const Layout = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      // Navbar 
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 border-b border-gray-300">
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-black font-medium">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-black font-medium">Products</Link>
          <Link to="/cart" className="flex items-center text-gray-700 hover:text-black font-medium">
            <FaShoppingCart className="mr-1" />
            Cart
            {totalQuantity > 0 && (
              <span className="ml-1 bg-red-600 text-white rounded-full text-xs px-2 py-0.5">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <Link to="/profile" className="text-gray-700 hover:text-black font-medium">Profile</Link>
              <Link to="/myorders" className="text-gray-700 hover:text-black font-medium">MyOrders</Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-black font-medium">Login</Link>
              <Link to="/register" className="text-gray-700 hover:text-black font-medium">Register</Link>
            </>
          )}
        </div>
      </nav>

      // Page Content 
      <main className="p-4 min-h-[80vh]">
        <Outlet />
      </main>

      // Footer 
      <Footer />
    </>
  );
};

export default Layout;*/



/*import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';
import Footer from './Footer';

const Layout = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      // Navbar 
      <nav className="flex flex-wrap justify-between items-center px-6 py-4 bg-gray-100 border-b border-gray-300">
        <div className="flex gap-6 items-center mb-2 md:mb-0">
          <Link to="/" className="text-gray-700 hover:text-black font-medium">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-black font-medium">Products</Link>
          <Link to="/cart" className="flex items-center text-gray-700 hover:text-black font-medium">
            <FaShoppingCart className="mr-1" />
            Cart
            {totalQuantity > 0 && (
              <span className="ml-1 bg-red-600 text-white rounded-full text-xs px-2 py-0.5">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>

        <div className="flex gap-4 items-center flex-wrap">
          {user ? (
            <>
              <Link to="/myorders" className="text-gray-700 hover:text-black font-medium">MyOrders</Link>
              <Link to="/profile" className="text-gray-700 hover:text-black font-medium">Profile</Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-black font-medium">Login</Link>

              <Link to="/register" className="text-gray-700 hover:text-black font-medium">Register</Link>
            </>
          )}
        </div>
      </nav>

      // Page Content 
      <main className="p-4 min-h-[80vh] bg-white">
        <Outlet />
      </main>

      //Footer 
      <Footer />
    </>
  );
};

export default Layout;*/


//My Layout
import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import Footer from './Footer';
//import { ToastContainer } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';





const Layout = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
 
  const handleLogout = () => {
    logout();
    navigate('/');
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-100 border-b border-gray-300 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold text-gray-700">🛍️ MyShop</div>

          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-black font-medium">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-black font-medium">Products</Link>
            <Link to="/cart" className="flex items-center text-gray-700 hover:text-black font-medium">
              <FaShoppingCart className="mr-1" />
              Cart
              {totalQuantity > 0 && (
                <span className="ml-1 bg-red-600 text-white rounded-full text-xs px-2 py-0.5">
                  {totalQuantity}
                </span>
              )}
            </Link>

            {user && (
              <Link to="/orders" className="text-gray-700 hover:text-black font-medium">MyOrders</Link>
            )}

            {user ? (
              <>
                <Link to="/profile" className="text-gray-700 hover:text-black font-medium">Profile</Link>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded text-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-black font-medium">Login</Link>
                <Link to="/register" className="text-gray-700 hover:text-black font-medium">Register</Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu (shown when menuOpen = true) */}
        {menuOpen && (
          <div className="flex flex-col gap-4 mt-4 md:hidden">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              Cart {totalQuantity > 0 && <span>({totalQuantity})</span>}
            </Link>
            {user && <Link to="/orders" onClick={() => setMenuOpen(false)}>MyOrders</Link>}
            {user ? (
              <>
                <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
                <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
                <Link to="/change-password" className="text-gray-700 hover:text-black font-medium">
                Change Password
        </Link>

              </>
            )}
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="p-4 min-h-[80vh]">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer   />
    </>
  );
};



export default Layout;


