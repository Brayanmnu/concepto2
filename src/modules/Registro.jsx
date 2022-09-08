import React, { useState } from "react";
import Formulario from '../components/Formulario'
import CodigoQr from '../components/CodigoQr'
import ImageBackgroundQr from '../img/fondo_fucsia.png'; // Import using relative path
import Grid from '@mui/material/Grid';


export default function Registro() {

    const [isCreated, setIsCreated] = useState(false);
    const [codigoQr, setCodigoQr] = useState('');
    const [name, setName] = useState('');
    
    return isCreated? 
        (
            <Grid container component="main" >
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    sx={{
                        backgroundImage: `url(${ImageBackgroundQr})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <CodigoQr codigoQr={codigoQr} name={name}/>
                </Grid>
            </Grid>
        )
        : <Formulario setIsCreated={setIsCreated} setCodigoQr={setCodigoQr}  setName={setName}/>
}