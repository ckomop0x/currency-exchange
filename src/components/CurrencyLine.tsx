import { memo } from 'react';

interface CurrencyLineProps {
  value: string;
  onChange(event: unknown): void;
}

const CurrencyLine = ({ value, onChange }: CurrencyLineProps): JSX.Element => {
  return (
    <input
      className="p-2 h-10 border-b-cyan-500 border-b-2 w-full text-right"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default memo(CurrencyLine);
