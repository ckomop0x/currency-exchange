'use server';
import { api } from '../../helpers';

export const getRatesData = async () => {
  const apiKey = process.env.NEXT_PUBLIC_OPEN_EXCHANGE_RATES_API_KEY;

  try {
    const response = await api({
      url: `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`,
    });

    const dataFromApi = await response.json();
    return dataFromApi;
  } catch {
    return [];
  }
};
