"use client"

import React, { useEffect, useState } from 'react';
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
    } catch (err) {
      setError({
        error: true,
        errorText: "Can't connect",
        message: `${err?.message || "Unknown error"}`
      });
    }
  }

  const changeCurrencyOneValue = (event) => {
    setCurrencyOneValue(inputFilter(event.target.value));
    setCurrencyTwoValue(
      currencyConverter(rates[currencyOne], rates[currencyTwo], inputFilter(event.target.value))
    );
  };

  const changeCurrencyTwoValue = (event) => {
    setCurrencyTwoValue(inputFilter(event.target.value));
    setCurrencyOneValue(
      currencyConverter(rates[currencyTwo], rates[currencyOne], inputFilter(event.target.value))
    );
  };

  const handleChangeOne = (value) => {
    setCurrencyOne(value);
    setCurrencyOneValue('');
    setCurrencyTwoValue('');
  };

  const handleChangeTwo = (value) => {
    setCurrencyTwo(value);
    setCurrencyOneValue('');
    setCurrencyTwoValue('');
  };

  useEffect(() => {
    void getRatesData()
  }, [])

  return (
    <div className="flex items-start content-center justify-center h-full sm:items-center">
      {error && <div>{error.text}</div>}
      {rates && (
        <main className="max-w-600 h-auto mx-auto shadow-none">
          <CurrencySelector
            currencyOne={currencyOne}
            currencyTwo={currencyTwo}
            rates={rates}
            handleChangeOne={handleChangeOne}
            handleChangeTwo={handleChangeTwo}
          />
          <CurrencyLine
            floatingLabelText={currencyOne}
            value={currencyOneValue}
            onChange={changeCurrencyOneValue}
          />
          <CurrencyLine
            floatingLabelText={currencyTwo}
            value={currencyTwoValue}
            onChange={changeCurrencyTwoValue}
          />
          <Footer time={timestamp} />
        </main>
      )}
    </div>
  );
};

export default App;
