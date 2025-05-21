
import React from 'react';
import HeroBanner from '@/components/home/HeroBanner';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import FeatureBlocks from '@/components/home/FeatureBlocks';
import NewsletterCta from '@/components/home/NewsletterCta';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <FeaturedProducts />
      <FeatureBlocks />
      <NewsletterCta />
    </div>
  );
};

export default Index;
