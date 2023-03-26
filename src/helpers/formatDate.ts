import { format } from 'date-fns';

export default function formatDate(date: Date | number | string): string {
  return format(new Date(date), 'dd MMMM yyyy');
}
