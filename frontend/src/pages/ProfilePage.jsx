// src/pages/ProfilePage.jsx
/*import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">👤 Profile</h2>
      {user ? (
        <div className="space-y-2">
          <p><strong>Email:</strong> {user.email}</p>
          {user.name && <p><strong>Name:</strong> {user.name}</p>}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;*/

/*import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';  // adjust path if needed

const ProfilePage = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div>
      <h2>👤 Profile</h2>
      <p>Email: {user.email}</p>
      // Add other user info as needed 
    </div>
  );
};

export default ProfilePage;*/



/*import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user } = useAuth();

  if (!user) {
    // Redirect to login if not logged in
    return <Navigate to="/login" />;
  }

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>👤 Profile</h2>
      <p><strong>Email:</strong> {user.email}</p>
      // Add more user info here if needed 
    </div>
  );
};

export default ProfilePage;*/


/*import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user } = useAuth();

  if (!user) {
    // Redirect to login if not logged in
    return <Navigate to="/login" />;
  }

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>👤 Profile</h2>
      <p><strong>Full Name:</strong> {user.fullName}</p>
       <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Addres:</strong> {user.address}</p>
         <p><strong>City:</strong> {user.city}</p>
          <p><strong>Country:</strong> {user.country}</p>
          <p><strong>Zip:</strong> {user.zip}</p>
          
      //Add more user info here if needed 
    </div>
  );
};

export default ProfilePage;*/




/*import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {
  const { user, token } = useAuth();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zip: ''
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user) {
      setForm({
        fullName: user.fullName || '',
        email: user.email || '',
        address: user.address || '',
        city: user.city || '',
        country: user.country || '',
        zip: user.zip || ''
      });
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        '/api/users/profile', // Adjust your backend route accordingly
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setMessage('✅ Profile updated successfully');
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to update profile');
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: 'auto' }}>
      <h2>👤 Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input name="fullName" value={form.fullName} onChange={handleChange} />

        <label>Email</label>
        <input name="email" value={form.email} onChange={handleChange} disabled />

        <label>Address</label>
        <input name="address" value={form.address} onChange={handleChange} />

        <label>City</label>
        <input name="city" value={form.city} onChange={handleChange} />

        <label>Country</label>
        <input name="country" value={form.country} onChange={handleChange} />

        <label>Zip</label>
        <input name="zip" value={form.zip} onChange={handleChange} />

        <button type="submit" style={{ marginTop: '1rem' }}>Update Profile</button>
      </form>

      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
    </div>
  );
};

export default ProfilePage;*/



// src/pages/ProfilePage.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>👤 Profile</h2>
      <p><strong>Name:</strong> {user.fullName}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default ProfilePage;

