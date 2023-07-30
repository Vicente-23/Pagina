import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Card2 from './card';
import Imagen from './imagen'
export default function Consulta() {
    return (<>
        <Card sx={{ maxWidth: "850px", textAlign: "justify", JustifyContent: "center", margin: "100px auto" }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    OTORRINOLARINGOLOGÍA
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ¿QUÉ ES LA OTORRINOLARINGOLOGÍA?
                    Nuestros Médicos del área de otorrinolaringología son especialistas
                    certificados con alta capacitación y prestigio profesional, que le
                    brindarán tratamiento preventivo y correctivo de todo tipo de enfermedades
                    de oídos, nariz y garganta. Nuestros doctores se especializan en atender a
                    adultos y niños dando una atención personalizada y contando con equipos de
                    alta calidad para un diagnostico preciso.
                </Typography>
            </CardContent>
        </Card>
        <Card2 />
        <Imagen />
    </>);
}