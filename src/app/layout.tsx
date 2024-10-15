'use client';
import './globals.css';

import '@rainbow-me/rainbowkit/styles.css';

import {
  ConnectButton,
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { sepolia, storyTestnet } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';

const config = getDefaultConfig({
  appName: 'Minting App',
  projectId: '21e02614a7ae1bdaa672c132396fd9ff',
  chains: [sepolia, storyTestnet],
  ssr: true,
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en">
      <body>
        {mounted && (
          <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
              <RainbowKitProvider>
                <header className="p-10 flex">
                  <ConnectButton />
                </header>
                {children}
              </RainbowKitProvider>
            </QueryClientProvider>
          </WagmiProvider>
        )}
      </body>
    </html>
  );
}
