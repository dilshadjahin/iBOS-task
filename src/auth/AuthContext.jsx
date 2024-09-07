import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  // Fetch users and logged-in user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const getUsersFromLocalStorage = () => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(localStorage.getItem('users')) : [];
  };

  const register = (newUser) => {
    const users = getUsersFromLocalStorage();

    // Check if the email is already registered
    const existingUser = users.find((user) => user.email === newUser.email);
    if (existingUser) {
      alert('User already exists with this email');
      return;
    }

    // Save new user
    const updatedUsers = [...users, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  };

  const login = (credentials) => {
    const users = getUsersFromLocalStorage();
    const existingUser = users.find(
      (user) =>
        user.email === credentials.email && user.password === credentials.password
    );
    if (existingUser) {
      localStorage.setItem('user', JSON.stringify(existingUser));
      setUser(existingUser);
    } else {
      alert('Invalid email or password');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const checkout = () => {
    alert('Checkout successful!');
    clearCart();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        cart,
        register,
        login,
        logout,
        addToCart,
        removeFromCart,
        clearCart,
        checkout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
