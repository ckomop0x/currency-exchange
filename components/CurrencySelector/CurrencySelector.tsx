import { memo } from 'react';

import DropdownSelector from '../DropdownSelector';
import CurrencyLine from '../CurrencyLine';
import { currencyConverter, inputFilter } from '../../helpers';

interface CurrencySelectorProps {
  currencyOne: string;
  currencyOneValue: string;
  currencyTwo: string;
  currencyTwoValue: string;
  rates: Record<string, number>;
  setCurrencyOne(value: string): void;
  setCurrencyTwo(value: string): void;
  setCurrencyOneValue(value: string): void;
  setCurrencyTwoValue(value: string): void;
}

const CurrencySelector = ({
  currencyOne,
  currencyOneValue,
  currencyTwo,
  currencyTwoValue,
  setCurrencyOne,
  setCurrencyTwo,
  setCurrencyOneValue,
  setCurrencyTwoValue,
  rates,
}: CurrencySelectorProps) => {
  const handleChangeTwo = (value: string) => {
    setCurrencyTwo(value);
    setCurrencyOneValue('');
    setCurrencyTwoValue('');
  };

  const handleChangeOne = (value: string) => {
    setCurrencyOne(value);
    setCurrencyOneValue('');
    setCurrencyTwoValue('');
  };

  const changeCurrencyTwoValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrencyTwoValue(inputFilter(event.target.value));
    setCurrencyOneValue(
      currencyConverter(
        rates[currencyTwo],
        rates[currencyOne],
        parseFloat(inputFilter(event.target.value)),
      ).toString(),
    );
  };

  const changeCurrencyOneValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrencyOneValue(inputFilter(event.target.value));
    setCurrencyTwoValue(
      currencyConverter(
        rates[currencyOne],
        rates[currencyTwo],
        parseFloat(inputFilter(inputFilter(event.target.value))),
      ).toString(),
    );
  };

  return (
    <div className="w-auto m-auto text-center flex flex-col items-center content-center content-between gap-4">
      <div className="flex flex-row text-center items-center content-center w-full">
        <DropdownSelector
          currencyNames={Object.keys(rates)}
          currency={currencyOne}
          handleChange={handleChangeOne}
        />
        <CurrencyLine
          value={currencyOneValue.toString()}
          onChange={changeCurrencyOneValue}
        />
      </div>

      <div className="flex flex-row text-center items-center content-center w-full">
        <DropdownSelector
          currencyNames={Object.keys(rates)}
          currency={currencyTwo}
          handleChange={handleChangeTwo}
        />
        <CurrencyLine
          value={currencyTwoValue.toString()}
          onChange={changeCurrencyTwoValue}
        />
      </div>
    </div>
  );
};

export default memo(CurrencySelector);
