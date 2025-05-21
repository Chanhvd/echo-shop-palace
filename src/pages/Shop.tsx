
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/products/ProductCard';
import { products, getAllCategories } from '@/data/products';
import { Product } from '@/lib/types';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { FilterIcon, SlidersHorizontal } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<number[]>([0, 1500]);
  const [sortBy, setSortBy] = useState<string>('featured');
  
  const allCategories = getAllCategories();

  // Get min and max prices from products
  const minPrice = 0;
  const maxPrice = Math.max(...products.map(p => p.price));
  
  // Apply filters
  useEffect(() => {
    let result = [...products];
    
    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Price filter
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    switch (sortBy) {
      case 'price-low-high':
        result = result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result = result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // In a real app, you'd sort by date
        result = result.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case 'rating':
        result = result.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        // Featured items first, then by ID
        result = result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || a.id.localeCompare(b.id));
        break;
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-ecommerce-background">
      {/* Shop header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Shop</h1>
          <p className="mt-2 text-gray-300">Browse our extensive collection of products</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile filter toggle */}
          <div className="lg:hidden flex justify-between items-center mb-4">
            <p className="text-sm text-ecommerce-text-secondary">
              Showing {filteredProducts.length} products
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <FilterIcon size={16} className="mr-2" />
              Filters
            </Button>
          </div>

          {/* Filter sidebar */}
          <div className={`lg:w-1/4 space-y-6 ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <h2 className="font-semibold text-lg mb-4">Categories</h2>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="cat-all" 
                    checked={selectedCategory === 'all'} 
                    onCheckedChange={() => setSelectedCategory('all')}
                  />
                  <label 
                    htmlFor="cat-all"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    All Categories
                  </label>
                </div>
                
                {allCategories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`cat-${category}`} 
                      checked={selectedCategory === category} 
                      onCheckedChange={() => setSelectedCategory(category)}
                    />
                    <label 
                      htmlFor={`cat-${category}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <h2 className="font-semibold text-lg mb-4">Price Range</h2>
              <Slider
                defaultValue={[minPrice, maxPrice]}
                min={minPrice}
                max={maxPrice}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
                className="my-6"
              />
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-ecommerce-text-secondary">
                  ${priceRange[0]}
                </span>
                <span className="text-sm text-ecommerce-text-secondary">
                  ${priceRange[1]}
                </span>
              </div>
            </div>
          </div>
          
          {/* Products section */}
          <div className="lg:w-3/4">
            {/* Sort and products count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-ecommerce-text-secondary hidden lg:block">
                Showing {filteredProducts.length} products
              </p>
              <div className="flex items-center">
                <SlidersHorizontal size={16} className="mr-2 text-gray-500" />
                <Select 
                  value={sortBy} 
                  onValueChange={setSortBy}
                >
                  <SelectTrigger className="w-[180px] bg-white">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                    <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="rating">Top Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-ecommerce-text-secondary">
                  Try adjusting your filters to find what you're looking for.
                </p>
              </div>
            ) : (
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
            
            {/* Pagination - Simple version */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="default" size="sm">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
