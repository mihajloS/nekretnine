export interface Property {
  id: string;
  title: string;
  price: number;
  area: string;
  street: string;
  city: string;
  squareMeters: number;
  bedrooms: number;
  image: string;
}

export interface Location {
  value: string;
  label: string;
}

export interface RealEstateDataSource {
  getProperties: () => Property[];
  getCities: () => Promise<Location[]>;
  getAreas: (city?: string) => Promise<Location[]>;
  getStreets: () => Location[];
}
