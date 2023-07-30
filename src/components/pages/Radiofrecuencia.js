import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Card2 from './card';

export default function Radiofrecuencia() {
  return (<>
    <Card sx={{ maxWidth: "850px", textAlign: "justify", JustifyContent: "center", margin: "100px auto" }}>
      <CardMedia
        component="img"
        alt="Rsdiofrecuencia"
        image="https://peroladaybeausotorrinos.com/wp-content/uploads/elementor/thumbs/Paranasales-puzxbfo08uwavq9ir6c1228n0or6k7z2g8z0ghem4o.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Radiofrecuencia
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Radiofrecuencia de cornetes es la técnica quirúrgica que tiene como finalidad la reducción del tamaño del cornete inferior en los casos en los que dicho cornete dificulta la respiración nasal, mediante el empleo de una energía de alta frecuencia y baja potencia y temperatura (radiofrecuencia). La radiofrecuencia se aplica por medio de unos electrodos que se introducen en el espesor del cornete. Dichos electrodos permanecen fríos y transmiten directamente las ondas a los tejidos, provocando su vaporización y destrucción únicamente en el punto de contacto, evitando el daño del tejido circundante La intervención se realiza habitualmente bajo anestesia local. La intervención se realiza a través de los orificios nasales, por lo que no deja cicatrices externas. De esta manera, se consigue una reducción inmediata del volumen del cornete. No obstante, tras la cirugía se produce una reacción inflamatoria en el cornete, lo que motiva una congestión nasal que puede durar entre 5 y 10 días, al cabo de los cuales se empiezan a notar los resultados de la intervención.
        </Typography>
      </CardContent>
    </Card>

    <Card2 />
  </>);
}
