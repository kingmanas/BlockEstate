import React from 'react';
import { Building2, Home, Newspaper, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WalletButton } from './WalletButton';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">BlockEstate</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/properties" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <Store className="h-5 w-5" />
              <span>Properties</span>
            </Link>
            <Link to="/marketplace" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <Building2 className="h-5 w-5" />
              <span>Marketplace</span>
            </Link>
            <Link to="/news" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <Newspaper className="h-5 w-5" />
              <span>News</span>
            </Link>
            <WalletButton />
          </div>
        </div>
      </div>
    </nav>
  );
}