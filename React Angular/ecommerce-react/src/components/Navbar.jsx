import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const { cart } = useCart();
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">Online Store</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link to="/cart" className="btn btn-outline-light position-relative">
              <i className="bi bi-cart"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};