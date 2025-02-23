import { Location, RealEstateDataSource } from '../types/realEstate';

export const realRealEstateData: RealEstateDataSource = {
  getProperties: () => {
    return [];
  },
  getCities: async (): Promise<Location[]> => {
    const data = await fetch('http://localhost:3000/locations/getAllCities');
    const d = (await data.json()).map((location: any) => ({
      lablel: location.opstina_ime_lat,
      value: location.opstina_ime_lat,
    }));
    return d;
  },
  getAreas: async (city?: string) => {
    if (!city) {
      return [];
    }
    const data = await fetch(
      `http://localhost:3000/locations/getAreasPerCity?city=${city}`
    );
    const d = (await data.json()).map((location: any) => ({
      lablel: location.naselje_ime_lat,
      value: location.naselje_ime_lat,
    }));
    console.log('d', d);
    return d;
    // throw new Error('Not implemented');
  },
  getStreets: () => {
    // Implement your real data fetching logic here
    return [];
    // throw new Error('Not implemented');
  },
};
