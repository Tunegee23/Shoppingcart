import React, { useState } from 'react';
import chair from "../assets/chair.jpeg";

const products = [
  { id: 1, name: 'Chair ', price: 1200, image: chair, quantity: 1 },
  { id: 2, name: 'Chair ', price: 25, image: chair, quantity: 1 },
  { id: 3, name: 'Chair ', price: 50, image: chair, quantity: 1 },
];

function Navbar() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-4"> {/* Removed bg-red-800 */}
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      <div className="flex flex-wrap -mx-4">
        {/* Product List */}
        <div className="w-full md:w-2/3 px-4">
          <h2 className="text-lg font-semibold mb-2">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover mb-2"
                />
                <h3 className="text-md font-semibold">{product.name}</h3>
                <p className="text-sm">Price: ${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart */}
        <div className="w-full md:w-1/3 px-4">
          <h2 className="text-lg font-semibold mb-2">Cart</h2>
          <div className="border p-4 rounded shadow">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover mr-2"
                      />
                      <div>
                        <h3 className="text-sm font-semibold">{item.name}</h3>
                        <p className="text-xs">Price: ${item.price}</p>
                        <div className="flex items-center mt-1">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="mt-4 border-t pt-2">
                  <p className="font-semibold">Total: ${calculateTotal()}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;