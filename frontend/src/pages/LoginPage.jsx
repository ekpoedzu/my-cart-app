import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/auth/login', {
        email,
        password,
      });

      login(data.user, data.token);
      navigate('/');
    } catch (err) {
      console.error('❌ Login failed:', err);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Email:</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-medium">Password:</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Login 
        </button>
      </form><br/><br/>

      <div className="mt-6 flex flex-col items-center gap-4">
        <Link
            to="/register"
             className="block text-blue-600 hover:underline text-center"
       >
           Don&apos;t have an account?
       </Link><br/><br/>

        <Link
           to="/register"
           className="block text-blue-600 font-semibold hover:underline"
        >
        Register
       </Link><br /><br/>
    
       <Link
         to="/forgot-password"
          className="block text-blue-600 hover:underline"
     >
        Forgot Password?
     </Link>
     </div>
      </div>
  );
};

export default LoginPage;





