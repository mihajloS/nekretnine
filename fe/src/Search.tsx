import {
  Button,
  createListCollection,
  Flex,
  Input,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  Tag,
  TagLabel,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

export const Search = () => {
  // State for selected cities
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  // Toggle city selection
  const handleCityToggle = (city: string) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  return (
    <VStack spacing={4} align="center" justify="center" minH="300px" p={6}>
      <Text fontSize="3xl" fontWeight="bold">
        Pronađite svoju idealnu nekretninu
      </Text>
      <SelectRoot multiple collection={gradovi} size="lg" maxWidth="400px">
        <SelectLabel>Izaberite lokacije</SelectLabel>
        <SelectTrigger>
          <SelectValueText placeholder="Grad" />
        </SelectTrigger>
        <SelectContent>
          {gradovi.items.map((grad) => (
            <SelectItem item={grad} key={grad.value}>
              {grad.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
      {/* <Flex wrap="wrap" justify="center" gap={2}>
        {selectedCities.map((city) => (
          <Tag key={city} colorScheme="orange" borderRadius="full">
            <TagLabel>{city}</TagLabel>
            <Button
              size="xs"
              ml={2}
              colorScheme="red"
              variant="ghost"
              onClick={() => handleCityToggle(city)}
            >
              ✕
            </Button>
          </Tag>
        ))}
      </Flex> */}
    </VStack>
  );
};

const gradovi = createListCollection({
  items: [
    { label: 'Obrenovac opština', value: 'Obrenovac opština' },
    { label: 'Obrenovac', value: 'Obrenovac' },
    { label: 'Skela', value: 'Skela' },
    { label: 'Krtinska', value: 'Krtinska' },
    { label: 'Zabrežje', value: 'Zabrežje' },
    { label: 'Brgulice', value: 'Brgulice' },
    { label: 'Urovci', value: 'Urovci' },
    { label: 'Barič', value: 'Barič' },
    { label: 'Ušće', value: 'Ušće' },
    { label: 'Ratari', value: 'Ratari' },
    { label: 'Zvečka', value: 'Zvečka' },
    { label: 'Belo Polje', value: 'Belo Polje' },
    { label: 'Mala Moštanica', value: 'Mala Moštanica' },
    { label: 'Mislođin', value: 'Mislođin' },
    { label: 'Jasenak', value: 'Jasenak' },
    { label: 'Grabovac', value: 'Grabovac' },
    { label: 'Dren', value: 'Dren' },
    { label: 'Orašac', value: 'Orašac' },
    { label: 'Veliko Polje', value: 'Veliko Polje' },
    { label: 'Stubline', value: 'Stubline' },
    { label: 'Draževac', value: 'Draževac' },
    { label: 'Baljevac', value: 'Baljevac' },
    { label: 'Vukičevica', value: 'Vukičevica' },
    { label: 'Trstenica', value: 'Trstenica' },
    { label: 'Piroman', value: 'Piroman' },
    { label: 'Konatice', value: 'Konatice' },
    { label: 'Ljubinić', value: 'Ljubinić' },
    { label: 'Brović', value: 'Brović' },
    { label: 'Poljane', value: 'Poljane' },
    { label: 'Rojkovac', value: 'Rojkovac' },
    { label: 'Stočnjak - Novo naselje', value: 'Stočnjak - Novo naselje' },
    { label: 'Rvati', value: 'Rvati' },
  ],
});
