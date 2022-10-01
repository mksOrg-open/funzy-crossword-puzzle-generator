import './App.css'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HomeScreen from './components/homeScreen';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/common/navbar';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App () {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState(prefersDarkMode?'dark':'light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar ColorModeContext={ColorModeContext}/>
        <HomeScreen/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App
