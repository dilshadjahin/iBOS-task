import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

const Cart = () => {
  const { cart, totalPrice, removeFromCart } = useContext(ProductContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3> {/* Display the total price */}
    </div>
  );
};

export default Cart;
