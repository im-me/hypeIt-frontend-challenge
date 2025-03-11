import { LocationType } from 'src/api/generated/apiSchemas';

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return 'Invalid date';
  }

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export const formatStartEndDates = (
  startDate?: string | null,
  endDate?: string | null
): string | null => {
  if (!startDate) {
    return null;
  }

  const formattedStartDate = formatDate(startDate);

  const formattedEndDate = endDate ? formatDate(endDate) : null;

  return [formattedStartDate, formattedEndDate].join(' - ');
};

export function formatLocation(location?: LocationType | null): string | null {
  if (!location) {
    return null;
  }

  const locationParts: string[] = [];

  if (location.name) {
    locationParts.push(location.name);
  }

  if (location.city) {
    locationParts.push(location.city);
  }

  if (location.country) {
    locationParts.push(location.country);
  }

  if (locationParts.length === 0) {
    return null;
  }

  return locationParts.join(', ');
}
