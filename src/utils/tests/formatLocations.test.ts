import { LocationType } from 'src/api/generated/apiSchemas';
import { formatLocation } from '../helpers';

describe('formatLocation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return null when location is not given', () => {
    expect(formatLocation(null)).toBeNull();

    expect(formatLocation(undefined)).toBeNull();
  });

  it('should return null if no location parts are given', () => {
    const location: LocationType = { name: '', city: '', country: '' };

    expect(formatLocation(location)).toBeNull();
  });

  it('should return formatted location with name, city, and country', () => {
    const location: LocationType = {
      name: 'Festival 1',
      city: 'Karlsruhe',
      country: 'Germany',
    };

    expect(formatLocation(location)).toBe('Festival 1, Karlsruhe, Germany');
  });

  it('should return formatted location with only name and city', () => {
    const location: LocationType = {
      name: 'Festival 2',
      city: 'Berlin',
      country: '',
    };

    expect(formatLocation(location)).toBe('Festival 2, Berlin');
  });

  it('should return formatted location with only name', () => {
    const location: LocationType = {
      name: 'Festival 3',
      city: '',
      country: '',
    };

    expect(formatLocation(location)).toBe('Festival 3');
  });

  it('should return formatted location with only city and country', () => {
    const location: LocationType = {
      name: '',
      city: 'Berlin',
      country: 'Germany',
    };

    expect(formatLocation(location)).toBe('Berlin, Germany');
  });
});
