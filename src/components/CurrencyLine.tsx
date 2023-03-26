import { FC, memo } from "react";

interface CurrencyLineProps {
  value: string;
  onChange(): void;
}

const CurrencyLine: FC<CurrencyLineProps> = ({ value, onChange }) => {
  return (
    <input
      className="box-border m-2"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default memo(CurrencyLine);
