
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { PortfolioData } from '../types';
import { initialData } from '../data/portfolioData';

interface PortfolioDataContextType {
  data: PortfolioData;
  setData: React.Dispatch<React.SetStateAction<PortfolioData>>;
}

const PortfolioDataContext = createContext<PortfolioDataContextType | undefined>(undefined);
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
const PORTFOLIO_ENDPOINT = import.meta.env.VITE_PORTFOLIO_ENDPOINT || '/api/portfolio';

export const PortfolioDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(initialData);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const base = API_BASE_URL.replace(/\/$/, '');
        const endpoint = PORTFOLIO_ENDPOINT.startsWith('/') ? PORTFOLIO_ENDPOINT : `/${PORTFOLIO_ENDPOINT}`;
        const response = await fetch(`${base}${endpoint}`);
        if (!response.ok) throw new Error(`API error ${response.status}`);
        const payload = await response.json();
        // Accept either { data: PortfolioData } or the raw PortfolioData shape
        setData(payload.data ?? payload);
      } catch (error) {
        console.error('Failed to fetch portfolio data from Laravel API', error);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <PortfolioDataContext.Provider value={{ data, setData }}>
      {children}
    </PortfolioDataContext.Provider>
  );
};

export const usePortfolioData = (): PortfolioDataContextType => {
  const context = useContext(PortfolioDataContext);
  if (!context) {
    throw new Error('usePortfolioData must be used within a PortfolioDataProvider');
  }
  return context;
};
