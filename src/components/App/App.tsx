"use client";

import { useEffect, useState } from "react";

import { currencyConverter, inputFilter } from "@/helpers";

import CurrencySelector from "@/components/CurrencySelector";
import CurrencyLine from "@/components/CurrencyLine";
import Footer from "@/components/Footer";
import { useRates } from "@/hooks/useRates";

const App = () => {
  const { timestamp, rates, getRatesData } = useRates();
  const [currencyOne, setCurrencyOne] = useState("EUR");
  const [currencyTwo, setCurrencyTwo] = useState("USD");
  const [currencyOneValue, setCurrencyOneValue] = useState("");
  const [currencyTwoValue, setCurrencyTwoValue] = useState("");

  const changeCurrencyOneValue = (event: any) => {
    const inputValue = parseFloat(event.target.value);
    const rateCurrencyOne = rates ? rates[currencyOne] : 1;
    const rateCurrencyTwo = rates ? rates[currencyTwo] : 1;

    if (!isNaN(inputValue)) {
      setCurrencyOneValue(inputValue.toString());
    }

    setCurrencyTwoValue(
      currencyConverter(
        rateCurrencyOne,
        rateCurrencyTwo,
        parseFloat(inputFilter(inputValue.toString()))
      ).toString()
    );
  };

  const changeCurrencyTwoValue = (event: any) => {
    setCurrencyTwoValue(inputFilter(event.target.value));
    setCurrencyOneValue(
      // @ts-ignore
      currencyConverter(
        rates[currencyTwo],
        rates[currencyOne],
        Number(inputFilter(event.target.value))
      )
    );
  };

  const handleChangeOne = (value: any) => {
    setCurrencyOne(value);
    setCurrencyOneValue("");
    setCurrencyTwoValue("");
  };

  const handleChangeTwo = (value: any) => {
    setCurrencyTwo(value);
    setCurrencyOneValue("");
    setCurrencyTwoValue("");
  };

  useEffect(() => {
    void getRatesData();
  }, [getRatesData]);

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
        <div className="w-auto m-auto text-center flex items-center content-center content-between">
          <CurrencyLine
              value={currencyOneValue}
              onChange={changeCurrencyOneValue}
          />

          <CurrencyLine
              value={currencyTwoValue}
              onChange={changeCurrencyTwoValue}
          />
        </div>

        <Footer time={timestamp} />
      </main>
    </div>
  );
};

export default App;
