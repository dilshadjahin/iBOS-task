import { createContext, useState, useEffect } from 'react';

// Create the context
export const ProductContext = createContext();

// Create the provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  
  // Load the cart from localStorage when the component mounts
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Load product data once when the component mounts
  useEffect(() => {
    const loadProducts = () => {
      const productData = [
        { id: 1, name: "Recliner Chair", price: 299.00, image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg", description: "A comfortable recliner chair with wooden legs and padded seating." },
        { id: 2, name: "Timber Ride Padded Chair", price: 600.00, image: "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg", description: "High-back rocking chair with comfortable padding." },
        { id: 3, name: "Modern Leather Chair", price: 1200.00, image: "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg", description: "A modern leather chair with a luxurious feel." },
        { id: 4, name: "Outdoor Lounge Chair", price: 500.00, image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg", description: "Perfect for relaxing outdoors, durable and comfortable." },
        { id: 5, name: "Swivel Office Chair", price: 180.00, image: "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg", description: "Ergonomic swivel office chair for comfort during work." },
        { id: 6, name: "Classic Wooden Rocking Chair", price: 220.00, image: "https://images.pexels.com/photos/2766716/pexels-photo-2766716.jpeg", description: "A classic wooden rocking chair with a timeless design." },
        { id: 7, name: "Executive Office Chair", price: 450.00, image: "https://images.pexels.com/photos/4975073/pexels-photo-4975073.jpeg", description: "Executive leather office chair with adjustable settings." },
        { id: 8, name: "Comfy Accent Chair", price: 350.00, image: "https://images.pexels.com/photos/2766717/pexels-photo-2766717.jpeg", description: "A comfy accent chair perfect for any living room." },
        { id: 9, name: "Minimalist Lounge Chair", price: 200.00, image: "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg", description: "Minimalist lounge chair for modern interiors." },
        { id: 10, name: "Contemporary Fabric Chair", price: 500.00, image: "https://images.pexels.com/photos/4061973/pexels-photo-4061973.jpeg", description: "A contemporary fabric chair with sleek lines and soft cushions." }
      ];
      setProducts(productData);  // Set products into state
    };
    
    loadProducts(); // Load products once
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Add to Cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove from Cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Clear the cart (on logout)
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart'); // Clear from localStorage as well
  };

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  return (
    <ProductContext.Provider value={{ products,totalPrice, cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </ProductContext.Provider>
  );
};
