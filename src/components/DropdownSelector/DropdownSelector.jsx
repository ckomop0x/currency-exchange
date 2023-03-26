import {memo} from "react";

const DropdownSelector = ({currency, handleChange, currencyNames}) => {
  const handleCurrencySelect = (event) => {
    const currencyName = event.currentTarget.value
    handleChange(currencyName);
  };

  return (
    <select
      className="w-full h-10"
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
  );
};

export default memo(DropdownSelector);
