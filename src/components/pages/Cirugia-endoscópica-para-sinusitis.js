import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Card2 from './card';

export default function ImgMediaCard() {
  return (<>
    <Card sx={{ maxWidth: "850px", textAlign: "justify", JustifyContent: "center", margin: "100px auto" }}>
      <CardMedia
        component="img"
        alt="Cirugia-endoscopia"
        image="https://constanzavaldes.cl/wp-content/uploads/2020/10/cirugia-endoscopica-seno-vaporizacion-laser-concha-nasal_179755-7561.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cirugia endoscópica para sinusitis
        </Typography>
        <Typography variant="body2" color="text.secondary">
          En una cirugía endoscópica de los senos paranasales, se introduce un endoscopio en la nariz. Le permite al médico ver el interior de los senos paranasales.
          Se introducen instrumentos quirúrgicos junto con el endoscopio. Esto le permite al médico extraer pequeñas cantidades de hueso u otro material que obstruya las aberturas de los senos paranasales. El médico también puede extraer excrecencias (pólipos) de la membrana mucosa. En algunos casos, se usa un láser para quemar tejido que obstruye la abertura de los senos paranasales. También puede usarse una pequeña fresa rotatoria que raspa tejido.
          La cirugía puede hacerse en un hospital o en un centro quirúrgico ambulatorio. Puede utilizarse anestesia local o general. El procedimiento lleva de 30 a 90 minutos.
        </Typography>
      </CardContent>
    </Card>

    <Card2 />
  </>);
}