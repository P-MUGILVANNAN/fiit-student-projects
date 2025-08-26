import { useCart } from '../context/CartContext';

export const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-2">
          <img 
            src={item.image} 
            className="img-fluid rounded-start p-2" 
            alt={item.title}
            style={{ height: '120px', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text text-muted">{item.category}</p>
            <p className="card-text">${item.price.toFixed(2)}</p>
          </div>
        </div>
        <div className="col-md-2 d-flex flex-column justify-content-center align-items-end pe-3">
          <div className="input-group mb-2" style={{ width: '120px' }}>
            <button 
              className="btn btn-outline-secondary" 
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <input 
              type="text" 
              className="form-control text-center" 
              value={item.quantity} 
              readOnly
            />
            <button 
              className="btn btn-outline-secondary" 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>
          <button 
            onClick={() => removeFromCart(item.id)}
            className="btn btn-danger btn-sm"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};