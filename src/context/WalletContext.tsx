import React, { createContext, useContext, useState, useEffect } from 'react';
import { createConfig, WagmiProvider, useAccount, useConnect, useDisconnect } from 'wagmi';
import { mainnet } from 'viem/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createPublicClient, http } from 'viem';
import { injected } from 'wagmi/connectors';

const queryClient = new QueryClient();

const config = createConfig({
  connectors: [injected()],
  chains: [mainnet],
  client: ({ chain }) => 
    createPublicClient({
      chain,
      transport: http(),
    }),
});

interface WalletContextType {
  isConnected: boolean;
  address: string | undefined;
  connect: () => void;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextType>({
  isConnected: false,
  address: undefined,
  connect: () => {},
  disconnect: () => {},
});

export function WalletProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WalletProviderInner>{children}</WalletProviderInner>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

function WalletProviderInner({ children }: { children: React.ReactNode }) {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const [hasMetaMask, setHasMetaMask] = useState(false);

  useEffect(() => {
    setHasMetaMask(typeof window !== 'undefined' && typeof window.ethereum !== 'undefined');
  }, []);

  const handleConnect = async () => {
    try {
      if (!hasMetaMask) {
        window.open('https://metamask.io/download/', '_blank');
        return;
      }

      const connector = connectors[0];
      if (connector) {
        await connect({ connector });
      }
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };

  const value = {
    isConnected,
    address,
    connect: handleConnect,
    disconnect: () => disconnect(),
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => useContext(WalletContext);