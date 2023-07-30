import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button2 from './Butoon2';

const card = () => {
    return (<>

        <Card sx={{ maxWidth: "850px", textAlign: "justify", JustifyContent: "center", margin: "100px auto" }}>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Te mereces un alto nivel de atención por parte de un <strong>Otorrinolaringólogo</strong> de vanguardia,
                    por lo que el <strong>Dr. Jorge Treviño Garza</strong> especialista en padecimiento de los oídos.
                    <br />
                    El <strong>otorrinolaringólogo en Monterrey Jorge Treviño</strong> es ahora uno de los médicos más
                    importantes en su campo gracias a su contribución a la investigación y la prevención.
                    <br />
                    <br/>
                    Da clic en el botón de WhatsApp para contactarnos para saber más sobre el <strong>otorrinolaringólogo en Monterrey</strong>.
                </Typography>
            </CardContent>
            <CardActions>
                <Button2 />
            </CardActions>
        </Card>
    </>)
}

export default card