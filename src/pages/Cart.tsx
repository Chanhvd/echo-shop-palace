
import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, ShoppingCart, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-ecommerce-background">
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 max-w-md mx-auto">
            <div className="w-20 h-20 mx-auto bg-ecommerce-primary/10 rounded-full flex items-center justify-center mb-6">
              <ShoppingCart className="w-10 h-10 text-ecommerce-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-ecommerce-text-secondary mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button asChild className="bg-ecommerce-primary hover:bg-ecommerce-primary/90">
              <Link to="/shop">Start Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ecommerce-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 flex justify-between items-center border-b">
                <h2 className="font-semibold">Cart Items ({cartItems.length})</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearCart} 
                  className="text-ecommerce-text-secondary"
                >
                  Clear Cart
                </Button>
              </div>
              
              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center">
                    {/* Product image */}
                    <Link to={`/product/${item.product.id}`} className="flex-shrink-0 w-20 h-20 mr-4 mb-3 sm:mb-0">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover rounded"
                      />
                    </Link>
                    
                    {/* Product details */}
                    <div className="flex-grow">
                      <Link 
                        to={`/product/${item.product.id}`} 
                        className="font-medium hover:text-ecommerce-primary transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      
                      <div className="mt-1 text-sm text-ecommerce-text-secondary">
                        Price: ${item.product.price.toFixed(2)}
                      </div>
                      
                      {/* Price and actions - mobile */}
                      <div className="flex justify-between items-center mt-2 sm:hidden">
                        <div className="font-semibold">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="w-8 h-8"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </Button>
                          
                          <span className="w-8 text-center">{item.quantity}</span>
                          
                          <Button 
                            variant="outline"
                            size="icon"
                            className="w-8 h-8"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            disabled={item.quantity >= item.product.stock}
                          >
                            <Plus size={14} />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Price, quantity, and actions - desktop */}
                    <div className="hidden sm:flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="w-8 h-8"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </Button>
                        
                        <span className="w-8 text-center">{item.quantity}</span>
                        
                        <Button 
                          variant="outline"
                          size="icon"
                          className="w-8 h-8"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          disabled={item.quantity >= item.product.stock}
                        >
                          <Plus size={14} />
                        </Button>
                      </div>
                      
                      <div className="font-semibold w-20 text-right">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-gray-400 hover:text-red-500"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <Trash size={18} />
                      </Button>
                    </div>
                    
                    {/* Remove button - mobile */}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-gray-400 hover:text-red-500 mt-2 sm:hidden"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      <Trash size={16} className="mr-1" />
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t">
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link to="/shop">Continue Shopping</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-ecommerce-text-secondary">Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-ecommerce-text-secondary">Shipping</span>
                  <span>Free</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-ecommerce-text-secondary">Tax</span>
                  <span>${(cartTotal * 0.07).toFixed(2)}</span>
                </div>
                
                <Separator className="my-3" />
                
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${(cartTotal + cartTotal * 0.07).toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                className="w-full mt-6 bg-ecommerce-primary hover:bg-ecommerce-primary/90" 
                size="lg"
                asChild
              >
                <Link to="/checkout">
                  Proceed to Checkout
                </Link>
              </Button>
              
              <div className="mt-6 text-sm text-center text-ecommerce-text-secondary">
                <p>We accept:</p>
                <div className="flex justify-center space-x-2 mt-2">
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
