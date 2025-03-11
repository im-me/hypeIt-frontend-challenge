import { formatStartEndDates } from '../helpers';

describe('formatStartEndDates', () => {
  it('should return null if no startDate is provided', () => {
    const result = formatStartEndDates(undefined, '2025-03-01');

    expect(result).toBeNull();
  });

  it('should return null if startDate is an empty string', () => {
    const result = formatStartEndDates('', '2025-03-01');

    expect(result).toBeNull();
  });

  it('should return formatted start date if only startDate is given', () => {
    const startDate = '2025-02-28';
    const formattedStartDate = '28.02.2025';

    const result = formatStartEndDates(startDate, undefined);

    expect(result).toBe(formattedStartDate);
  });

  it('should return formatted start and end dates if both are given', () => {
    const startDate = '2025-02-28';
    const endDate = '2025-03-01';
    const formattedStartDate = '28.02.2025';
    const formattedEndDate = '01.03.2025';

    const result = formatStartEndDates(startDate, endDate);

    expect(result).toBe(`${formattedStartDate} - ${formattedEndDate}`);
  });

  it('should return null if both startDate and endDate are not given', () => {
    const result = formatStartEndDates(null, null);

    expect(result).toBeNull();
  });
});
