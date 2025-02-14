import { FC } from 'react';
import { currencyConverter } from '../../helpers';

interface RatesProps {
  currencyOne: string;
  currencyTwo: string;
  rates: Record<string, number>;
}

const Rates: FC<RatesProps> = ({ currencyOne, currencyTwo, rates }) => {
  return (
    <div className="h-auto mt-4">
      {rates ? (
        <>
          1 {currencyOne} ={' '}
          {currencyConverter(rates[currencyOne], rates[currencyTwo], 1, 4)}{' '}
          {currencyTwo}
        </>
      ) : null}
    </div>
  );
};

export default Rates;
