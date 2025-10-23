import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './ProductPage.css';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-page">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="category">{product.category}</p>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <button onClick={() => addToCart(product)} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductPage;