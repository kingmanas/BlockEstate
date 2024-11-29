import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Properties } from './pages/Properties';
import { Marketplace } from './pages/Marketplace';
import { News } from './pages/News';
import { WalletProvider } from './context/WalletContext';

export default function App() {
  return (
    <WalletProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </Router>
    </WalletProvider>
  );
}