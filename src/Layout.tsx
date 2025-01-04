import {
  Button,
  Container,
  Flex,
  HStack,
  Input,
  Tag,
  TagLabel,
  Text,
  Theme,
  VStack,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';

export const Layout = () => {
  // State for selected cities
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const themeContext = useContext(ThemeContext);

  // Toggle city selection
  const handleCityToggle = (city: string) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  // Dark/Light Mode Toggle
  const toggleColorMode = () => {
    themeContext.toggleTheme();
  };

  return (
    <Theme appearance={themeContext.theme}>
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
            <Button
              variant="outline"
              colorScheme="whiteAlpha"
              onClick={toggleColorMode}
            >
              {themeContext.theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </Button>
            <Button colorScheme="orange">Registracija</Button>
          </HStack>
        </Flex>
        Hero Section
        <VStack spacing={4} align="center" justify="center" minH="300px" p={6}>
          <Text fontSize="3xl" fontWeight="bold">
            Pronađite svoju idealnu nekretninu
          </Text>
          Dropdown Menu for Cities
          {/* <Menu>
            <MenuButton as={Button} colorScheme="blue">
              Izaberite gradove
            </MenuButton>
            <MenuList>
              {['Beograd', 'Novi Sad', 'Niš', 'Kragujevac', 'Subotica'].map((city) => (
                <MenuItem key={city} onClick={() => handleCityToggle(city)}>
                  <Checkbox isChecked={selectedCities.includes(city)}>{city}</Checkbox>
                </MenuItem>
              ))}
            </MenuList>
          </Menu> */}
          {/* Input Field */}
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
    </Theme>
  );
};
