/*import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
      {user ? (
        <>
          <span>Welcome, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <a href="/login">Login</a>
      )}
    </nav>
  );
};*/


/*import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/products" style={styles.link}>Products</Link>
      {user ? (
        <>
          <Link to="/profile" style={styles.link}>Profile</Link>
          <Link to="/logout" style={styles.link}>Logout</Link>
        </>
      ) : (
        <Link to="/login" style={styles.link}>Login</Link>
      )}
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#eee',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
  },
};

export default Navbar;*/



// My current src/components/Navbar.jsx
/*import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/">Home</Link>
      <Link to="/products" style={{ marginLeft: '1rem' }}>Products</Link>
      <Link to="/cart" style={{ marginLeft: '1rem' }}>Cart</Link>
      <Link to="/myorders">MyOrders</Link>


      {user ? (
        <>
          <Link to="/profile" style={{ marginLeft: '1rem' }}>Profile</Link>
          <button onClick={logout} style={{ marginLeft: '1rem' }}>Logout</button>
        </>
      ) : (
        <Link to="/login" style={{ marginLeft: '1rem' }}>Login</Link>
      )}

    {user?.isAdmin && (
                        <NavLink to="/admin/products" className="text-sm ml-4">
                              Admin
                        </NavLink>

                        
                        
           )}

    </nav>
  );
};

export default Navbar;*/



/*import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/">Home</Link>
      <Link to="/products" style={{ marginLeft: '1rem' }}>Products</Link>
      <Link to="/cart" style={{ marginLeft: '1rem' }}>Cart</Link>
      <Link to="/myorders" style={{ marginLeft: '1rem' }}>My Orders</Link>

      {user ? (
        <>
          <Link to="/profile" style={{ marginLeft: '1rem' }}>Profile</Link>
          <button onClick={logout} style={{ marginLeft: '1rem' }}>Logout</button>

          // ✅ Show Admin Dashboard link if admin 
          {user.isAdmin && (
            
            <Link to="/admin/" style={{ marginLeft: '1rem', color: 'red' }}>
              Admin Dashboard
            </Link>
          )}
        </>
      ) : (
        <Link to="/login" style={{ marginLeft: '1rem' }}>Login</Link>
      )}
    </nav>
  );
};

export default Navbar;*/



import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/">Home</Link>
      <Link to="/products" style={{ marginLeft: '1rem' }}>Products</Link>
      <Link to="/cart" style={{ marginLeft: '1rem' }}>Cart</Link>
      {user && <Link to="/myorders" style={{ marginLeft: '1rem' }}>My Orders</Link>}

      {user ? (
        <>
          <span style={{ marginLeft: '1rem' }}>👋 {user.name}</span>
          <Link to="/profile" style={{ marginLeft: '1rem' }}>Profile</Link>
          <button onClick={logout} style={{ marginLeft: '1rem' }}>Logout</button>

          {/* ✅ Show Admin Dashboard link if admin */}
          {user.isAdmin && (
            <Link to="/admin" style={{ marginLeft: '1rem', color: 'red', fontWeight: 'bold' }}>
              Admin Dashboard
            </Link>
          )}
        </>
      ) : (
        <Link to="/login" style={{ marginLeft: '1rem' }}>Login</Link>
      )}
    </nav>
  );
};

export default Navbar;







