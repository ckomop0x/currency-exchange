import { format } from 'date-fns';

export default function formatDate(
  date: Date | number | string,
  dateFormat = 'dd MMMM yyyy',
): string {
  return format(new Date(date), dateFormat);
}
