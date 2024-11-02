import { FC, memo } from 'react';

interface DropdownSelectorProps {
  currency: string;
  handleChange(value: string): void;
  currencyNames: string[];
}

const DropdownSelector: FC<DropdownSelectorProps> = ({ currency, handleChange, currencyNames }) => {
  const handleCurrencySelect = (event: { currentTarget: { value: string } }) => {
    const currencyName = event.currentTarget.value;
    handleChange(currencyName);
  };

  return currencyNames.length > 0 ? (
    <select
      className="w-16 h-10 border-b-cyan-500 border-b-2"
      defaultValue={currency}
      onChange={handleCurrencySelect}
    >
      {currencyNames.map((currencyName: string) => (
        <option key={currencyName} value={currencyName}>
          {currencyName}
        </option>
      ))}
    </select>
  ) : null;
};

export default memo(DropdownSelector);
