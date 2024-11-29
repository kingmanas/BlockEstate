import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { ListPropertyModal } from './ListPropertyModal';
import { useWallet } from '../context/WalletContext';

export function ListPropertyButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isConnected } = useWallet();

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
      >
        <Plus className="h-6 w-6" />
        <span className="hidden md:inline">List Property</span>
      </button>

      <ListPropertyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        isWalletConnected={isConnected}
      />
    </>
  );
}