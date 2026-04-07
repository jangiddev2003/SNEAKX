import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const { toggleWishlist, isInWishlist } = useCart();
  const wisklisted = isInWishlist(product.id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col bg-white dark:bg-[#111] rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-900">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover origin-center transform group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        <button 
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full text-gray-900 dark:text-white hover:text-red-500 dark:hover:text-red-500 transition-colors z-10"
        >
          <Heart className={`w-5 h-5 ${wisklisted ? 'fill-red-500 text-red-500' : ''}`} />
        </button>
        {product.isDrop && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-xs font-bold uppercase tracking-wider rounded">
            Drop
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">{product.category}</p>
            <Link to={`/product/${product.id}`}>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[var(--color-primary)] transition-colors line-clamp-1">{product.name}</h3>
            </Link>
          </div>
          <p className="text-lg font-bold text-gray-900 dark:text-white">${product.price}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
