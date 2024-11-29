import React from 'react';
import { PropertyDetails } from '../components/PropertyDetails';
import { motion } from 'framer-motion';

export function Properties() {
  const properties = [
    {
      id: "prop1",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80",
      title: "Modern Villa with Ocean View",
      price: "2.5",
      location: "Beverly Hills, CA",
      beds: 4,
      baths: 3,
      sqft: 2800,
      description: "Stunning modern villa with panoramic ocean views. This luxurious property features high-end finishes, smart home technology, and an infinity pool overlooking the Pacific.",
      yearBuilt: 2021,
      features: [
        "Infinity Pool",
        "Smart Home System",
        "Wine Cellar",
        "Home Theater",
        "Gourmet Kitchen",
        "3-Car Garage"
      ]
    },
    {
      id: "prop2",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "Luxury Penthouse in Downtown",
      price: "3.8",
      location: "Manhattan, NY",
      beds: 3,
      baths: 2,
      sqft: 2200,
      description: "Exclusive penthouse with floor-to-ceiling windows offering breathtaking city views. Features include a private elevator, custom Italian kitchen, and a wraparound terrace.",
      yearBuilt: 2020,
      features: [
        "Private Elevator",
        "Wraparound Terrace",
        "Italian Kitchen",
        "24/7 Concierge",
        "Fitness Center",
        "Wine Storage"
      ]
    },
    {
      id: "prop3",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80",
      title: "Waterfront Mansion",
      price: "5.2",
      location: "Miami Beach, FL",
      beds: 6,
      baths: 5,
      sqft: 4500,
      description: "Magnificent waterfront estate with private dock and stunning architectural details. Features include a chef's kitchen, home spa, and outdoor entertainment area.",
      yearBuilt: 2019,
      features: [
        "Private Dock",
        "Home Spa",
        "Guest House",
        "Outdoor Kitchen",
        "Pool & Hot Tub",
        "Smart Security"
      ]
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Available Properties
          </h1>
          <p className="text-xl text-gray-600">
            Discover and invest in tokenized real estate
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <PropertyDetails property={property} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}