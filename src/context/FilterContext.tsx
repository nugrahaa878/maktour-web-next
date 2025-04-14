'use client'
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Category = 'all' | 'umrah' | 'hajj' | 'special';
type Currency = 'USD' | 'IDR';

interface FilterContextType {
  category: Category;
  setCategory: (cat: Category) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [category, setCategory] = useState<Category>('all');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [isMounted, setIsMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setIsMounted(true);
    const savedCategory = localStorage.getItem('category') as Category;
    const savedCurrency = localStorage.getItem('currency') as Currency;

    if (savedCategory) {
      setCategory(savedCategory);
    }

    if (savedCurrency) {
      setCurrency(savedCurrency);
    }
  }, []);

  // Save to localStorage whenever filter changes
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('category', category);
      localStorage.setItem('currency', currency);
    }
  }, [category, currency, isMounted]);

  return (
    <FilterContext.Provider value={{ category, setCategory, currency, setCurrency }}>
      {children}
    </FilterContext.Provider>
  );
}; 