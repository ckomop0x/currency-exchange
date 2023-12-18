import { memo } from "react";

// @ts-ignore
const DropdownSelector = ({ currency, handleChange, currencyNames }) => {
  const handleCurrencySelect = (event: { currentTarget: { value: any; }; }) => {
    const currencyName = event.currentTarget.value
    handleChange(currencyName);
  };

  return currencyNames.length > 0 ? (
      <select
        className="w-full h-10 border-b-cyan-500 border-b-2"
        defaultValue={currency}
        onChange={handleCurrencySelect}
      >
      {currencyNames.map((currencyName: string) => (
        <option
          key={currencyName}
          value={currencyName}
        >
          {currencyName}
        </option>
      ))}
    </select>
  ) : null;
};

export default memo(DropdownSelector);
