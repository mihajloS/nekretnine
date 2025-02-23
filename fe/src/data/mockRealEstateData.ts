
import { RealEstateDataSource, Property, Location } from '../types/realEstate';

const mockProperties: Property[] = [
  {
    id: "1",
    title: "Modern Apartment in Shibuya",
    price: 500000,
    area: "shibuya",
    street: "harajuku-st",
    city: "tokyo",
    squareMeters: 75,
    bedrooms: 2,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
  },
  {
    id: "2",
    title: "Luxury Condo in Shinjuku",
    price: 750000,
    area: "shinjuku",
    street: "omotesando",
    city: "tokyo",
    squareMeters: 100,
    bedrooms: 3,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    id: "3",
    title: "Riverside Apartment in Osaka",
    price: 450000,
    area: "umeda",
    street: "midosuji",
    city: "osaka",
    squareMeters: 85,
    bedrooms: 2,
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151"
  }
];

const mockCities: Location[] = [
  { value: "tokyo", label: "Tokyo" },
  { value: "osaka", label: "Osaka" },
];

const mockAreas: Location[] = [
  { value: "shibuya", label: "Shibuya" },
  { value: "shinjuku", label: "Shinjuku" },
  { value: "umeda", label: "Umeda" },
];

const mockStreets: Location[] = [
  { value: "harajuku-st", label: "Harajuku Street" },
  { value: "omotesando", label: "Omotesando" },
  { value: "midosuji", label: "Midosuji" },
];

export const mockRealEstateData: RealEstateDataSource = {
  getProperties: () => mockProperties,
  getCities: () => mockCities,
  getAreas: () => mockAreas,
  getStreets: () => mockStreets,
};
