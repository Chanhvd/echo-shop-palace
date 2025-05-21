
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 md:pr-8">
            <span className="inline-block px-3 py-1 rounded-full bg-ecommerce-secondary/20 text-ecommerce-secondary text-sm font-medium">
              Limited Time Offer
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Summer Sale <br />
              <span className="text-ecommerce-secondary">Up to 50% Off</span>
            </h1>
            <p className="text-lg text-blue-100">
              Discover our latest collection of premium products at unbeatable prices. 
              Shop now and elevate your experience with ShopWave.
            </p>
            <div className="pt-4 space-x-4 flex flex-wrap">
              <Button size="lg" asChild className="bg-ecommerce-secondary hover:bg-ecommerce-secondary/90">
                <Link to="/shop">
                  Shop Now <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
            <div className="flex space-x-6 pt-4">
              <div>
                <div className="text-3xl font-bold">100+</div>
                <div className="text-blue-200 text-sm">Brands</div>
              </div>
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-200 text-sm">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50k+</div>
                <div className="text-blue-200 text-sm">Happy Customers</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?q=80&w=1000&auto=format" 
                alt="Featured Product" 
                className="rounded-lg shadow-xl z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-ecommerce-secondary/20 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-ecommerce-primary/20 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 text-ecommerce-background">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroBanner;
