import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CartPage.css';

function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return <div className="empty-cart">Your cart is empty</div>;
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div className="item-details">
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
          <div className="item-actions">
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
          </div>
        </div>
      ))}
      <div className="cart-total">
        <h2>Total: ${getCartTotal().toFixed(2)}</h2>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}

export default CartPage;