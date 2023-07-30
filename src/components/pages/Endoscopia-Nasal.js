import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Card2 from './card';

export default function Endoscopia() {
  return (<>
    <Card sx={{ maxWidth: "850px", textAlign: "justify", JustifyContent: "center", margin: "100px auto" }}>
      <CardMedia
        component="img"
        alt="Endoscopia-Nasal"
        image="https://clinicarhinus.com.br/wp-content/uploads/2017/06/endoscopia-das-vias-aereas-superiores-nariz-e-garganta-07062016213147.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Endoscopia Nasal
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ¿Qué es una endoscopia nasal?
          La endoscopia nasal es un procedimiento que se usa para observar los conductos nasales y sinusales. Se hace con un endoscopio. Este es un tubo delgado y flexible o rígido con una cámara diminuta y una luz. Un médico especializado en garganta, nariz y oídos (otorrinolaringólogo) suele hacer este procedimiento en su consultorio.
          Los senos paranasales son un grupo de espacios formados por los huesos de la cara. Se conectan con la cavidad nasal. Este es el espacio lleno de aire que está detrás de la nariz.
          Durante el procedimiento, el proveedor de atención médica introduce el tubo por la nariz. A continuación, lo guía a través de los conductos nasales y sinusales. Con el endoscopio, se pueden ver imágenes de la zona. Esta prueba puede ayudar a diagnosticar y tratar afecciones de salud. En algunos casos, pueden usarse instrumentos pequeños para tomar muestras diminutas de tejido (biopsia) y hacer otras tareas.
          La cirugía puede hacerse en un hospital o en un centro quirúrgico ambulatorio. Puede utilizarse anestesia local o general. El procedimiento lleva de 30 a 90 minutos.
        </Typography>
      </CardContent>
    </Card>

    <Card2 />
  </>);
}