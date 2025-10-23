import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';

function Navbar() {
  const { cart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          🛍️ ShopHub
        </Link>
        
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          {user ? (
            <>
              <Link to="/profile" onClick={() => setIsMenuOpen(false)}>Profile</Link>
              <Link to="/cart" className="cart-link" onClick={() => setIsMenuOpen(false)}>
                <span className="cart-icon">🛒</span>
                <span>Cart</span>
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </Link>
            </>
          ) : (
            <Link to="/login" className="login-link" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;