// theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#8D6E63', // Terracotta
      secondary: '#A5D6A7', // Olive Green
      background: '#FAF3E0', // Warm Beige
      accent: '#FBC02D', // Sunflower Yellow
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.background',
        color: 'brand.primary',
      },
    },
  },
});

export default theme;
