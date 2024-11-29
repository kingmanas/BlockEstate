import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wallet, 
  Search, 
  FileCheck, 
  Key, 
  Shield, 
  TrendingUp,
  Clock,
  Banknote,
  Users
} from 'lucide-react';

export function GuideSection() {
  const steps = [
    {
      icon: <Wallet className="h-8 w-8" />,
      title: "Connect Your Wallet",
      description: "Start by connecting your Web3 wallet to access the BlockEstate platform"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Browse Properties",
      description: "Explore our verified property listings with detailed information and virtual tours"
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Smart Contract Transaction",
      description: "Complete your purchase securely through blockchain-based smart contracts"
    },
    {
      icon: <Key className="h-8 w-8" />,
      title: "Receive Digital Ownership",
      description: "Get instant proof of ownership through NFT-based property tokens"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enhanced Security",
      description: "Blockchain technology ensures tamper-proof records and secure transactions"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Faster Transactions",
      description: "Complete property purchases in days instead of months"
    },
    {
      icon: <Banknote className="h-8 w-8" />,
      title: "Lower Costs",
      description: "Eliminate intermediary fees and reduce administrative costs"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Liquidity",
      description: "Easily transfer or sell your property tokens on our marketplace"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Fractional Ownership",
      description: "Invest in properties with lower capital through shared ownership"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How BlockEstate Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your journey to blockchain-powered real estate ownership
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto text-blue-600">
                {step.icon}
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 -z-10" />
              )}
              <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
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
            Experience the future of real estate investment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}