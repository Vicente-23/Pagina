import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { createTheme } from '@mui/material/styles';

export default function TitlebarImageList() {
  const theme = createTheme();

  theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
  };
  return (<>


    <ImageList sx={{ maxWidth: 768, height: 450, JustifyContent: "center", margin: "100px auto" }}>
      <ImageListItem key="Subheader" cols={2}>
        <ThemeProvider theme={theme}>
          <Typography variant="h3">Casos de exito</Typography>
        </ThemeProvider>

      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  </>);
};

const itemData = [
  {
    img: 'https://www.doctorchozas.es/images/antes-despues/antes-despues-rinoplastia-06.jpeg',
    title: 'Radiofrecuencia de Cornetes',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGj4KD2JIYP_F95KZbS9iyx1zc0ygZJf4BRQ&usqp=CAU',
    title: 'Cirugia endoscópica para sinusitis',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1llCEQrjEKgcMK2s5VLImaJA3czU_c2DMg&usqp=CAU',
    title: 'Cirugia de Tabique nasal',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJKN4Rz9FF2x5Up6lKk_SzZD-yMWeJ-QDzA&usqp=CAU',
    title: 'Endoscopia Nasal',
    cols: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPWQDDiu0RBPu3GC57IyhPhZ9yXTdxp-lcA&usqp=CAU',
    title: 'Cirugia de Tabique nasal',
    cols: 2,
  },
];
