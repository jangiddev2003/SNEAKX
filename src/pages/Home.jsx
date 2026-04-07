import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Clock } from 'lucide-react';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import { getProducts } from '../services/mockData';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [timeLeft, setTimeLeft] = useState({ hours: 48, minutes: 0, seconds: 0 });

  useEffect(() => {
    getProducts().then(setProducts);

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const trendingProducts = products.filter(p => p.isTrending).slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-gray-100 dark:bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=1920&q=80" 
            alt="Hero Kicks" 
            className="w-full h-full object-cover opacity-60 dark:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-sm font-bold uppercase tracking-wider mb-6">
              <Zap className="w-4 h-4 text-[var(--color-primary)]" /> New Collection
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] tracking-tighter text-black dark:text-white mb-6 uppercase">
              Step Into The <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">Future</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              Redefining urban footwear. Premium materials, unmatched comfort, and cutting-edge design. Elevate your street style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop">
                <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2">
                  Shop Men <ArrowRight className="w-5 h-5"/>
                </Button>
              </Link>
              <Link to="/shop">
                <Button variant="neon" size="lg" className="w-full sm:w-auto h-full px-8">
                  Shop Women
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Drop Culture Timer */}
      <section className="py-16 bg-black text-white dark:bg-[var(--color-primary)] dark:text-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-6"
          >
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-widest flex items-center gap-4">
              <Clock className="w-10 h-10" /> Next Drop
            </h2>
            <div className="flex gap-4 sm:gap-8 justify-center">
              <div className="flex flex-col">
                <span className="text-4xl md:text-6xl font-black">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-sm font-bold uppercase tracking-widest opacity-80">Hours</span>
              </div>
              <span className="text-4xl md:text-6xl font-black opacity-50">:</span>
              <div className="flex flex-col">
                <span className="text-4xl md:text-6xl font-black">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-sm font-bold uppercase tracking-widest opacity-80">Mins</span>
              </div>
              <span className="text-4xl md:text-6xl font-black opacity-50">:</span>
              <div className="flex flex-col w-[80px]">
                <span className="text-4xl md:text-6xl font-black">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-sm font-bold uppercase tracking-widest opacity-80">Secs</span>
              </div>
            </div>
            <p className="text-xl max-w-xl mx-auto opacity-80 font-medium">Void Walker LE - Highly restricted availability. Set your alarms.</p>
            <Link to="/product/sx-003">
              <Button variant="outline" className="mt-4 bg-white text-black border-white hover:bg-gray-200 dark:border-black dark:bg-black dark:text-white dark:hover:bg-gray-800">
                Preview Drop
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-24 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-black text-black dark:text-white uppercase tracking-tighter">
                Trending Now
              </h2>
              <p className="text-gray-500 mt-2 text-lg">The streets are talking. See what's hot.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-2 font-bold hover:text-[var(--color-primary)] transition-colors dark:text-white dark:hover:text-[var(--color-primary)]">
              View All <ArrowRight className="w-5 h-5"/>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-10 md:hidden text-center">
            <Link to="/shop">
              <Button variant="secondary" className="w-full">View All Trending</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Categories / Lifestyle */}
      <section className="py-12 md:py-16 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            
            <Link to="/shop?cat=streetwear" className="relative group overflow-hidden bg-gray-100 dark:bg-gray-900 rounded-2xl w-full md:w-1/2 min-h-[300px] md:min-h-[450px]">
              <img src="/pink_shoe.avif" alt="Streetwear" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <h3 className="text-3xl md:text-4xl font-display font-black text-white uppercase mb-2">Streetwear</h3>
                <span className="flex items-center gap-2 text-white font-bold group-hover:text-[var(--color-primary)] transition-colors">
                  Shop Now <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </Link>

            <div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/2">
               <Link to="/shop?cat=running" className="relative group overflow-hidden bg-gray-100 dark:bg-gray-900 rounded-2xl flex-1 min-h-[200px]">
                <img src="/images/shoe 2.avif" alt="Running" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase mb-1">Running</h3>
                  <span className="flex items-center gap-2 text-white font-bold group-hover:text-[var(--color-primary)] transition-colors text-sm">
                    Shop Now <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              
              <Link to="/shop?cat=training" className="relative group overflow-hidden bg-gray-100 dark:bg-gray-900 rounded-2xl flex-1 min-h-[200px]">
                <img src="/images/shoe 4.avif" alt="Training" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase mb-1">Training</h3>
                  <span className="flex items-center gap-2 text-white font-bold group-hover:text-[var(--color-primary)] transition-colors text-sm">
                    Shop Now <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
