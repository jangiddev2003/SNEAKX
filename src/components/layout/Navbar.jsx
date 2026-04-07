import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Moon, Sun, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';

const Navbar = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const { isDarkMode, toggleTheme } = useTheme();
  const { user, loginWithGoogle, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl font-display font-black tracking-tighter text-black dark:text-white">
              SNEAK<span className="text-[var(--color-primary)]">X</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/shop" className="text-gray-800 dark:text-gray-200 hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)] font-medium transition-colors">
              New Drops
            </Link>
            <Link to="/shop?gender=men" className="text-gray-800 dark:text-gray-200 hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)] font-medium transition-colors">
              Men
            </Link>
            <Link to="/shop?gender=women" className="text-gray-800 dark:text-gray-200 hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)] font-medium transition-colors">
              Women
            </Link>
            <Link to="/shop" className="text-gray-800 dark:text-gray-200 hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)] font-medium transition-colors">
              Accessories
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hidden md:block">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {user ? (
              <button onClick={logout} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors" title="Logout">
                <User className="w-5 h-5 text-[var(--color-primary)]" />
              </button>
            ) : (
              <button onClick={loginWithGoogle} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors" title="Login">
                <User className="w-5 h-5" />
              </button>
            )}

            <button onClick={() => setIsCartOpen(true)} className="relative text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-[var(--color-primary)] text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-gray-600 dark:text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link to="/shop" className="block px-3 py-2 text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md">New Drops</Link>
            <Link to="/shop?gender=men" className="block px-3 py-2 text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md">Men</Link>
            <Link to="/shop?gender=women" className="block px-3 py-2 text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md">Women</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
