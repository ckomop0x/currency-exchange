import { pow } from './index';

/**
 * Converts a value from one currency to another.
 *
 * @param {number} currencyOne - The conversion rate of currency one. Defaults to 1.
 * @param {number} currencyTwo - The conversion rate of currency two. Defaults to 1.
 * @param {number} value - The value to convert. Defaults to 1.
 * @param {number} floor - The decimal places to round the result to. Defaults to 2.
 * @returns {number} - The converted value.
 */
export const currencyConverter = (currencyOne = 1, currencyTwo = 1, value = 1, floor = 2) => (
  (Math.floor((value * (currencyTwo / currencyOne)) * pow(10, floor))) / pow(10, floor)
);
