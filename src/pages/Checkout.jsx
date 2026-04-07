import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const tax = cartTotal * 0.08;
  const shipping = cartTotal > 150 || cartTotal === 0 ? 0 : 15;
  const finalTotal = cartTotal + tax + shipping;

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      clearCart();
      toast.success('Successfully processed payment!');
    }, 2000);
  };

  if (orderComplete) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center dark:text-white px-4 py-20">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-white dark:bg-[#111] p-10 rounded-2xl shadow-xl text-center border border-gray-100 dark:border-gray-800"
        >
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-display font-black mb-2 uppercase">Order Confirmed</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Thank you for shopping with SneakX. Your order #SX-{Math.floor(Math.random() * 1000000)} is being processed.
          </p>
          <Button variant="primary" onClick={() => navigate('/')} className="w-full">
            Return to Home
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 dark:text-white">
      <h1 className="text-4xl font-display font-black uppercase mb-10">Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Checkout Form */}
        <div className="w-full lg:w-2/3">
          <form onSubmit={handleCheckout} className="space-y-8">
            
            {/* Contact Info */}
            <section className="bg-white dark:bg-[#111] p-6 sm:p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <h2 className="text-xl font-bold mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input type="email" required defaultValue={user?.email || ''} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors" />
                </div>
              </div>
            </section>

            {/* Shipping Info */}
            <section className="bg-white dark:bg-[#111] p-6 sm:p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <h2 className="text-xl font-bold mb-6">Shipping Address</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                  <input type="text" required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                  <input type="text" required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Address</label>
                  <input type="text" required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">City</label>
                  <input type="text" required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">ZIP / Postal Code</label>
                  <input type="text" required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white" />
                </div>
              </div>
            </section>

            {/* Payment UI (Fake) */}
            <section className="bg-white dark:bg-[#111] p-6 sm:p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <ShieldCheck className="w-8 h-8 text-green-500 opacity-20" />
              </div>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                Payment Details <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded text-gray-500">Secure 256-bit</span>
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Card Number</label>
                  <input type="text" placeholder="0000 0000 0000 0000" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white font-mono" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Expiry Date</label>
                    <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white font-mono" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">CVC</label>
                    <input type="text" placeholder="123" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white font-mono" />
                  </div>
                </div>
              </div>
            </section>

            <Button 
              type="submit" 
              variant="primary" 
              size="lg" 
              className="w-full h-16 text-lg tracking-wider"
              disabled={isProcessing || cartItems.length === 0}
            >
              {isProcessing ? 'Processing Payment...' : `Pay $${finalTotal.toFixed(2)}`}
            </Button>
            
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="w-full lg:w-1/3">
          <div className="bg-gray-50 dark:bg-[#111] p-6 sm:p-8 rounded-xl border border-gray-100 dark:border-gray-800 sticky top-28 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
              {cartItems.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-md overflow-hidden flex-shrink-0">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <h4 className="font-bold text-sm leading-tight mb-1">{item.name}</h4>
                    <p className="text-xs text-gray-500">Size: {item.selectedSize} | Qty: {item.quantity}</p>
                    <p className="font-bold mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
              {cartItems.length === 0 && (
                <p className="text-gray-500 text-sm">No items in cart</p>
              )}
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 pt-6 space-y-3 text-sm">
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-800 pt-3 mt-3 flex justify-between items-center text-lg md:text-xl font-bold">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
