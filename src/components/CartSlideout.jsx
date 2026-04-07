import { useCart } from '../context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

const CartSlideout = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-gray-950 shadow-2xl z-[70] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
              <h2 className="text-2xl font-display font-bold flex items-center gap-2">
                <ShoppingBag className="w-6 h-6" /> Your Cart
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 dark:text-gray-400">
                  <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
                  <p className="text-xl font-medium">Your cart is empty</p>
                  <p className="mt-2 mb-6">Looks like you haven't added any premium kicks yet.</p>
                  <Button onClick={() => { setIsCartOpen(false); /* redirect logically is possible but link works */ }}>
                    <Link to="/shop">Shop Now</Link>
                  </Button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 items-center">
                    <img src={item.images[0]} alt={item.name} className="w-24 h-24 object-cover rounded-md bg-gray-100 dark:bg-gray-900" />
                    <div className="flex-grow">
                      <h3 className="font-bold text-gray-900 dark:text-white">{item.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Size: {item.selectedSize}</p>
                      <p className="font-medium text-gray-900 dark:text-white mt-1">${item.price}</p>
                      
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-black">
                          <button onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)} className="p-1 text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)} className="p-1 text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.selectedSize)}
                          className="text-sm text-red-500 hover:text-red-700 underline transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <div className="flex justify-between items-center mb-4 text-lg">
                  <span className="font-medium text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span className="font-bold text-2xl text-black dark:text-white">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 text-center">Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" onClick={() => setIsCartOpen(false)}>
                  <Button variant="primary" className="w-full">
                    Proceed to Checkout
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSlideout;
