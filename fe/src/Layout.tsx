import { Container } from '@chakra-ui/react';
import { Nav } from './Nav';
import { Search } from './Search';

export const Layout = () => {
  return (
    <Container maxW="container.md" height={'100vh'} p={{ base: 0, sm: 4 }}>
      {/* Navbar */}
      <Nav />
      {/* Search */}
      <Search />
    </Container>
  );
};
