import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

function Navbar() {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">ShopHub</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart-link">
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;