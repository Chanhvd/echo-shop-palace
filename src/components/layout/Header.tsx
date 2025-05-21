
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-ecommerce-primary">
            ShopWave
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium hover:text-ecommerce-primary transition-colors">
              Home
            </Link>
            <Link to="/shop" className="font-medium hover:text-ecommerce-primary transition-colors">
              Shop
            </Link>
            <Link to="/about" className="font-medium hover:text-ecommerce-primary transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="font-medium hover:text-ecommerce-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:text-ecommerce-primary transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            <Link to="/account" className="hover:text-ecommerce-primary transition-colors" aria-label="Account">
              <User size={20} />
            </Link>
            
            <Link to="/cart" className="hover:text-ecommerce-primary transition-colors relative" aria-label="Cart">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-ecommerce-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link to="/cart" className="hover:text-ecommerce-primary transition-colors relative" aria-label="Cart">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-ecommerce-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:text-ecommerce-primary transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar - Expandable */}
        {isSearchOpen && (
          <div className="pt-4 animate-fade-in">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-ecommerce-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-4 py-4">
              <Link 
                to="/" 
                className="font-medium hover:text-ecommerce-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="font-medium hover:text-ecommerce-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className="font-medium hover:text-ecommerce-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="font-medium hover:text-ecommerce-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <button 
                  onClick={() => {
                    setIsSearchOpen(!isSearchOpen);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 font-medium hover:text-ecommerce-primary transition-colors py-2"
                >
                  <Search size={20} />
                  <span>Search</span>
                </button>
              </div>
              <Link 
                to="/account" 
                className="flex items-center space-x-2 font-medium hover:text-ecommerce-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={20} />
                <span>My Account</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
