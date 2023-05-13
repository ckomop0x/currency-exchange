import { memo } from "react";

interface CurrencyLineProps {
  value: string;
  onChange(event: any): void;
}

const CurrencyLine = ({ value, onChange }: CurrencyLineProps): JSX.Element => {
  return (
    <input
      className="box-border mt-2 first-of-type:mr-10 last-of-type:ml-10 p-2 border-2 border-cyan-700"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default memo(CurrencyLine);
