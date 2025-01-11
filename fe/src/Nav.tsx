import { ColorModeButton } from '@/components/ui/color-mode';
import {
  Button,
  Flex,
  HStack,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  Text,
  VStack,
} from '@chakra-ui/react';
import { HiMenu } from 'react-icons/hi';

export const Nav = () => {
  return (
    <Flex
      width={'100%'}
      as="nav"
      justify="space-between"
      align="center"
      bg="blue.500"
      p={4}
      color="white"
    >
      <Text fontSize="xl" fontWeight="bold">
        Nekretnine
      </Text>

      {/* Big screen menu start */}
      <HStack hideBelow="sm" spacing={4}>
        <ColorModeButton />
        <Button colorScheme="orange">Postavi oglas</Button>
        <Button colorScheme="orange">Uloguj se</Button>
      </HStack>
      {/* Big screen menu end*/}

      {/* Mobile menu start */}
      <VStack
        hideFrom="sm"
        // sm={{ justifyItems: 'start' }}
      >
        <MenuRoot positioning={{ placement: 'relative' }}>
          <MenuTrigger asChild>
            <Button variant="outline" size="sm">
              <HiMenu />
            </Button>
          </MenuTrigger>
          <MenuContent position="absolute" zIndex="dropdown" top="3.2rem">
            <MenuItem value="new-txt">
              <ColorModeButton />
            </MenuItem>
            <MenuItem value="postavi-oglas">Postavi oglas</MenuItem>
            <MenuItem value="login-or-register-and-login">Uloguj se</MenuItem>
          </MenuContent>
        </MenuRoot>
      </VStack>
      {/* Mobile menu end */}
    </Flex>
  );
};
