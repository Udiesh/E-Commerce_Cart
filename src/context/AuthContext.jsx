import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // In a real app, this would be an API call
    return new Promise((resolve, reject) => {
      // Simulate API call
      setTimeout(() => {
        if (email && password) {
          const userData = {
            id: 'user123',
            email,
            name: email.split('@')[0],
            favorites: []
          };
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const register = (email, password, name) => {
    // In a real app, this would be an API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password && name) {
          const userData = {
            id: 'user' + Date.now(),
            email,
            name,
            favorites: []
          };
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error('Invalid registration data'));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const toggleFavorite = (productId) => {
    if (!user) return;
    
    setUser(prevUser => {
      const updatedUser = {
        ...prevUser,
        favorites: prevUser.favorites.includes(productId)
          ? prevUser.favorites.filter(id => id !== productId)
          : [...prevUser.favorites, productId]
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const isProductFavorite = (productId) => {
    return user?.favorites?.includes(productId) || false;
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      logout,
      register,
      toggleFavorite,
      isProductFavorite
    }}>
      {children}
    </AuthContext.Provider>
  );
};