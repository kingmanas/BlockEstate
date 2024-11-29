import React from 'react';
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';
import { useWallet } from '../context/WalletContext';

export function WalletButton() {
  const { isConnected, address, connect, disconnect } = useWallet();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={isConnected ? disconnect : connect}
      className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
      <Wallet className="h-5 w-5" />
      <span>
        {isConnected
          ? `${address?.slice(0, 6)}...${address?.slice(-4)}`
          : 'Connect Wallet'}
      </span>
    </motion.button>
  );
}