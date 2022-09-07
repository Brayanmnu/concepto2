import React, { useState } from "react";
import Formulario from '../components/Formulario'
import CodigoQr from '../components/CodigoQr'
import ImageBackgroundQr from '../img/fondo_fucsia.png'; // Import using relative path
import Grid from '@mui/material/Grid';


export default function Registro() {

    const [isCreated, setIsCreated] = useState(true);
    const [codigoQr, setCodigoQr] = useState('iVBORw0KGgoAAAANSUhEUgAAAcIAAAHCAQAAAABUY/ToAAADw0lEQVR4nO2cTY6rOBRGz22QMnSkWkCWYnZQS2q9JdUOYClZQEkwLMno64FtMEn35HVFrxLdb4AIcEQsXdn3z5j4PU1//SYITjrppJNOOumkkz+PtKK+XJ3OAKzGZGY2ADYs9anhW97p5KuQSJKIkqS5k6REPox0AjpBSNS79eHxucbp5OPJZZ9uTjI7d7K/59WA1aTrSfnuPlU96Tid/H6yv70wXVI+0XQRFj/ekgEmlu96p5MvTsZ5NY2LGfFqxnReTZLyPPSgdzr5EmSQNObTTsS5kw3ZFZJsYDWNkB2lb3unky9FTmZmdgZYemzY7sdrDyynbEhmZvZd73TyRcgcl+2CkABKhJZ/xrmrodsmj8ucrCrh+gxAJ41B5aAZShy//SzG5Tbk5K5DXBZmjLD2xHntiR+gyQACGEEAq+nP/VsnfyJZ5qHiSZPXrTLx1HwiUXVBy0ubz0NOtmpMhVCS1dUBqsnqOJPPPE/t5L3yWqZ8WAzlKtkloek8izi/oVI+A2vI5xqnk48jsw1Z/HhLEFJf3R6KZ0T4MhVH6dMEa+/+kJP/Tq5mw3KSdDWzgdXIYdpyUs5Ys/TkQtrw5/+tkz+QDJJ+Xb7MhiDBclLJNoavsoAVj3v1HKOTRzX+ECw9Ynkr5Yw4glhOYnpPNQewvMn+7zudfC2yyTHWPHXJJ9YcYzrG+wnPMTp5VFu/yKaSiuXknPTelzZDves25GSjvUqmcWtXHKFpZixljpCA4PkhJ29VVqattMpNUnGGYmG1KcTXMiePqja0HbZrjfnss08tgrgNObmp2kSqTnRz6Jp6WelQc3/IyTvt0VhbIGtqaKntXowelzl5p9an3jcDQd0MNEPbiLZ1o7kNOVlVbAi2SWabeI5RftOc5jbkZKuSY6yJxqYLZAzbGTQW5vOQkwftNYwEQTAZED/6ZPFqaHpfe6LWnsm6w3dmnmucTj6OPNQ6ZuCuqbr1kXbC5yEnq7aaq4AgjDADS58st5yFr9JAHUcwwmeduZ5rnE4+mty/+yFde4DVSmZx7nIXSD7EuvP+Ocfp5APJWBPTNrBatRwz/do3JYYE0+XL+4ecvNHuD+31sr0836aogT10c3/Iyaq7737EcTWx9HlrmSYDiwKDLtl0Ed6D5uRBdzbEcgbCZ2+lE3+G6fzZa3qfEazuUzt5VLWIIGABTecuWZzXsl9oGvpk8dpj0CcjzN4L6+SNmlpHkwYKpdZR80OlfOb+kJP3OvTkt2dl2yIh1Wv5bHvgucbppJNOOumkk046+V/6BwdVR7Amw1vXAAAAAElFTkSuQmCC');
    const [name, setName] = useState('Brayan Neyra');
    
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