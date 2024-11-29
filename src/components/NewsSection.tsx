import React from 'react';
import { motion } from 'framer-motion';
import { NewsCard } from './NewsCard';

const newsArticles = [
  {
    id: '1',
    title: 'Blockchain Technology Revolutionizing Real Estate Transactions',
    summary: 'How smart contracts are making property transactions faster, safer, and more transparent than ever before.',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    source: 'BlockEstate News'
  },
  {
    id: '2',
    title: 'Global Real Estate Market Embraces Tokenization',
    summary: 'Major real estate firms are adopting blockchain technology for property tokenization, enabling fractional ownership.',
    date: 'March 14, 2024',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    source: 'Crypto Real Estate Today'
  },
  {
    id: '3',
    title: 'New Regulations Support Digital Real Estate Transactions',
    summary: 'Government agencies worldwide are creating frameworks to support blockchain-based property transactions.',
    date: 'March 13, 2024',
    image: 'https://images.unsplash.com/photo-1542879379-a41769a92a3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    source: 'Real Estate Weekly'
  },
  {
    id: '4',
    title: 'NFT-Based Property Deeds Gain Traction',
    summary: 'Leading real estate developers are now issuing property deeds as NFTs, providing immutable proof of ownership.',
    date: 'March 12, 2024',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    source: 'Digital Assets Report'
  },
  {
    id: '5',
    title: 'Real Estate Investment Goes Digital',
    summary: 'Small investors can now own fractions of premium properties through blockchain-based tokenization platforms.',
    date: 'March 11, 2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    source: 'Investment Weekly'
  },
  {
    id: '6',
    title: 'Smart Contracts Reduce Property Transaction Times',
    summary: 'New study shows blockchain-based real estate transactions are 80% faster than traditional methods.',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    source: 'Tech & Property Journal'
  }
];

export function NewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest Real Estate News
          </h2>
          <p className="text-xl text-gray-600">
            Stay updated with the latest trends in blockchain real estate
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.slice(0, 3).map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}