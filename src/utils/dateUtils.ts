import {differenceInDays} from 'date-fns';

export const calculateDaysCount = (dateRange: { from: string; to: string } | null | undefined) => {
  if (dateRange && dateRange.to && dateRange.from) {
    return differenceInDays(new Date(dateRange.to), new Date(dateRange.from))
  }
  return 0
}
