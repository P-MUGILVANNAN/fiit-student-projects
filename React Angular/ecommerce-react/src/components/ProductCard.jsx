import { useCart } from '../context/CartContext';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="card h-100">
      <img 
        src={product.image} 
        className="card-img-top p-3" 
        alt={product.title} 
        style={{ height: '200px', objectFit: 'contain' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-muted">
          {product.category}
        </p>
        <p className="card-text">
          ${product.price.toFixed(2)}
        </p>
        <button 
          onClick={() => addToCart(product)}
          className="btn btn-primary mt-auto"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};