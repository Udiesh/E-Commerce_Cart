import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './ProductCard.css';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [showQuickView, setShowQuickView] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    // Show a toast notification
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = 'Added to cart!';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.title} loading="lazy" />
        </Link>
        <button 
          className="quick-view-btn"
          onClick={() => setShowQuickView(true)}
          aria-label="Quick view"
        >
          Quick View
        </button>
      </div>

      <div className="product-info">
        <Link to={`/product/${product.id}`}>
          <h3>{product.title}</h3>
          <p className="category">{product.category}</p>
          <div className="price-rating">
            <p className="price">${product.price.toFixed(2)}</p>
            <div className="rating">
              {"★".repeat(Math.round(product.rating?.rate || 0))}
              {"☆".repeat(5 - Math.round(product.rating?.rate || 0))}
            </div>
          </div>
        </Link>
        <button onClick={handleAddToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>

      {showQuickView && (
        <div className="quick-view-modal" onClick={() => setShowQuickView(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowQuickView(false)}>×</button>
            <div className="modal-grid">
              <img src={product.image} alt={product.title} />
              <div className="modal-info">
                <h2>{product.title}</h2>
                <p className="category">{product.category}</p>
                <p className="price">${product.price.toFixed(2)}</p>
                <div className="rating">
                  {"★".repeat(Math.round(product.rating?.rate || 0))}
                  {"☆".repeat(5 - Math.round(product.rating?.rate || 0))}
                  <span className="rating-count">({product.rating?.count || 0})</span>
                </div>
                <p className="description">{product.description}</p>
                <button onClick={handleAddToCart} className="add-to-cart-btn">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;