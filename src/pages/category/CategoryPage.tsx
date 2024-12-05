import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import { ProductGrid } from '../../components/product/ProductGrid';
import { Filter, SortAsc, SortDesc } from 'lucide-react';

const categoryInfo = {
  computers: {
    title: 'Desktop Computers',
    description: 'From gaming rigs to workstations, find the perfect desktop computer.',
    image: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  laptops: {
    title: 'Laptops',
    description: 'Powerful laptops for work, gaming, and everyday use.',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  components: {
    title: 'PC Components',
    description: 'Build or upgrade your PC with premium components.',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  tvs: {
    title: 'TVs & Displays',
    description: 'Experience stunning visuals with our range of TVs and displays.',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  appliances: {
    title: 'Home Appliances',
    description: 'Smart appliances for a modern home.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  }
};

export function CategoryPage() {
  const { category = '' } = useParams();
  const { products, isLoading } = useProducts(category);
  const info = categoryInfo[category as keyof typeof categoryInfo];

  return (
    <div className="space-y-8">
      {/* Category Hero */}
      <div className="relative h-64 overflow-hidden rounded-xl">
        <img
          src={info?.image}
          alt={info?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">{info?.title}</h1>
            <p className="text-lg text-gray-200">{info?.description}</p>
          </div>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
        <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
          <Filter size={20} />
          <span>Filters</span>
        </button>
        
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Sort by:</span>
          <select className="border rounded-lg px-4 py-2 bg-white hover:bg-gray-50">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Customer Rating</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <ProductGrid products={products} isLoading={isLoading} />
    </div>
  );
}