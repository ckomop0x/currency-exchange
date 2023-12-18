import DropdownSelector from '../DropdownSelector';
import { currencyConverter } from '../../helpers';
import { memo } from "react";

const CurrencySelector = ({
  currencyOne,
  currencyTwo,
  handleChangeOne,
  handleChangeTwo,
  rates
}) => {
  return (
    <div className="w-auto m-auto text-center flex items-center content-center content-between">
      <DropdownSelector
        currencyNames={Object.keys(rates)}
        currency={currencyOne}
        handleChange={handleChangeOne}
      />
      <span className="h-auto ml-3 mr-3">
        {currencyConverter(rates[currencyOne], rates[currencyTwo], 1, 4)}
      </span>
      <DropdownSelector
        currencyNames={Object.keys(rates)}
        currency={currencyTwo}
        handleChange={handleChangeTwo}
      />
    </div>
  );
};

export default memo(CurrencySelector);
