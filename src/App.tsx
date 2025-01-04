import { useState } from "react";
import { Layout } from "./Layout";
import { ThemeContext } from "./ThemeContext";
import { Provider } from "@/components/ui/provider"

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}> 
      <Provider>
        <Layout/>
      </Provider>
    </ThemeContext.Provider>
  )
}

export default App
