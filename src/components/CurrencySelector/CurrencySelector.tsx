import DropdownSelector from '../DropdownSelector';
import { currencyConverter } from '../../helpers';
import { memo } from 'react';
import CurrencyLine from '../CurrencyLine';

interface CurrencySelectorProps {
  currencyOne: string;
  currencyOneValue: string;
  changeCurrencyOneValue: (value: number) => void;
  currencyTwo: string;
  currencyTwoValue: string;
  changeCurrencyTwoValue: (value: number) => void;
  handleChangeOne: (currency: string) => void;
  handleChangeTwo: (currency: string) => void;
  rates: Record<string, number>;
}

const CurrencySelector = ({
  currencyOne,
  currencyOneValue,
  changeCurrencyOneValue,
  currencyTwo,
  currencyTwoValue,
  changeCurrencyTwoValue,
  handleChangeOne,
  handleChangeTwo,
  rates,
}: CurrencySelectorProps) => {
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
