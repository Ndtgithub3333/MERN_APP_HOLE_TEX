import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from './pages/HomePage';

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
