import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import { PropertyGrid } from '../components/PropertyGrid';
import { ListPropertyButton } from '../components/ListPropertyButton';

const properties = [
  {
    id: "prop1",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    title: "Modern Villa with Ocean View",
    price: "2.5",
    location: "Beverly Hills, CA",
    beds: 4,
    baths: 3,
    sqft: 2800
  },
  {
    id: "prop2",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Luxury Penthouse",
    price: "3.8",
    location: "Manhattan, NY",
    beds: 3,
    baths: 2,
    sqft: 2200
  },
  {
    id: "prop3",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    title: "Waterfront Mansion",
    price: "5.2",
    location: "Miami Beach, FL",
    beds: 6,
    baths: 5,
    sqft: 4500
  },
  {
    id: "prop4",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    title: "Modern Downtown Loft",
    price: "1.8",
    location: "Seattle, WA",
    beds: 2,
    baths: 2,
    sqft: 1500
  },
  {
    id: "prop5",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e",
    title: "Suburban Family Home",
    price: "2.2",
    location: "Austin, TX",
    beds: 4,
    baths: 3,
    sqft: 2600
  },
  {
    id: "prop6",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    title: "Beachfront Condo",
    price: "3.5",
    location: "San Diego, CA",
    beds: 3,
    baths: 2,
    sqft: 1800
  }
];

export function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProperties = properties.filter(property =>
    property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Property Marketplace
          </h1>
          <p className="text-xl text-gray-600">
            Discover and invest in tokenized properties
          </p>
        </motion.div>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by location or property type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center justify-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>

        <PropertyGrid properties={filteredProperties} />
        <ListPropertyButton />
      </div>
    </div>
  );
}