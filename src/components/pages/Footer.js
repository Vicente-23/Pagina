import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter, WhatsApp, Email, Phone } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg" sx={{textAlign:"justify"}}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              DIRECCIÓN DEL CONSULTORIO
            </Typography>
            <Typography variant="body3" color="text.secondary">
              Visitanos para que seas atendido con la atención que te mereces en
              Centro de Especialidades Médicas
              1er piso consultorio 126 Jose Benitez No 2704 Colonia obispado Monterrey NL CP 64060

            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.pryimary" gutterBottom>
              Contactanos
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Link href="https://api.whatsapp.com/send?phone=+528115448285&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20"  target="_blank" color="inherit">
                <WhatsApp />
                whatsapp: 8115448285
              </Link>

            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Link href="mailto:jorgetrega@gmail.com?subject=Contacto&body=prueba email" target="_blank" color="inherit">
                <Email />
                Email: jorgetrega@gmail.com
              </Link>

            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Link href="tel:+528115448285" target="_blank" color="inherit">
                <Phone />
                Phone: 8183475220
              </Link>

            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Siguenos en nuestras redes sociales
            </Typography>
            <Link target="_blank" href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link target="_blank" href="https://www.instagram.com/" color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link target="_blank" href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="/">

            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}