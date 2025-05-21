
import React from 'react';
import { Truck, Shield, RotateCcw, CreditCard } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureBlock: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg bg-white shadow-sm">
      <div className="bg-ecommerce-primary/10 p-4 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-ecommerce-text-secondary text-sm">{description}</p>
    </div>
  );
};

const FeatureBlocks = () => {
  const features = [
    {
      icon: <Truck className="w-6 h-6 text-ecommerce-primary" />,
      title: "Free Shipping",
      description: "Free shipping on all orders over $50"
    },
    {
      icon: <RotateCcw className="w-6 h-6 text-ecommerce-primary" />,
      title: "Easy Returns",
      description: "30-day easy return policy"
    },
    {
      icon: <Shield className="w-6 h-6 text-ecommerce-primary" />,
      title: "Secure Payment",
      description: "Your data is protected with us"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-ecommerce-primary" />,
      title: "Flexible Payment",
      description: "Multiple payment options available"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureBlock
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlocks;
