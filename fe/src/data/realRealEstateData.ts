import { Location, RealEstateDataSource } from '../types/realEstate';

export const realRealEstateData: RealEstateDataSource = {
  getProperties: async () => {
    return [];
  },
  getCities: async (): Promise<Location[]> => {
    const data = await fetch('http://localhost:3000/locations/getAllCities');
    const d = (await data.json()).map((location: any) => ({
      label: location.opstina_ime_lat,
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
    return (await data.json()).map((location: any) => ({
      label: location.naselje_ime_lat,
      value: location.naselje_ime_lat,
    }));
  },
  getStreets: async (city: string, area?: string) => {
    let uri = `http://localhost:3000/locations/getStreets?city=${city}`;
    if (area) {
      uri += `&area=${area}`;
    }
    const data = await fetch(uri);
    return (await data.json()).map((location: any) => ({
      label: `${location.ulica_ime_lat}`,
      value: location.ulica_ime_lat,
    }));
  },
};
