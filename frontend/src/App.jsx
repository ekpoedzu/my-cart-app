
/*// here is my current App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import 'react-toastify/dist/ReactToastify.css';
//import Navbar from './pages/Navbar';
import Layout from './components/Layout';

import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import CheckoutForm from './pages/CheckoutForm';
import Payment from './pages/Payment';
import Success from './pages/Success';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import LogoutPage from './pages/LogoutPage';
import MyOrders from './pages/MyOrders';
import OrderDetails from './pages/OrderDetails';
import ChangePassword from './pages/ChangePassword';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
//import EditProductPage from './admin/EditProductPage';
import EditProductPage from './pages/admin/EditProductPage';
import ShippingScreen from "./pages/ShippingScreen.jsx";



import AdminDashboard from './pages/admin/AdminDashboard';
import ProductListAdmin from './pages/admin/ProductListAdmin';
import OrderListAdmin from './pages/admin/OrderListAdmin';
import OrderDetailsAdmin from './pages/admin/OrderDetailsAdmin';
import AddProduct from './pages/admin/AddProduct';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:productId" element={<ProductDetail />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="change-password" element={<PrivateRoute><ChangePassword /></PrivateRoute>} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password/:token" element={<ResetPasswordPage />} />

          // Protected Routes 
          <Route path="checkout" element={<PrivateRoute><CheckoutForm /></PrivateRoute>} />
          <Route
            path="payment"
            element={
              <PrivateRoute>
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </PrivateRoute>
            }
          />
          <Route path="/shipping" element={<ShippingScreen />} />
          <Route path="success" element={<PrivateRoute><Success /></PrivateRoute>} />
          <Route path="profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
          <Route path="logout" element={<PrivateRoute><LogoutPage /></PrivateRoute>} />
          <Route path="myorders" element={<PrivateRoute><MyOrders /></PrivateRoute>} />
          <Route path="/my-orders/:id" element={<PrivateRoute><OrderDetails /></PrivateRoute>} />

          // Admin Routes *
          
          <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="/admin/products" element={<AdminRoute><ProductListAdmin /></AdminRoute>} />
          <Route path="/admin/products/new" element={<AdminRoute><AddProduct /></AdminRoute>} />
          <Route path="/admin/products/edit/:id" element={<AdminRoute><EditProductPage /></AdminRoute>} />
          <Route path="/admin/orders" element={<AdminRoute><OrderListAdmin /></AdminRoute>} />
          <Route path="/admin/orders/:id" element={<OrderDetailsAdmin />} />
          <Route path="/admin/products/add" element={<AdminRoute><AddProduct /></AdminRoute>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;*/




// here is my current App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import 'react-toastify/dist/ReactToastify.css';
//import Navbar from './pages/Navbar';
import Layout from './components/Layout';

import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import CheckoutForm from './pages/CheckoutForm';
import Payment from './pages/Payment';
import Success from './pages/Success';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import LogoutPage from './pages/LogoutPage';
import MyOrders from './pages/MyOrders';
import OrderDetails from './pages/OrderDetails';
import ChangePassword from './pages/ChangePassword';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
//import EditProductPage from './admin/EditProductPage';
import EditProductPage from './pages/admin/EditProductPage';
import ShippingScreen from "./pages/ShippingScreen.jsx";



import AdminDashboard from './pages/admin/AdminDashboard';
import ProductListAdmin from './pages/admin/ProductListAdmin';
//import OrderListAdmin from './pages/admin/OrderListAdmin';
import AdminOrderList from './pages/AdminOrderList';
import OrderDetailsAdmin from './pages/admin/OrderDetailsAdmin';
import AddProduct from './pages/admin/AddProduct';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:productId" element={<ProductDetail />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="change-password" element={<PrivateRoute><ChangePassword /></PrivateRoute>} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password/:token" element={<ResetPasswordPage />} />

          {/* Protected Routes */}
          <Route path="checkout" element={<PrivateRoute><CheckoutForm /></PrivateRoute>} />
          <Route
            path="payment"
            element={
              <PrivateRoute>
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </PrivateRoute>
            }
          />
          <Route path="/shipping" element={<ShippingScreen />} />
          <Route path="success" element={<PrivateRoute><Success /></PrivateRoute>} />
          <Route path="profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
          <Route path="logout" element={<PrivateRoute><LogoutPage /></PrivateRoute>} />
          <Route path="myorders" element={<PrivateRoute><MyOrders /></PrivateRoute>} />
          <Route path="/my-orders/:id" element={<PrivateRoute><OrderDetails /></PrivateRoute>} />

          {/* Admin Routes */}
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="/admin/products" element={<AdminRoute><ProductListAdmin /></AdminRoute>} />
          <Route path="/admin/products/new" element={<AdminRoute><AddProduct /></AdminRoute>} />
          <Route path="/admin/products/edit/:id" element={<AdminRoute><EditProductPage /></AdminRoute>} />
          <Route path="/admin/orders" element={<AdminRoute><AdminOrderList /></AdminRoute>} />
          <Route path="/admin/orders/:id" element={<AdminRoute><OrderDetailsAdmin /></AdminRoute>} />
          <Route path="/admin/products/add" element={<AdminRoute><AddProduct /></AdminRoute>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;





