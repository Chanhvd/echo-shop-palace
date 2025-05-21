
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-ecommerce-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About ShopWave</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            We're on a mission to deliver high-quality products with exceptional customer service.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4 text-ecommerce-text-secondary">
                Founded in 2018, ShopWave began with a simple idea: to make quality products accessible to everyone. What started as a small online store has grown into a trusted destination for shoppers around the world.
              </p>
              <p className="mb-4 text-ecommerce-text-secondary">
                We believe in quality, affordability, and exceptional customer service. Our team works tirelessly to source the best products and deliver them right to your doorstep with a seamless shopping experience.
              </p>
              <p className="text-ecommerce-text-secondary">
                Over the years, we've expanded our catalog to include thousands of products across multiple categories, all while maintaining our commitment to customer satisfaction and product excellence.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format" 
                alt="Our team working" 
                className="rounded-lg shadow-xl z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-ecommerce-primary/10 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-ecommerce-secondary/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-ecommerce-text-secondary">
              The principles that guide everything we do at ShopWave
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-ecommerce-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ecommerce-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-ecommerce-text-secondary">
                We never compromise on quality. Every product in our catalog undergoes rigorous testing and quality checks before reaching our customers.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-ecommerce-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ecommerce-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Affordability</h3>
              <p className="text-ecommerce-text-secondary">
                Great products shouldn't break the bank. We work directly with manufacturers to bring you the best prices without compromising on quality.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-ecommerce-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ecommerce-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Satisfaction</h3>
              <p className="text-ecommerce-text-secondary">
                Our customers are at the heart of everything we do. We're committed to providing an exceptional shopping experience and support at every step.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-ecommerce-text-secondary">
              Meet the passionate people who make ShopWave possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format" },
              { name: "Michael Chen", role: "Head of Product", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format" },
              { name: "Emily Rodriguez", role: "Customer Success", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format" },
              { name: "David Kim", role: "Operations Manager", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format" }
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="relative inline-block mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-40 h-40 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute inset-0 rounded-full bg-ecommerce-primary/10 transform -rotate-6 -z-10"></div>
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-ecommerce-text-secondary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-20 bg-gradient-to-r from-ecommerce-primary to-ecommerce-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience ShopWave?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Browse our collection of high-quality products and discover why thousands of customers choose ShopWave every day.
          </p>
          <Button asChild size="lg" className="bg-white text-ecommerce-primary hover:bg-white/90">
            <Link to="/shop">Shop Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
