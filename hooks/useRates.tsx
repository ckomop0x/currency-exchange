import {useCallback, useState} from "react";
import config from "../config";
import {api} from "../helpers";

export const useRates = () => {
  const [timestamp, setTimestamp] = useState<number | null>(null);
  const [rates, setRates] = useState<Record<string, number>>({});
  const [error, setError] = useState<{
    error: boolean;
    errorText: string;
    message: string;
  } | null>(null);

  const getRatesData = useCallback(async () => {
    try {
      const response = await api({
        url: `https://openexchangerates.org/api/latest.json?app_id=${config.API_KEY}`,
      });
      const dataFromApi = await response.json();
      setTimestamp(dataFromApi.timestamp);
      setRates(dataFromApi.rates);
    } catch {
      setError({
        error: true,
        errorText: "Can't connect",
        message: "Unknown error",
      });
    }
  }, []);

  return { timestamp, rates, error, getRatesData };
};
