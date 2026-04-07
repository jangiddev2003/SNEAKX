import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, getProducts } from '../services/mockData';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import { Heart, Star, ChevronRight, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Customizer state
  const [hue, setHue] = useState(0);
  const [isCustomizing, setIsCustomizing] = useState(false);

  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    getProductById(id).then(data => {
      setProduct(data);
      setSelectedImage(0);
      setSelectedSize(null);
      setHue(0);
      setIsCustomizing(false);
      setLoading(false);
      
      // Get related
      getProducts().then(all => {
        setRelatedProducts(all.filter(p => p.category === data.category && p.id !== data.id).slice(0, 4));
      });
    });
  }, [id]);

  if (loading || !product) {
    return (
      <div className="h-screen flex items-center justify-center dark:text-white pb-32">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-black dark:border-[var(--color-primary)]"></div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size first');
      return;
    }
    addToCart(product, selectedSize);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 dark:text-white animate-in fade-in duration-500">
      
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8 font-medium">
        <Link to="/" className="hover:text-black dark:hover:text-white">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to={`/shop?cat=${product.category.toLowerCase()}`} className="hover:text-black dark:hover:text-white">{product.category}</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-black dark:text-white">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Left: Image Gallery & Customizer */}
        <div className="w-full lg:w-3/5 flex flex-col md:flex-row gap-4">
          
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 order-2 md:order-1 overflow-x-auto md:w-24 flex-shrink-0">
            {product.images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setSelectedImage(idx)}
                className={`flex-shrink-0 w-20 h-20 md:w-full md:h-24 bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-black dark:border-[var(--color-primary)] opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="order-1 md:order-2 flex-grow bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden relative aspect-[4/3] md:aspect-auto md:min-h-[600px] flex items-center justify-center">
            
            <AnimatePresence mode="wait">
              <motion.img 
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={product.images[selectedImage]} 
                alt={product.name}
                style={isCustomizing ? { filter: `hue-rotate(${hue}deg) saturate(1.5)` } : {}}
                className="w-full h-full object-cover origin-center transition-[filter] duration-200"
              />
            </AnimatePresence>

            {/* Sneaker Customizer Toggle */}
            <button 
              onClick={() => setIsCustomizing(!isCustomizing)}
              className="absolute top-4 left-4 bg-black/80 dark:bg-white/80 backdrop-blur text-white dark:text-black py-2 px-4 rounded-full text-sm font-bold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              🎨 {isCustomizing ? 'Exit Customizer' : 'Customize Sneaker'}
            </button>
            
            {product.isDrop && (
              <div className="absolute top-4 right-4 bg-red-500 text-white py-1 px-3 rounded text-xs font-bold uppercase tracking-wider animate-pulse">
                Exclusive Drop
              </div>
            )}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="w-full lg:w-2/5 flex flex-col">
          
          <h1 className="text-4xl md:text-5xl font-display font-black leading-tight mb-2">{product.name}</h1>
          <p className="text-2xl font-bold text-gray-900 dark:text-[var(--color-primary)] mb-4">${product.price}</p>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-black text-black dark:fill-white dark:text-white' : 'text-gray-300 dark:text-gray-700'}`} />
              ))}
            </div>
            <span className="text-gray-500 dark:text-gray-400 font-medium text-sm underline cursor-pointer">{product.reviews} Reviews</span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Customizer Panel */}
          {isCustomizing && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="mb-8 p-5 bg-gray-50 dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <h3 className="font-bold mb-3 uppercase tracking-wider text-sm flex items-center gap-2">
                🎨 SneakX Studio
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Drag the slider to preview different colorways for your kicks.</p>
              <input 
                type="range" 
                min="0" 
                max="360" 
                value={hue} 
                onChange={(e) => setHue(e.target.value)} 
                className="w-full appearance-none h-2 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-full outline-none slider-thumb-primary"
              />
              <div className="flex justify-between text-xs mt-2 text-gray-500 font-bold uppercase">
                <span>Original</span>
                <span>Custom Hue: {hue}°</span>
              </div>
            </motion.div>
          )}

          {/* Size Selector */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold uppercase tracking-wider text-sm">Select Size (US)</h3>
              <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white underline">Size Guide</a>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 text-center border rounded-lg font-medium transition-all ${
                    selectedSize === size 
                      ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black shadow-md scale-105' 
                      : 'border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              variant="primary" 
              size="lg" 
              className="flex-grow text-lg"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-6"
              onClick={() => toggleWishlist(product)}
            >
              <Heart className={`w-6 h-6 ${isInWishlist(product.id) ? 'fill-black text-black dark:fill-white dark:text-white' : ''}`} />
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mt-auto space-y-4">
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
              <Truck className="w-6 h-6" />
              <div>
                <p className="font-bold text-sm text-black dark:text-white">Free US Shipping</p>
                <p className="text-xs">On all orders over $150</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
              <RotateCcw className="w-6 h-6" />
              <div>
                <p className="font-bold text-sm text-black dark:text-white">30-Day Returns</p>
                <p className="text-xs">No questions asked return policy</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
              <ShieldCheck className="w-6 h-6" />
              <div>
                <p className="font-bold text-sm text-black dark:text-white">Secure Checkout</p>
                <p className="text-xs">Shop with confidence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-32">
          <h2 className="text-3xl font-display font-black uppercase mb-8 border-b-2 border-black dark:border-white pb-4 inline-block">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductDetails;
