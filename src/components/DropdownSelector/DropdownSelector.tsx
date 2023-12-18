import { memo } from "react";

const DropdownSelector = ({ currency, handleChange, currencyNames }) => {
  const handleCurrencySelect = (event) => {
    const currencyName = event.currentTarget.value
    handleChange(currencyName);
  };

  return currencyNames.length > 0 ? (
      <select
        className="w-full h-10 border-b-cyan-500 border-b-2"
        defaultValue={currency}
        onChange={handleCurrencySelect}
      >
      {currencyNames.map((currencyName) => (
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
