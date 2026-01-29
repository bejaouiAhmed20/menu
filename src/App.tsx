import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

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
 * Main App component - Single page application with smooth scrolling sections
 */
function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div style={{ backgroundColor: '#FFFFFF' }}>
        <Navbar />
        
        {/* Main content with proper spacing for fixed navbar */}
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