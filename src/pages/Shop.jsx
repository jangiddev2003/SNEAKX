import { useState, useEffect } from 'react';
import { getProducts } from '../services/mockData';
import ProductCard from '../components/ui/ProductCard';
import { Filter, ChevronDown, Check } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const catQuery = searchParams.get('cat');
  const genderQuery = searchParams.get('gender');
  
  const [filters, setFilters] = useState({
    category: catQuery ? [catQuery.toLowerCase()] : [],
    gender: genderQuery ? [genderQuery.toLowerCase()] : [],
    size: [],
  });
  const [sort, setSort] = useState('popular');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  useEffect(() => {
    const catQ = searchParams.get('cat');
    const genderQ = searchParams.get('gender');
    setFilters(prev => ({
      ...prev,
      category: catQ ? [catQ.toLowerCase()] : prev.category,
      gender: genderQ ? [genderQ.toLowerCase()] : prev.gender
    }));
  }, [searchParams]);

  const categories = ['Running', 'Streetwear', 'Training', 'Limited Edition'];
  const genders = ['Men', 'Women', 'Unisex'];
  const sizes = [6, 7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13];

  const handleFilterChange = (type, value) => {
    setFilters(prev => {
      const current = prev[type];
      const lowerValue = value.toString().toLowerCase();
      if (current.includes(lowerValue)) {
        return { ...prev, [type]: current.filter(item => item !== lowerValue) };
      } else {
        return { ...prev, [type]: [...current, lowerValue] };
      }
    });
  };

  const filteredProducts = products.filter(p => {
    const pCat = p.category.toLowerCase();
    const pGender = (p.gender || '').toLowerCase();
    
    if (filters.category.length > 0 && !filters.category.includes(pCat)) return false;
    if (filters.gender.length > 0 && !filters.gender.includes(pGender)) return false;
    
    if (filters.size.length > 0) {
      const hasSize = p.sizes.some(s => filters.size.includes(s.toString()));
      if (!hasSize) return false;
    }
    
    return true;
  }).sort((a, b) => {
    if (sort === 'price-low') return a.price - b.price;
    if (sort === 'price-high') return b.price - a.price;
    // popular
    return b.rating - a.rating;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 dark:text-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-display font-black uppercase">All Products</h1>
          <p className="text-gray-500 mt-2">{filteredProducts.length} Results</p>
        </div>
        
        <div className="flex items-center gap-4 self-end md:self-auto">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden flex items-center gap-2 font-bold px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-black dark:hover:border-white transition-colors"
          >
            <Filter className="w-5 h-5"/> Filters
          </button>
          
          <div className="relative group">
            <button className="flex items-center gap-2 font-bold px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-black dark:hover:border-white transition-colors">
              Sort By <ChevronDown className="w-4 h-4"/>
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-[#111] shadow-xl rounded-lg border border-gray-100 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
              <div className="py-2">
                <button onClick={() => setSort('popular')} className={`block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-900 ${sort === 'popular' ? 'font-bold text-[var(--color-primary)]' : ''}`}>Popularity</button>
                <button onClick={() => setSort('price-low')} className={`block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-900 ${sort === 'price-low' ? 'font-bold text-[var(--color-primary)]' : ''}`}>Price: Low to High</button>
                <button onClick={() => setSort('price-high')} className={`block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-900 ${sort === 'price-high' ? 'font-bold text-[var(--color-primary)]' : ''}`}>Price: High to Low</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <div className={`w-full md:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
          <div className="sticky top-28 space-y-8 pr-4">
            
            <div>
              <h3 className="text-lg font-bold uppercase mb-4 py-2 border-b border-gray-200 dark:border-gray-800">Categories</h3>
              <div className="space-y-3">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${filters.category.includes(cat.toLowerCase()) ? 'bg-black border-black dark:bg-[var(--color-primary)] dark:border-[var(--color-primary)] text-white dark:text-black' : 'border-gray-300 dark:border-gray-700'}`}>
                      {filters.category.includes(cat.toLowerCase()) && <Check className="w-3 h-3" />}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">{cat}</span>
                    <input type="checkbox" className="hidden" checked={filters.category.includes(cat.toLowerCase())} onChange={() => handleFilterChange('category', cat)} />
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold uppercase mb-4 py-2 border-b border-gray-200 dark:border-gray-800">Gender</h3>
              <div className="space-y-3">
                {genders.map(gender => (
                  <label key={gender} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${filters.gender.includes(gender.toLowerCase()) ? 'bg-black border-black dark:bg-[var(--color-primary)] dark:border-[var(--color-primary)] text-white dark:text-black' : 'border-gray-300 dark:border-gray-700'}`}>
                      {filters.gender.includes(gender.toLowerCase()) && <Check className="w-3 h-3" />}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">{gender}</span>
                    <input type="checkbox" className="hidden" checked={filters.gender.includes(gender.toLowerCase())} onChange={() => handleFilterChange('gender', gender)} />
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold uppercase mb-4 py-2 border-b border-gray-200 dark:border-gray-800">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map(size => (
                  <button 
                    key={size}
                    onClick={() => handleFilterChange('size', size)}
                    className={`py-2 text-sm font-medium border rounded transition-all ${
                      filters.size.includes(size.toString()) 
                        ? 'border-black bg-black text-white dark:border-[var(--color-primary)] dark:bg-[var(--color-primary)] dark:text-black' 
                        : 'border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-grow">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-2">No products found</h2>
              <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
              <button 
                onClick={() => setFilters({category: [], gender: [], size: []})}
                className="mt-4 text-[var(--color-primary)] font-bold underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Shop;
