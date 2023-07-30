import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card2 from './card';
import Typography from '@mui/material/Typography';


export default function Cirugia2() {

    return (<>
        <Card sx={{ maxWidth: "850px", textAlign: "justify", JustifyContent: "center", margin: "100px auto" }}>
            <CardMedia
                component="img"
                alt="Cirugia-de-tabique"
                image="https://drmanuelgil.com/wp-content/uploads/2022/02/tabiquenasal.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Cirugia de Tabique
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    El tabique nasal es una estructura formada por cartílagos y
                    huesos, que se encuentra en la parte interna de la nariz,
                    actúa como “un muro” dividiendo las fosas nasales en izquierda
                    y derecha, le da soporte a la nariz y dirige el flujo de aire
                    hacia la parte posterior de la nariz. El tabique desviado se
                    presenta cuando el cartílago y/o hueso del tabique nasal no
                    están alineados correctamente y pueden obstruir una o ambas
                    fosas nasales. La desviación del tabique puede ser un problema
                    de nacimiento, puede presentarse posterior a algún golpe sobre
                    la nariz, o como parte normal del crecimiento durante
                    la infancia y la pubertad.
                </Typography>
            </CardContent>
        </Card>

        <Card2 />
    </>);
}