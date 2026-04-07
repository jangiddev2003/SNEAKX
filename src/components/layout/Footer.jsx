import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-900 transition-colors duration-300 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-display font-black tracking-tighter text-black dark:text-white">
                SNEAK<span className="text-[var(--color-primary)]">X</span>
              </span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
              Step Into The Future of Sneakers. Premium urban footwear for the modern pioneer.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="font-bold text-gray-400 hover:text-[var(--color-primary)] transition-colors text-sm">IG</a>
              <a href="#" className="font-bold text-gray-400 hover:text-[var(--color-primary)] transition-colors text-sm">TW</a>
              <a href="#" className="font-bold text-gray-400 hover:text-[var(--color-primary)] transition-colors text-sm">FB</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-3 block">
              <li><Link to="/shop" className="text-base text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop" className="text-base text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Best Sellers</Link></li>
              <li><Link to="/shop" className="text-base text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Release Dates</Link></li>
              <li><Link to="/shop" className="text-base text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Sale</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-3 block">
              <li><Link to="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Order Status</Link></li>
              <li><Link to="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Returns</Link></li>
              <li><Link to="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Newsletter</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex">
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-gray-900 dark:text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]" />
              <button type="submit" className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-r-md hover:bg-[var(--color-primary)] dark:hover:bg-[var(--color-primary)] hover:text-black transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} SneakX, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white">Privacy Policy</Link>
            <Link to="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
