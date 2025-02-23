import React, { useState, useMemo, useEffect } from 'react';
import DropdownSelector from '@/components/DropdownSelector';
import { mockRealEstateData } from '@/data/mockRealEstateData';
import { realRealEstateData } from '@/data/realRealEstateData'; // Uncomment to use real data
import type { Property } from '@/types/realEstate';
import type { Location } from '@/types/realEstate';

// Use mockRealEstateData for development, switch to realRealEstateData for production
const dataSource = realRealEstateData;

const RealEstate = () => {
  const [selectedCity, setSelectedCity] = useState<string | undefined>();
  const [selectedArea, setSelectedArea] = useState<Location | undefined>();
  const [selectedStreet, setSelectedStreet] = useState('');
  const [cities, setCities] = useState<Location[]>([]);
  const [areas, setAreas] = useState<Location[]>([]);
  const [streets, setStreets] = useState<Location[]>([]);
  const [allProperties, setAllProperties] = useState<Property[]>([]);

  // Fetch data from the data source
  useEffect(() => {
    const fetchData = async () => {
      const citiesData = await dataSource.getCities();
      console.log('citiesData', citiesData);
      const areasData = await dataSource.getAreas(selectedCity);
      const streetsData = dataSource.getStreets();
      const propertiesData = dataSource.getProperties();

      setCities(citiesData);
      setAreas(areasData);
      setStreets(streetsData);
      setAllProperties(propertiesData);
    };

    fetchData();
  }, []);

  // Filter properties based on selection
  const filteredProperties = useMemo(() => {
    return allProperties.filter((property) => {
      const cityMatch = !selectedCity || property.city === selectedCity;
      const areaMatch = !selectedArea || property.area === selectedArea;
      const streetMatch = !selectedStreet || property.street === selectedStreet;
      return cityMatch && areaMatch && streetMatch;
    });
  }, [selectedCity, selectedArea, selectedStreet, allProperties]);

  console.log('cities', cities);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light mb-2 tracking-tight">
              Real Estate Search
            </h1>
            <p className="text-gray-600">Find your perfect property</p>
          </div>

          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="space-y-4">
              <div className="animate-fade-in">
                <DropdownSelector
                  options={cities}
                  value={selectedCity}
                  onChange={(value) => {
                    console.log('value', value);
                    setSelectedCity(value);
                  }}
                  placeholder="Select a city"
                  virtualized
                />
              </div>

              {selectedCity && (
                <>
                  <div className="animate-fade-in">
                    <DropdownSelector
                      options={areas}
                      value={selectedArea}
                      onChange={setSelectedArea}
                      placeholder="Select an area (optional)"
                      disabled={!selectedCity}
                    />
                  </div>

                  <div className="animate-fade-in">
                    <DropdownSelector
                      options={streets}
                      value={selectedStreet}
                      onChange={setSelectedStreet}
                      placeholder="Select a street (optional)"
                      disabled={!selectedCity}
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {selectedCity && (
            <div className="mt-8 animate-fade-in">
              {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProperties.map((property) => (
                    <div
                      key={property.id}
                      className="bg-white/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="aspect-video relative overflow-hidden bg-gray-100">
                        <img
                          src={property.image}
                          alt={property.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {property.title}
                        </h3>
                        <p className="text-2xl font-bold text-gray-900 mb-2">
                          ${property.price.toLocaleString()}
                        </p>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>{property.squareMeters}m²</span>
                          <span>{property.bedrooms} Bedrooms</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-lg text-center">
                  <div className="text-gray-500 mb-2">No properties found</div>
                  <p className="text-sm text-gray-400">
                    Try adjusting your search criteria to find more properties
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RealEstate;
