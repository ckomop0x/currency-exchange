"use client"

import { useEffect, useState } from 'react';
import config from '../../config';
import { api, currencyConverter, inputFilter } from '@/helpers';

import CurrencySelector from "@/components/CurrencySelector";
import CurrencyLine from "@/components/CurrencyLine";
import Footer from "@/components/Footer";

const App = () => {
  const [seconds, setSeconds] = useState(null);
  const [rates, setRates] = useState(null);
  const [timestamp, setTimestamp] = useState(0);
  const [currencyOne, setCurrencyOne] = useState('EUR');
  const [currencyTwo, setCurrencyTwo] = useState('USD');
  const [currencyOneValue, setCurrencyOneValue] = useState('');
  const [currencyTwoValue, setCurrencyTwoValue] = useState('');
  const [error, setError] = useState({});

  const getRatesData = async () => {
    try {
      const response = await api({
        url: `https://openexchangerates.org/api/latest.json?app_id=${config.API_KEY}`
      });
      const dataFromApi = await response.json()
      setTimestamp(dataFromApi.timestamp);
      setRates(dataFromApi.rates);
    } catch (err: any) {
      setError({
        error: true,
        errorText: "Can't connect",
        message: `${err?.message || "Unknown error"}`
      });
    }
  }

  const changeCurrencyOneValue = (event: any) => {
    setCurrencyOneValue(inputFilter(event.target.value));
    setCurrencyTwoValue(
      // @ts-ignore
      currencyConverter(rates[currencyOne], rates[currencyTwo], inputFilter(event.target.value))
    );
  };

  const changeCurrencyTwoValue = (event: any) => {
    setCurrencyTwoValue(inputFilter(event.target.value));
    setCurrencyOneValue(
        // @ts-ignore
      currencyConverter(rates[currencyTwo], rates[currencyOne], inputFilter(event.target.value))
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
    void getRatesData()
  }, [])

  return (
    <div className="flex items-start content-center justify-center h-full sm:items-center">
        <main className="h-auto mx-auto shadow-none">
          <CurrencySelector
            currencyOne={currencyOne}
            currencyTwo={currencyTwo}
            rates={rates || []}
            handleChangeOne={handleChangeOne}
            handleChangeTwo={handleChangeTwo}
          />

          <CurrencyLine
            value={currencyOneValue}
            onChange={changeCurrencyOneValue}
          />

          <CurrencyLine
            value={currencyTwoValue}
            onChange={changeCurrencyTwoValue}
          />
          <Footer time={timestamp} />
        </main>
    </div>
  );
};

export default App;
