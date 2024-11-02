'use client';

import { useEffect, useState } from 'react';

import CurrencySelector from '@/components/CurrencySelector';
import Footer from '@/components/Footer';
import { useRates } from '@/hooks/useRates';
import Rates from '@/components/Rates/Rates';

const App = () => {
  const { timestamp, rates, getRatesData } = useRates();
  const [currencyOne, setCurrencyOne] = useState('EUR');
  const [currencyTwo, setCurrencyTwo] = useState('USD');
  const [currencyOneValue, setCurrencyOneValue] = useState('');
  const [currencyTwoValue, setCurrencyTwoValue] = useState('');

  useEffect(() => {
    void getRatesData();
  }, [getRatesData]);

  return (
    <div className="flex items-start content-center justify-center h-full sm:items-center mt-8 w-100%">
      <main className="h-auto mx-auto shadow-none">
        <CurrencySelector
          currencyOne={currencyOne}
          currencyTwo={currencyTwo}
          rates={rates || []}
          currencyOneValue={currencyOneValue}
          currencyTwoValue={currencyTwoValue}
          setCurrencyOne={setCurrencyOne}
          setCurrencyTwo={setCurrencyTwo}
          setCurrencyOneValue={setCurrencyOneValue}
          setCurrencyTwoValue={setCurrencyTwoValue}
        />
        <Rates
          rates={rates}
          currencyOne={currencyOne}
          currencyTwo={currencyTwo}
        />
        <Footer time={timestamp} />
      </main>
    </div>
  );
};

export default App;
