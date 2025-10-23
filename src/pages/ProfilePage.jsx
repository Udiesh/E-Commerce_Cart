import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import './ProfilePage.css';

function ProfilePage() {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const [activeTab, setActiveTab] = useState('orders');

  const orders = [
    {
      id: 'ORD001',
      date: '2023-10-20',
      status: 'Delivered',
      total: 199.99,
      items: [
        { name: 'Product 1', quantity: 2, price: 79.99 },
        { name: 'Product 2', quantity: 1, price: 40.01 }
      ]
    },
    // Add more mock orders as needed
  ];

  const handleLogout = () => {
    logout();
    // Navigate to home page after logout
    window.location.href = '/';
  };

  if (!user) {
    return <div className="loading">Please login to view your profile</div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="user-info">
            <div className="avatar">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="user-details">
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>

        <div className="profile-tabs">
          <button
            className={`tab ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </button>
          <button
            className={`tab ${activeTab === 'favorites' ? 'active' : ''}`}
            onClick={() => setActiveTab('favorites')}
          >
            Favorites
          </button>
          <button
            className={`tab ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'orders' && (
            <div className="orders-list">
              {orders.map(order => (
                <div key={order.id} className="order-card">
                  <div className="order-header">
                    <h3>Order #{order.id}</h3>
                    <span className={`status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="order-details">
                    <p>Date: {order.date}</p>
                    <p>Total: ${order.total.toFixed(2)}</p>
                  </div>
                  <div className="order-items">
                    {order.items.map((item, index) => (
                      <div key={index} className="order-item">
                        <span>{item.name} × {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'favorites' && (
            <div className="favorites-list">
              {user.favorites?.length > 0 ? (
                <div className="favorites-grid">
                  {/* Display favorite products here */}
                  <p>Favorite products will appear here</p>
                </div>
              ) : (
                <p className="empty-message">No favorite products yet</p>
              )}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="settings-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" value={user.name} disabled />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={user.email} disabled />
              </div>
              <button className="update-button" disabled>
                Update Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;