import './App.tsx';
import './i18n';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

// Create MUI theme with light colors
const muiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#C62828',
    },
    secondary: {
      main: '#FBC02D',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F9FA',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#6B7280',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

/**
 * Main App component with i18n support
 */
function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set document direction based on language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div style={{ backgroundColor: '#FFFFFF' }}>
        <Navbar />
        
        <main style={{ paddingTop: '64px' }}>
          <Home />
          <Menu />
          <About />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;