import { useEffect, useState } from 'react';
import { getRatesData } from '../server/actions/getRatesData';

export const useRates = () => {
  const [timestamp, setTimestamp] = useState<number | null>(null);
  const [rates, setRates] = useState<Record<string, number>>({});
  const [error, setError] = useState<{
    error: boolean;
    errorText: string;
    message: string;
  } | null>(null);

  const getRates = async () => {
    const ratesFromApi = await getRatesData();
    return ratesFromApi;
  };

  useEffect(() => {
    const fetchRates = async () => {
      const apiData = await getRatesData();

      setRates(apiData.rates);
      setTimestamp(apiData.timestamp);
    };
    fetchRates();
  }, [getRatesData]);

  return { timestamp, rates, error };
};
