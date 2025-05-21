
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/types';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    addToCart(product, 1);
  };

  // Calculate discount percentage if originalPrice exists
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div className="card group relative">
      {/* Discount badge if applicable */}
      {discountPercentage > 0 && (
        <span className="absolute top-3 left-3 bg-ecommerce-secondary text-white text-xs font-bold px-2 py-1 rounded-md z-10">
          {discountPercentage}% OFF
        </span>
      )}
      
      {/* Wishlist button */}
      <button 
        className="absolute top-3 right-3 bg-white/80 hover:bg-white p-1.5 rounded-full text-gray-600 hover:text-rose-500 transition-colors z-10"
        aria-label="Add to wishlist"
      >
        <Heart size={18} />
      </button>
      
      {/* Product image with link */}
      <Link to={`/product/${product.id}`} className="block overflow-hidden relative pt-[100%]">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </Link>
      
      {/* Product details */}
      <div className="mt-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-medium text-lg truncate hover:text-ecommerce-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-ecommerce-text-secondary truncate mt-1">
          {product.shortDescription}
        </p>
        
        <div className="flex justify-between items-center mt-3">
          <div>
            <div className="flex items-center">
              {/* Star rating */}
              <div className="flex items-center space-x-1 text-amber-400 mr-2">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Rating value */}
              <span className="text-sm text-ecommerce-text-secondary">
                {product.rating}
              </span>
            </div>
            
            {/* Price */}
            <div className="mt-1.5 flex items-center">
              <span className="font-semibold text-lg">
                ${product.price.toFixed(2)}
              </span>
              
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through ml-2">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
          
          {/* Add to cart button */}
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="bg-ecommerce-primary hover:bg-ecommerce-primary/90"
          >
            <ShoppingCart size={16} className="mr-1" />
            <span className="sr-only md:not-sr-only md:inline-block">Add</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
