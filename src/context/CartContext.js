import { createContext, useState } from 'react';

// Buat context untuk Cart
export const CartContext = createContext();

// Buat provider yang akan membungkus komponen root aplikasi
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Fungsi untuk menambahkan produk ke keranjang
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

// Fungsi untuk menghapus item dari keranjang berdasarkan id
const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
