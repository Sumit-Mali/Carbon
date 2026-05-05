import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { products, productCategories } from '../data/products';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  const productsPerPage = 12;

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && category !== selectedCategory) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
    setMobileFilterOpen(false);
  };

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-slate-900/30 py-16" data-testid="products-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-4"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              OUR <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">PRODUCTS</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Explore our comprehensive range of bus equipment and entertainment solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid with Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Filter Sidebar */}
            <aside className="hidden lg:block w-64 shrink-0" data-testid="desktop-filter">
              <div className="bg-slate-900/50 border border-slate-800 rounded-sm p-6 sticky top-24">
                <h3 className="text-xl font-bold uppercase tracking-wide mb-4 text-white">
                  Filter by Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    data-testid="filter-category-all"
                    className={`w-full text-left px-4 py-2 rounded-sm transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    All Products
                  </button>
                  {productCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      data-testid={`filter-category-${category.id}`}
                      className={`w-full text-left px-4 py-2 rounded-sm transition-colors text-sm ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Mobile Filter Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                data-testid="mobile-filter-btn"
                className="flex items-center space-x-2 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-sm text-white"
              >
                <Filter className="w-5 h-5" />
                <span>Filter by Category</span>
              </button>

              {/* Mobile Filter Dropdown */}
              {mobileFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 bg-slate-900/95 border border-slate-800 rounded-sm p-4"
                  data-testid="mobile-filter-menu"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold uppercase text-white">Filter</h3>
                    <button
                      onClick={() => setMobileFilterOpen(false)}
                      className="text-slate-400 hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleCategoryChange('all')}
                      data-testid="mobile-filter-category-all"
                      className={`w-full text-left px-4 py-2 rounded-sm transition-colors ${
                        selectedCategory === 'all'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      All Products
                    </button>
                    {productCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
                        data-testid={`mobile-filter-category-${category.id}`}
                        className={`w-full text-left px-4 py-2 rounded-sm transition-colors text-sm ${
                          selectedCategory === category.id
                            ? 'bg-blue-600 text-white'
                            : 'text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-6">
                <p className="text-slate-400">
                  Showing {indexOfFirstProduct + 1}–
                  {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
                  {filteredProducts.length} products
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {currentProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Link
                      to={`/products/${product.id}`}
                      data-testid={`product-card-${product.id}`}
                      className="group relative bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden rounded-sm h-full flex flex-col"
                    >
                      {/* Product Image Placeholder */}
                      <div className="aspect-video bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                        <div className="text-slate-700 text-6xl font-black uppercase">
                          <img src={product.imageUrl} alt={product.model.substring(0, 3)}/>
                        </div>
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                      </div>

                      {/* Product Info */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-2">
                          <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
                            {productCategories.find((c) => c.id === product.category)?.name || product.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-2 group-hover:text-blue-400 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                          {product.description}
                        </p>

                        {/* Key Specs */}
                        <div className="mt-auto">
                          <div className="text-xs text-slate-500 space-y-1">
                            {product.displaySize && (
                              <div className="flex items-center justify-between">
                                <span>Display:</span>
                                <span className="text-slate-400">{product.displaySize}</span>
                              </div>
                            )}
                            {product.inputVoltage && (
                              <div className="flex items-center justify-between">
                                <span>Voltage:</span>
                                <span className="text-slate-400">{product.inputVoltage}</span>
                              </div>
                            )}
                            {product.power && (
                              <div className="flex items-center justify-between">
                                <span>Power:</span>
                                <span className="text-slate-400">{product.power}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* View Details Link */}
                        <div className="mt-4 pt-4 border-t border-slate-800">
                          <span className="text-blue-400 text-sm font-semibold group-hover:underline">
                            View Details →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-20" data-testid="no-products-message">
                  <p className="text-slate-400 text-lg">No products found in this category</p>
                </div>
              )}
              <div className="flex justify-center items-center gap-2 mt-10">
                {/* Prev Button */}
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-slate-800 text-white rounded disabled:opacity-50 cursor-pointer"
                >
                  Prev
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-4 py-2 rounded ${
                      currentPage === i + 1
                        ? "bg-blue-600 text-white cursor-pointer"
                        : "bg-slate-800 text-slate-300 cursor-pointer"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-slate-800 text-white rounded disabled:opacity-50 cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
