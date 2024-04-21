import React from 'react';
import { Button, Box, CssBaseline, ThemeProvider, TextField} from '@mui/material';
import { createTheme } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: '#65b5ff',
      },
    },
  });

  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"></link>
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ width: '50%', margin: '10% auto', backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'}}>
      <>
        <h1 style={{ fontFamily: 'Lexend, sans-serif', textAlign: 'center', paddingTop: '40px', marginBottom: '50px', color: '#65b5ff'}}>Edit Statistics</h1>
        <Box sx={{minWidth: '100%', minHeight: '100%', background: 'lightblue' }}></Box>
        <div style={{display: 'flex', flexDirection: 'column', margin: '10px'}}>
            <TextField
                variant="outlined"
                label="Height"
                type="text"
                name="username"
                sx={{ backgroundColor: 'white', margin: '20px 15% 20px 15%' }}
            />
            <TextField
                variant="outlined"
                label="Weight"
                type="text"
                name="username"
                sx={{ backgroundColor: 'white', margin: '20px 15% 20px 15%' }}
            />
            <TextField
                variant="outlined"
                label="Age"
                type="text"
                name="username"
                sx={{ backgroundColor: 'white', margin: '20px 15% 20px 15%' }}
            />
            <TextField
                variant="outlined"
                label="Budget"
                type="text"
                name="username"
                sx={{ backgroundColor: 'white', margin: '20px 15% 20px 15%' }}
            />
            <TextField
                variant="outlined"
                label="Height"
                type="text"
                name="username"
                sx={{ backgroundColor: 'white', margin: '20px 15% 40px 15%' }}
            />
          <Button variant="contained" sx={{backgroundColor: '#65b5ff', margin: '0 35% 20px 35%'}}>Submit</Button>
          <Button variant="contained" sx={{backgroundColor: '#aaa', margin: '0 20px 20px 75%'}}>Logout</Button>
        </div>
      </>
    </div>
    </ThemeProvider>
  );
}

export default App;