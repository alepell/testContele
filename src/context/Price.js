import React, { createContext, useContext, useState } from 'react';

export const PriceContext = createContext();

export default function PriceProvider({ children }) {
  const [price, setPrice] = useState('');
  const [dayDate, setDayDate] = useState('');
  return (
    <PriceContext.Provider value={{
      price,
      setPrice,
      dayDate,
      setDayDate
    }}>
      {children}
    </PriceContext.Provider>
  )
}

export function usePrice() {
  const context = useContext(PriceContext)
  const { price, setPrice, dayDate, setDayDate } = context;
  return { price, setPrice, dayDate, setDayDate }
}