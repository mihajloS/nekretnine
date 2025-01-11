import { Layout } from './Layout';
import { ColorModeProvider } from '@/components/ui/color-mode';
import { Provider } from '@/components/ui/provider';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

function App() {
  return (
    <Provider>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider>
          <Layout />
        </ColorModeProvider>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
