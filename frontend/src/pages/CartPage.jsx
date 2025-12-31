

import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const navigate = useNavigate();

  // Compute total amount locally
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <button onClick={() => navigate('/')}>Go shopping</button>
        </div>
      ) : (
        cartItems.map((item) => (
          <div
            key={item._id}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.5rem',
              border: '1px solid #ccc',
              padding: '1rem',
              borderRadius: '8px',
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                marginRight: '1rem',
                borderRadius: '8px',
              }}
            />
            <div>
              <h4>{item.name}</h4>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <div>
                <button onClick={() => decreaseQuantity(item._id)}>-</button>
                <button
                  onClick={() => increaseQuantity(item._id)}
                  style={{ margin: '0 0.5rem' }}
                >
                  +
                </button>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            </div>
          </div>
        ))
      )}

      {cartItems.length > 0 && (
        <>
          <h3>Total: ${totalAmount ? totalAmount.toFixed(2) : '0.00'}</h3>
          <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default CartPage;



