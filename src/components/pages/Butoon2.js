import React from 'react';
import Button from '@mui/material/Button';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Stack } from '@mui/system';

function Butoon2() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#2e7d32',
                light: '#F5EBFF',
            },
            secondary: {
                main: '#03a9f4',
                contrastText: '#F5EBFF',
            },
        },
    });
    const openInNewTab = url => {
        window.open(url, '_blank', 'noreferrer,noopener');
    }
    return (<>
        <ThemeProvider theme={theme}>
            <Stack direction="row" gap={4}>
                <Button variant="contained" onClick={() => openInNewTab('https://api.whatsapp.com/send?phone=+528115448285&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20')}>Agentar cita  < FaWhatsapp /></Button>
                <Button variant="contained" color="secondary" onClick={() => openInNewTab('tel:+528115448285')} >Llamar  < FaPhone /></Button>
            </Stack>
        </ThemeProvider>
    </>)
} export default Butoon2