'use client';

import { useEffect, useState } from 'react';

import { currencyConverter, inputFilter } from '@/helpers';

import CurrencySelector from '@/components/CurrencySelector';
import CurrencyLine from '@/components/CurrencyLine';
import Footer from '@/components/Footer';
import { useRates } from '@/hooks/useRates';

const App = () => {
  const { timestamp, rates, getRatesData } = useRates();
  const [currencyOne, setCurrencyOne] = useState('EUR');
  const [currencyTwo, setCurrencyTwo] = useState('USD');
  const [currencyOneValue, setCurrencyOneValue] = useState('');
  const [currencyTwoValue, setCurrencyTwoValue] = useState('');

  const changeCurrencyOneValue = (event: any) => {
    setCurrencyOneValue(inputFilter(event.target.value));
    setCurrencyTwoValue(
      // @ts-ignore
      currencyConverter(
        rates[currencyOne],
        rates[currencyTwo],
        parseFloat(inputFilter(inputFilter(event.target.value))),
      ),
    );
  };

  const changeCurrencyTwoValue = (event: any) => {
    setCurrencyTwoValue(inputFilter(event.target.value));
    setCurrencyOneValue(
      // @ts-ignore
      currencyConverter(
        rates[currencyTwo],
        rates[currencyOne],
        parseFloat(inputFilter(event.target.value)),
      ),
    );
  };

  const handleChangeOne = (value: any) => {
    setCurrencyOne(value);
    setCurrencyOneValue('');
    setCurrencyTwoValue('');
  };

  const handleChangeTwo = (value: any) => {
    setCurrencyTwo(value);
    setCurrencyOneValue('');
    setCurrencyTwoValue('');
  };

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
          handleChangeOne={handleChangeOne}
          handleChangeTwo={handleChangeTwo}
          currencyOneValue={currencyOneValue}
          changeCurrencyOneValue={changeCurrencyOneValue}
          currencyTwoValue={currencyTwoValue}
          changeCurrencyTwoValue={changeCurrencyTwoValue}
        />

        <div className="h-auto mt-4">
          {rates ? (
            <>
              1 {currencyOne} ={' '}
              {currencyConverter(rates[currencyOne], rates[currencyTwo], 1, 4)}{' '}
              {currencyTwo}
            </>
          ) : null}
        </div>
        <Footer time={timestamp} />
      </main>
    </div>
  );
};

export default App;
