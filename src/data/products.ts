
import { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 199.99,
    originalPrice: 249.99,
    description: "Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions for extended listening sessions. The sleek design and premium materials make these headphones not just a sound device but also a fashion statement.",
    shortDescription: "Premium wireless headphones with active noise cancellation and 30-hour battery life.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=600&auto=format",
      "https://images.unsplash.com/photo-1546435770-a3e429dcb388?q=80&w=600&auto=format"
    ],
    category: "Electronics",
    tags: ["headphones", "wireless", "audio", "premium"],
    featured: true,
    rating: 4.8,
    reviews: [
      {
        id: "r1",
        userId: "u1",
        userName: "Alex Johnson",
        rating: 5,
        comment: "These headphones are amazing! The sound quality is incredible and the noise cancellation really works.",
        date: "2023-04-15"
      },
      {
        id: "r2",
        userId: "u2",
        userName: "Sarah Miller",
        rating: 4,
        comment: "Great sound quality and comfortable to wear, but battery life seems less than advertised.",
        date: "2023-05-20"
      }
    ],
    stock: 45
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 149.99,
    originalPrice: 179.99,
    description: "Track your fitness goals with precision using our advanced Smart Fitness Watch. Monitor heart rate, steps, sleep, and over 15 different workout types. With a 7-day battery life and water resistance up to 50 meters, this watch is your perfect fitness companion for any lifestyle. The sleek interface and customizable watch faces allow for a personalized experience.",
    shortDescription: "Advanced fitness tracker with heart rate monitoring and 7-day battery life.",
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=600&auto=format",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=600&auto=format",
    ],
    category: "Wearables",
    tags: ["fitness", "watch", "tracker", "smart device"],
    featured: true,
    rating: 4.6,
    reviews: [
      {
        id: "r3",
        userId: "u3",
        userName: "Michael Chen",
        rating: 5,
        comment: "This watch has completely changed my fitness routine. The accuracy of the tracking is impressive!",
        date: "2023-06-10"
      }
    ],
    stock: 28
  },
  {
    id: "3",
    name: "Ultra-Slim Laptop",
    price: 1299.99,
    originalPrice: 1499.99,
    description: "Powerful computing meets elegant design with our Ultra-Slim Laptop. Featuring the latest processor, 16GB RAM, and 512GB SSD storage, this laptop handles everything from everyday tasks to demanding professional applications with ease. The stunning 4K display and all-day battery life make it perfect for work and entertainment on the go.",
    shortDescription: "High-performance laptop with 4K display and all-day battery life.",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=600&auto=format",
      "https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=600&auto=format"
    ],
    category: "Electronics",
    tags: ["laptop", "computer", "slim", "lightweight"],
    featured: true,
    rating: 4.9,
    reviews: [
      {
        id: "r4",
        userId: "u4",
        userName: "Emily Rodriguez",
        rating: 5,
        comment: "The perfect combination of power and portability. I can't believe how lightweight it is!",
        date: "2023-07-05"
      }
    ],
    stock: 12
  },
  {
    id: "4",
    name: "Professional Camera Bundle",
    price: 899.99,
    originalPrice: 1099.99,
    description: "Capture life's moments in extraordinary detail with our Professional Camera Bundle. This comprehensive package includes a high-resolution DSLR camera, two versatile lenses, a tripod, and a camera bag. Whether you're a professional photographer or an enthusiastic beginner, this bundle provides everything you need to take your photography to the next level.",
    shortDescription: "Complete camera kit with DSLR, lenses, tripod, and accessories.",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=600&auto=format"
    ],
    category: "Photography",
    tags: ["camera", "DSLR", "photography", "bundle"],
    featured: false,
    rating: 4.7,
    reviews: [],
    stock: 8
  },
  {
    id: "5",
    name: "Smart Home Security System",
    price: 349.99,
    originalPrice: 399.99,
    description: "Protect what matters most with our comprehensive Smart Home Security System. This easy-to-install package includes a base station, keypad, motion sensors, entry sensors, and a high-definition camera. Monitor your home from anywhere using the intuitive smartphone app, receiving real-time alerts and viewing live footage whenever you need peace of mind.",
    shortDescription: "Complete home security solution with camera and smartphone monitoring.",
    images: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=600&auto=format"
    ],
    category: "Smart Home",
    tags: ["security", "camera", "smart home", "wireless"],
    featured: false,
    rating: 4.5,
    reviews: [],
    stock: 15
  },
  {
    id: "6",
    name: "Premium Coffee Maker",
    price: 129.99,
    originalPrice: 149.99,
    description: "Elevate your coffee experience with our Premium Coffee Maker. This elegant and functional machine brews barista-quality coffee with precision temperature control and extraction timing. The programmable features allow you to wake up to freshly brewed coffee, while the sleek stainless steel design adds a touch of sophistication to any kitchen.",
    shortDescription: "Sophisticated coffee maker with programmable features and precision brewing.",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format",
      "https://images.unsplash.com/photo-1585653621032-a5fec164ee92?q=80&w=600&auto=format"
    ],
    category: "Kitchen Appliances",
    tags: ["coffee", "kitchen", "appliance", "brewing"],
    featured: true,
    rating: 4.4,
    reviews: [],
    stock: 22
  },
  {
    id: "7",
    name: "Ergonomic Office Chair",
    price: 249.99,
    originalPrice: 299.99,
    description: "Transform your workday with our Ergonomic Office Chair, designed for maximum comfort and support during long hours at the desk. Featuring adjustable lumbar support, breathable mesh backrest, customizable armrests, and smooth-rolling casters, this chair promotes proper posture and reduces fatigue. Your back will thank you for this investment in your workspace comfort.",
    shortDescription: "Comfortable office chair with adjustable features for all-day support.",
    images: [
      "https://images.unsplash.com/photo-1595515106865-5873cbcb305f?q=80&w=600&auto=format",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=600&auto=format"
    ],
    category: "Furniture",
    tags: ["chair", "office", "ergonomic", "furniture"],
    featured: false,
    rating: 4.7,
    reviews: [],
    stock: 18
  },
  {
    id: "8",
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    originalPrice: 99.99,
    description: "Take your music anywhere with our rugged and powerful Portable Bluetooth Speaker. Despite its compact size, it delivers rich, room-filling sound with deep bass and crystal-clear highs. Waterproof and dustproof with a 12-hour battery life, it's the perfect companion for beach days, camping trips, or just moving from room to room at home.",
    shortDescription: "Waterproof portable speaker with powerful sound and long battery life.",
    images: [
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=600&auto=format",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format"
    ],
    category: "Electronics",
    tags: ["speaker", "bluetooth", "portable", "waterproof"],
    featured: false,
    rating: 4.3,
    reviews: [],
    stock: 34
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsBySearch = (query: string): Product[] => {
  const searchLower = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchLower) || 
    product.description.toLowerCase().includes(searchLower) ||
    product.category.toLowerCase().includes(searchLower) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchLower))
  );
};

export const getAllCategories = (): string[] => {
  const categoriesSet = new Set<string>();
  products.forEach(product => categoriesSet.add(product.category));
  return Array.from(categoriesSet);
};
