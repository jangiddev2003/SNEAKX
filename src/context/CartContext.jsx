import { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('sneakx_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('sneakx_wishlist');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('sneakx_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('sneakx_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product, size) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id && item.selectedSize === size);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, selectedSize: size, quantity: 1 }];
    });
    toast.success(`${product.name} added to cart`);
    setIsCartOpen(true);
  };

  const removeFromCart = (id, size) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedSize === size)));
  };

  const updateQuantity = (id, size, quantity) => {
    if (quantity < 1) {
      removeFromCart(id, size);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.selectedSize === size ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const isWished = prev.some(item => item.id === product.id);
      if (isWished) {
        toast.success(`Removed from wishlist`);
        return prev.filter(item => item.id !== product.id);
      } else {
        toast.success(`Added to wishlist!`);
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (id) => wishlist.some(item => item.id === id);

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      wishlist,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      toggleWishlist,
      isInWishlist,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};
