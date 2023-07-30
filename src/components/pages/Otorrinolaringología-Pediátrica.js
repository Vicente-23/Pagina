import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Card2 from './card';

export default function Otorrinolaringología() {
  return (<>
    <Card sx={{ maxWidth: "850px", textAlign: "justify", JustifyContent: "center", margin: "100px auto" }}>
      <CardMedia
        component="img"
        alt="Otorrinolaringología-Pediátrica"
        image="https://st.depositphotos.com/13053202/52792/i/600/depositphotos_527929072-stock-photo-ent-doctor-conducts-physical-examination.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Otorrinolaringología Pediátrica
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ¿Qué es un otorrinolaringólogo pediátrico?
          Si su hijo necesita cirugía o un tratamiento médico complejo para enfermedades o
          problemas que afectan los oídos, la nariz o la garganta, un otorrinolaringólogo
          pediátrico tiene la experiencia y la capacitación para tratarlo. Muchos
          otorrinolaringólogos generales prestan atención quirúrgica a los niños.
          Sin embargo, en muchas zonas del país, existe una atención de otorrinolaringología
          más especializada para niños.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ¿Qué tipo de adiestramiento tienen los otorrinolaringólogos pediátricos?
          Los otorrinolaringólogos pediátricos son doctores en medicina que han realizado:

          Por lo menos 4 años de estudios en una escuela de medicina.
          Un año de internado quirúrgico.
          A menudo 1 año adicional como residente en cirugía general.
          Por lo menos de 3 a 4 años adicionales de adiestramiento como residente en otorrinolaringología y cirugía de la cabeza y el cuello.
          Los otorrinolaringólogos pediátricos a menudo realizan programas de adiestramiento adicionales en un centro médico infantil grande.
          Los otorrinolaringólogos pediátricos tratan a niños desde el nacimiento hasta los años de la adolescencia. Escogieron a la pediatría como el foco de su práctica médica, y aprenden la naturaleza singular de la atención médica y quirúrgica para niños a través de un entrenamiento avanzado y de la experiencia en la práctica médica.
        </Typography>
      </CardContent>
    </Card>

    <Card2 />
  </>);
}
