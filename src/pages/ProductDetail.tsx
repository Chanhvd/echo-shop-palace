
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Heart, 
  Minus, 
  Plus, 
  Share2, 
  ShoppingCart, 
  Star, 
  Truck, 
  Shield, 
  RotateCcw,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getProductById } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    } else {
      toast({
        title: "Maximum quantity reached",
        description: `Only ${product.stock} items available in stock.`,
      });
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  return (
    <div className="min-h-screen bg-ecommerce-background">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="text-sm text-ecommerce-text-secondary">
            <ol className="flex items-center space-x-2">
              <li><Link to="/" className="hover:text-ecommerce-primary">Home</Link></li>
              <li><span>/</span></li>
              <li><Link to="/shop" className="hover:text-ecommerce-primary">Shop</Link></li>
              <li><span>/</span></li>
              <li><Link to={`/shop?category=${product.category}`} className="hover:text-ecommerce-primary">{product.category}</Link></li>
              <li><span>/</span></li>
              <li className="text-ecommerce-text-primary">{product.name}</li>
            </ol>
          </nav>
        </div>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="border rounded-lg bg-white overflow-hidden">
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-auto object-contain aspect-square"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`border rounded w-20 h-20 flex-shrink-0 overflow-hidden ${
                      activeImage === index ? 'border-ecommerce-primary border-2' : 'border-gray-200'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - View ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < Math.floor(product.rating) 
                      ? "fill-amber-400 text-amber-400" 
                      : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="ml-2 text-ecommerce-text-secondary">
                {product.rating} ({product.reviews.length} {product.reviews.length === 1 ? 'review' : 'reviews'})
              </span>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="ml-3 text-lg text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="ml-3 bg-ecommerce-secondary/10 text-ecommerce-secondary px-2 py-1 rounded text-sm font-semibold">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>
            </div>
            
            {/* Short Description */}
            <p className="text-ecommerce-text-secondary mb-6">
              {product.shortDescription}
            </p>
            
            <div className="flex items-center mb-4">
              <span className="text-sm font-medium mr-4">Availability:</span>
              {product.stock > 0 ? (
                <span className="text-green-600 flex items-center">
                  <Check size={16} className="mr-1" />
                  In Stock ({product.stock} available)
                </span>
              ) : (
                <span className="text-red-600">Out of Stock</span>
              )}
            </div>
            
            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <span className="text-sm font-medium mr-4">Quantity:</span>
              <div className="flex items-center border rounded">
                <button 
                  onClick={decrementQuantity} 
                  className="px-3 py-2 border-r hover:bg-gray-100"
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-2 w-12 text-center">{quantity}</span>
                <button 
                  onClick={incrementQuantity} 
                  className="px-3 py-2 border-l hover:bg-gray-100"
                  disabled={quantity >= product.stock}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                onClick={handleAddToCart} 
                className="bg-ecommerce-primary hover:bg-ecommerce-primary/90 flex-grow sm:flex-grow-0"
                size="lg"
                disabled={product.stock === 0}
              >
                <ShoppingCart className="mr-2" size={18} />
                Add to Cart
              </Button>
              <Button 
                onClick={handleAddToWishlist} 
                variant="outline" 
                className="flex-grow sm:flex-grow-0"
                size="lg"
              >
                <Heart className="mr-2" size={18} />
                Add to Wishlist
              </Button>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center space-x-2 text-sm">
                <Truck size={16} className="text-ecommerce-primary" />
                <span>Free shipping over $50</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <RotateCcw size={16} className="text-ecommerce-primary" />
                <span>30-day returns</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Shield size={16} className="text-ecommerce-primary" />
                <span>Secure checkout</span>
              </div>
            </div>
            
            {/* Share */}
            <div className="flex items-center space-x-4 pt-4 border-t">
              <span className="text-sm font-medium">Share:</span>
              <div className="flex space-x-3">
                <button 
                  aria-label="Share on Facebook"
                  className="p-1.5 rounded-full text-gray-700 bg-gray-100 hover:bg-gray-200"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.743 17.5H15.5V12.5H18.5L19 9H15.5V7C15.5 5.97 15.771 5.5 17.248 5.5H19V2.14C18.093 2.097 17.1851 2.0759 16.277 2.076C13.7 2.076 12 3.657 12 6.7V9H9V12.5H12V17.5H12.743Z"></path>
                  </svg>
                </button>
                <button 
                  aria-label="Share on Twitter"
                  className="p-1.5 rounded-full text-gray-700 bg-gray-100 hover:bg-gray-200"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.615 11.615 0 006.29 1.84"></path>
                  </svg>
                </button>
                <button 
                  aria-label="Share via Email"
                  className="p-1.5 rounded-full text-gray-700 bg-gray-100 hover:bg-gray-200"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.243 6.854L11.49 1.31a1 1 0 011.029 0l9.238 5.545a.5.5 0 01.243.429V20a2 2 0 01-2 2H4a2 2 0 01-2-2V7.283a.5.5 0 01.243-.429zM7.2 12L4 10.335v7.663a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-7.663L16.8 12l-.722.452a1 1 0 01-.96.035l-2.818-1.409-2.818 1.41a1 1 0 01-.96-.036L7.2 12zm13.6-1.348L16 13.054l3.776 2.36a.5.5 0 00.776-.416v-5.483l.247.137zm-20 0l.247-.137v5.483a.5.5 0 00.776.416L6 13.054l-4.8-3.402z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs Section */}
        <div className="mt-12">
          <Tabs defaultValue="description" className="mt-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews.length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="p-6 bg-white rounded-b-lg border border-gray-100">
              <div className="prose max-w-none">
                <p className="mb-4">{product.description}</p>
                <p>Experience the difference with our high-quality products designed for maximum satisfaction and durability.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="p-6 bg-white rounded-b-lg border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Brand</td>
                      <td className="py-2 px-4">ShopWave</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Material</td>
                      <td className="py-2 px-4">Premium Quality</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Category</td>
                      <td className="py-2 px-4">{product.category}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Tags</td>
                      <td className="py-2 px-4">{product.tags.join(', ')}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-medium">Weight</td>
                      <td className="py-2 px-4">0.5 kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="p-6 bg-white rounded-b-lg border border-gray-100">
              {product.reviews.length === 0 ? (
                <div className="text-center py-8">
                  <h3 className="font-semibold mb-2">No Reviews Yet</h3>
                  <p className="text-ecommerce-text-secondary">Be the first to review this product</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">{review.userName}</div>
                        <div className="text-sm text-ecommerce-text-secondary">
                          {new Date(review.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex items-center mb-2">
                        {Array(5).fill(0).map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={i < review.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <p className="text-ecommerce-text-secondary text-sm">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-6">
                <Button variant="outline">Write a Review</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
