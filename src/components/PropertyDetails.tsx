import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, DollarSign, Calendar, Shield } from 'lucide-react';
import { TransactionModal } from './TransactionModal';
import { ReviewSection } from './ReviewSection';

interface PropertyDetailsProps {
  property: {
    id: string;
    image: string;
    title: string;
    price: string;
    location: string;
    beds: number;
    baths: number;
    sqft: number;
    description: string;
    yearBuilt: number;
    features: string[];
  };
}

const sampleReviews = [
  {
    id: 1,
    author: "0x1234...5678",
    rating: 5,
    comment: "Beautiful property with amazing views. The transaction process was smooth and secure.",
    date: "2024-03-10"
  },
  {
    id: 2,
    author: "0x8765...4321",
    rating: 4,
    comment: "Great location and amenities. The smart contract made the purchase process transparent.",
    date: "2024-03-08"
  }
];

export function PropertyDetails({ property }: PropertyDetailsProps) {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="relative h-96">
          <img 
            src={property.image} 
            alt={property.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-semibold">
            {property.price} ETH
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{property.title}</h2>
          
          <div className="flex items-center text-gray-600 mb-6">
            <MapPin className="h-5 w-5 mr-2 text-blue-600" />
            <span className="text-lg">{property.location}</span>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="flex items-center">
              <Bed className="h-5 w-5 mr-2 text-blue-600" />
              <span>{property.beds} Beds</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-5 w-5 mr-2 text-blue-600" />
              <span>{property.baths} Baths</span>
            </div>
            <div className="flex items-center">
              <Square className="h-5 w-5 mr-2 text-blue-600" />
              <span>{property.sqft} sqft</span>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{property.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-blue-600" />
              <span>Built in {property.yearBuilt}</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-blue-600" />
              <span>Verified on Blockchain</span>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Key Features</h3>
            <ul className="grid grid-cols-2 gap-3">
              {property.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsTransactionModalOpen(true)}
            className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <DollarSign className="h-5 w-5" />
            <span>Purchase Property</span>
          </motion.button>
        </div>

        <ReviewSection propertyId={property.id} reviews={sampleReviews} />
      </motion.div>

      <TransactionModal
        isOpen={isTransactionModalOpen}
        onClose={() => setIsTransactionModalOpen(false)}
        propertyPrice={property.price}
        propertyTitle={property.title}
      />
    </>
  );
}