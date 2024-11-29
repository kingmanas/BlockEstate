import React from 'react';
import { Hero } from '../components/Hero';
import { NewsSection } from '../components/NewsSection';
import { GuideSection } from '../components/GuideSection';
import { Building2, Shield, Coins } from 'lucide-react';
import { motion } from 'framer-motion';

export function Home() {
  const features = [
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      title: "Verified Properties",
      description: "All properties are verified and authenticated on the blockchain"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Secure Transactions",
      description: "Smart contracts ensure safe and transparent transactions"
    },
    {
      icon: <Coins className="h-8 w-8 text-blue-600" />,
      title: "Digital Ownership",
      description: "Property ownership is tokenized and easily transferable"
    }
  ];

  return (
    <div>
      <Hero />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose BlockEstate?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of real estate with blockchain technology
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GuideSection />
      <NewsSection />
    </div>
  );
}