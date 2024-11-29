import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle, Check } from 'lucide-react';
import { useWallet } from '../context/WalletContext';

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyPrice: string;
  propertyTitle: string;
}

export function TransactionModal({ isOpen, onClose, propertyPrice, propertyTitle }: TransactionModalProps) {
  const { isConnected, address } = useWallet();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg mx-4 z-50"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>

            <h2 className="text-2xl font-bold mb-4">Confirm Purchase</h2>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg">{propertyTitle}</h3>
                <p className="text-blue-600 font-bold">{propertyPrice} ETH</p>
              </div>

              {!isConnected ? (
                <div className="flex items-center text-red-600 bg-red-50 p-4 rounded-lg">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  <p>Please connect your wallet to proceed with the purchase</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">From</p>
                    <p className="font-mono">{address}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Estimated Gas Fee</p>
                    <p className="font-mono">0.005 ETH</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Total Amount</p>
                    <p className="font-mono font-bold">
                      {(parseFloat(propertyPrice) + 0.005).toFixed(3)} ETH
                    </p>
                  </div>

                  <button
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                    onClick={() => {
                      // Here you would integrate with your smart contract
                      console.log('Processing transaction...');
                    }}
                  >
                    <Check className="h-5 w-5" />
                    <span>Confirm Transaction</span>
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}