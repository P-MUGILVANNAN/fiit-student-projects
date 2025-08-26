import { useCart } from '../context/CartContext';
import { CartItem } from './CartItem';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { cart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container text-center my-5">
        <h2>Your cart is empty</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h2 className="mb-4">Your Cart</h2>
      <div className="mb-4">
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Total: ${cartTotal.toFixed(2)}</h4>
        <button className="btn btn-success btn-lg">Checkout</button>
      </div>
      <Link to="/" className="btn btn-outline-primary">
        Continue Shopping
      </Link>
    </div>
  );
};