import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const NewsletterCta = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Newsletter Subscription",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail('');
    } else {
      toast({
        title: "Newsletter Subscription",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-ecommerce-primary/10 to-ecommerce-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Our Newsletter</h2>
          <p className="text-lg text-ecommerce-text-secondary mb-6">
            Subscribe to get updates on our latest offers, new products, and exclusive deals.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit" className="bg-ecommerce-primary hover:bg-ecommerce-primary/90 whitespace-nowrap">
              Subscribe Now
            </Button>
          </form>
          <p className="text-sm text-ecommerce-text-secondary mt-4">
            By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCta;
