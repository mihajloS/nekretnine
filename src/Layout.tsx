import { ColorModeButton } from '@/components/ui/color-mode';
import {
  Button,
  Container,
  Flex,
  HStack,
  Input,
  Tag,
  TagLabel,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

export const Layout = () => {
  // State for selected cities
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  // Toggle city selection
  const handleCityToggle = (city: string) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  return (
    <Container maxW="container.md" height={'100vh'}>
      {/* Navbar */}
      <Flex
        as="nav"
        justify="space-between"
        align="center"
        bg="blue.500"
        p={4}
        color="white"
      >
        <Text fontSize="xl" fontWeight="bold">
          Nekretnine.rs
        </Text>
        <HStack spacing={4}>
          <ColorModeButton />
          <Button colorScheme="orange">Registracija</Button>
        </HStack>
      </Flex>
      Hero Section
      <VStack spacing={4} align="center" justify="center" minH="300px" p={6}>
        <Text fontSize="3xl" fontWeight="bold">
          Pronađite svoju idealnu nekretninu
        </Text>
        Dropdown Menu for Cities
        <Input
          placeholder="Unesite lokaciju ili adresu"
          size="lg"
          maxW="400px"
        />
        Display Selected Cities
        <Flex wrap="wrap" justify="center" gap={2}>
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
        </Flex>
      </VStack>
    </Container>
  );
};
