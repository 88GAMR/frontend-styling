import React from 'react';
import { Button, Box, CssBaseline, ThemeProvider } from '@mui/material';
import Input from '@mui/material/Input';
import { createTheme } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: '#92eab5',
      },
    },
  });
  
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"></link>
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ width: '50%', margin: '10% auto', backgroundColor: '#fff9e6', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'}}>
      <>
        <h1 style={{ fontFamily: 'Lexend, sans-serif', textAlign: 'center', paddingTop: '40px', marginBottom: '50px'}}>Create An Account</h1>
        <Box sx={{minWidth: '100%', minHeight: '100%', background: 'lightblue' }}></Box>
        <div style={{display: 'flex', flexDirection: 'column', margin: '10px'}}>
          <Input placeholder="Email Adress" sx={{backgroundColor: 'while', margin: '20px 15%'}}/>
          <Input placeholder="Password" sx={{backgroundColor: 'while', margin: '20px 15% 40px 15%'}}/>
          <Button variant="contained" sx={{backgroundColor: '#92eab5', margin: '0 35% 20px 35%'}}>Create Account</Button>
        </div>
        <p style={{textAlign: 'center', paddingBottom: '50px'}}>Already have an Account? <a href='youtube.com'>Sign in</a></p>
      </>
    </div>
    </ThemeProvider>
  );
}

export default App;
