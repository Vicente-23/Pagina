import { Carousel } from 'react-carousel-minimal';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import Card2 from './card';
import Imagen from './imagen'

function Home() {
    const data = [
        {
            image: "https://otorrinolaringologodf.com/images/Consulta-de-otorrinolaringologia.jpg",
            caption: "Consulta"
        },
        {
            image: "https://otorrinolaringologoenmonterrey.com/assets/img/service/radiofrecuencia-de-cornetes.jpg",
            caption: "Radiofrecuencia de Cornetes"
        },
        {
            image: "https://constanzavaldes.cl/wp-content/uploads/2020/10/cirugia-endoscopica-seno-vaporizacion-laser-concha-nasal_179755-7561.jpg",
            caption: "Cirugia endoscópica para sinusitis"
        },
        {
            image: "https://clinicabruselas.com/wp-content/uploads/2021/01/images-3.jpg",
            caption: "Cirugia de Tabique nasal"
        },
        {
            image: "https://clinicarhinus.com.br/wp-content/uploads/2017/06/endoscopia-das-vias-aereas-superiores-nariz-e-garganta-07062016213147.jpg",
            caption: "Endoscopia Nasal"
        },
        {
            image: "https://st.depositphotos.com/13053202/52792/i/600/depositphotos_527929072-stock-photo-ent-doctor-conducts-physical-examination.jpg",
            caption: "Otorrinolaringología Pediátrica"
        }
    ];

    const captionStyle = {
        fontSize: '2em',

    }
    const slideNumberStyle = {
        fontSize: '20px',

    }
    return (<>
        <div className='App'>
            <div style={{ textAlign: "center", marginTop: "80px" }}>
                <Card sx={{ maxWidth: "850px", textAlign: "justify", JustifyContent: "center", margin: "10px auto" }}>
                    <CardContent>
                        <Typography sx={{textAlign:"center"}} variant="h4" color="text.primary">
                            otorrinolaringologo en monterrey
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="text.secondary">
                            El <strong>Dr. Jorge Treviño Garza</strong> es un <strong>Otorrinolaringólogo en Monterrey</strong> que cuenta con
                            especialidad en Cirugía Plástica Facial, es un médico que constantemente se actualiza con
                            el  fin de mejorar sus servicios a los pacientes.
                            Servicios del <strong>Otorrinolaringólogo en Monterrey</strong>
                        </Typography>
                    </CardContent>
                </Card>
                <div style={{
                    padding: "0 20px"
                }}>
                    <Carousel
                        data={data}
                        time={4000}
                        width="850px"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="80px"
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            maxHeight: "500px",
                            margin: "40px auto",
                        }}
                    />
                </div>
            </div>
        </div>

        <Card2 />
        <Imagen/>
    </>);
}

export default Home;