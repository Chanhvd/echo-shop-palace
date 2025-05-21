
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const OrderConfirmation = () => {
  // Generate a random order number
  const orderNumber = `WW-${Math.floor(100000 + Math.random() * 900000)}`;
  
  return (
    <div className="min-h-screen bg-ecommerce-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-ecommerce-text-secondary mb-6">
              Thank you for your purchase. We've received your order and will begin processing it right away.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-md p-6 mb-6">
            <h2 className="font-semibold mb-4">Order Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-ecommerce-text-secondary mb-1">Order Number:</p>
                <p className="font-medium">{orderNumber}</p>
              </div>
              <div>
                <p className="text-ecommerce-text-secondary mb-1">Order Date:</p>
                <p className="font-medium">{new Date().toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-ecommerce-text-secondary mb-1">Payment Method:</p>
                <p className="font-medium">Credit Card</p>
              </div>
              <div>
                <p className="text-ecommerce-text-secondary mb-1">Shipping Method:</p>
                <p className="font-medium">Standard Shipping (3-5 business days)</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="font-semibold mb-4">What happens next?</h2>
            <ol className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-ecommerce-primary/10 text-ecommerce-primary flex items-center justify-center mr-3 flex-shrink-0 font-medium">1</span>
                <span>You'll receive an email confirmation shortly with your order details.</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-ecommerce-primary/10 text-ecommerce-primary flex items-center justify-center mr-3 flex-shrink-0 font-medium">2</span>
                <span>We'll notify you once your order has been shipped, along with tracking information.</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-ecommerce-primary/10 text-ecommerce-primary flex items-center justify-center mr-3 flex-shrink-0 font-medium">3</span>
                <span>Your package will arrive within the estimated delivery timeframe.</span>
              </li>
            </ol>
          </div>
          
          <div className="text-center space-y-4">
            <Button asChild className="bg-ecommerce-primary hover:bg-ecommerce-primary/90">
              <Link to="/">
                Continue Shopping
              </Link>
            </Button>
            <p className="text-sm text-ecommerce-text-secondary">
              Have questions about your order? <Link to="/contact" className="text-ecommerce-primary hover:underline">Contact our support team</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
