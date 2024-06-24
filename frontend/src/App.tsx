import './App.css';
import ProfilePage from './components/profile/Profile';
import { Button, CssBaseline, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Custom primary color
      contrastText: '#fff'
    },
    secondary: {
      main: '#dc004e', // Custom secondary color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Toolbar sx={{ backgroundColor: 'primary.main' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="primary.contrastText">
            News
          </Typography>
          <Button sx={{ color: 'primary.contrastText' }}>Login</Button>
      </Toolbar>
      
      <ProfilePage/>
    </div>
    </ThemeProvider>
  );
}

export default App;
