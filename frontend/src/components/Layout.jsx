
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Footer from './Footer';

const Layout = () => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const { user, logout } = useAuth();

  return (
    <div>
      <nav style={styles.navbar}>
        <div style={styles.links}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/products" style={styles.link}>Products</Link>
          <Link to="/cart" style={styles.link}>
            Cart {totalQuantity > 0 && <span style={styles.badge}>{totalQuantity}</span>}
          </Link>
        </div>

        <div style={styles.auth}>
          {user ? (
            <>
              <span style={styles.welcome}>👋 {user.email}</span>
              <Link to="/profile" style={styles.link}>Profile</Link>

              {/* ✅ Admin link if user is admin */}
              {user.isAdmin && (
                <Link to="/admin/dashboard" style={{ ...styles.link, color: 'red', fontWeight: 'bold' }}>
                  Admin Dashboard
                </Link>
              )}

              <button onClick={logout} style={styles.logoutButton}>Logout</button>
            </>
          ) : (
            <Link to="/login" style={styles.link}>Login</Link>
          )}
        </div>
      </nav>

      <main style={{ padding: '1rem', minHeight: '80vh' }}>
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white text-center py-5 text-sm">
        <Footer />
      </footer>
    </div>
  );
};

const styles = {
  navbar: {
    padding: '1rem',
    borderBottom: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
  auth: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
  },
  badge: {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    padding: '2px 6px',
    marginLeft: '4px',
    fontSize: '0.8rem',
  },
  welcome: {
    fontSize: '0.9rem',
    color: '#555',
  },
  logoutButton: {
    background: 'transparent',
    border: 'none',
    color: '#c00',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default Layout;



/*import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';
import Navbar from './Navbar';
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
      <nav style={styles.navbar}>
        <div style={styles.leftNav}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/products" style={styles.link}>Products</Link>
          <Link to="/cart" style={styles.link}>
            <FaShoppingCart style={{ marginRight: '6px' }} />
            Cart
            {totalQuantity > 0 && <span style={styles.badge}>{totalQuantity}</span>}
          </Link>
        </div>

        <div style={styles.rightNav}>
          {user ? (
            <>
              <Link to="/profile" style={styles.link}>Profile</Link>
              <button onClick={handleLogout} style={styles.button}>Logout</button>
            </>
          ) : (
            <Link to="/login" style={styles.link}>Login</Link>
          )}
        </div>
      </nav>

      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
      <Footer />
  </div>
    
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #ccc',
  },
  leftNav: {
    display: 'flex',
    gap: '1.5rem',
  },
  rightNav: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1rem',
  },
  button: {
    padding: '0.4rem 0.8rem',
    fontSize: '0.9rem',
    cursor: 'pointer',
  },
  badge: {
    marginLeft: '6px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    fontSize: '12px',
    padding: '2px 6px',
    minWidth: '20px',
    textAlign: 'center',
  },

  
};

export default Layout;





/*import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';
//import Navbar from './Navbar';
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
    <div className="flex flex-col min-h-screen">
      <nav className="flex justify-between items-center px-4 py-4 bg-gray-100 border-b border-gray-300">
        <div className="flex gap-6">
          <Link to="/" className="text-gray-800 hover:text-blue-600">Home</Link>
          <Link to="/products" className="text-gray-800 hover:text-blue-600">Products</Link>
          <Link to="/cart" className="text-gray-800 hover:text-blue-600 flex items-center">
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
              <Link to="/profile" className="text-gray-800 hover:text-blue-600">Profile</Link>
              <button
                onClick={handleLogout}
                className="text-sm px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="text-gray-800 hover:text-blue-600">Login</Link>
          )}
        </div>
      </nav>

      <main className="flex-1 px-4 py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;*/



