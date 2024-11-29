import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  source: string;
}

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{article.date}</span>
          <span className="mx-2">•</span>
          <span>{article.source}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
        <p className="text-gray-600">{article.summary}</p>
        <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700">
          Read More →
        </button>
      </div>
    </motion.div>
  );
}