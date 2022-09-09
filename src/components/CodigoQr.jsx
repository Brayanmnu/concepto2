import React, { useLayoutEffect } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function CodigoQr(props) {
  useLayoutEffect(() => {
    const root = document.getElementById('root');
    root.style.background = "url(/fondo_fucsia.png) repeat"
  }, [])

  return (
    <div
      style={{
        height: 'calc(120vh - 18px)',
        margin: '0px 24px',
        padding: '18px 0px 0px',
      }}
    >
        <Typography 
        style={{ color: 'white', textAlign: 'center' }}
        gutterBottom
        variant="h3"
        fontFamily="Mokoto,Roboto,Helvetica"
        fontSize={20}
        >
          ¡Tu registro ha sido completado! 
        </Typography>
        <img
        src="/in_posible_banner.png"
        alt="in_posible_banner"
        style={{
          width: "100%",
          maxWidth: "360px",
          margin: "0 auto",
          display: "block",
        }}
      />

      <Box>
        <Paper
          style={{
            borderRadius: 24,
            margin: '0px auto 15px',
            width: '80%',
            maxWidth: '240px',
          }}
        >
          <img
            src={`data:image/jpg;base64,${props.codigoQr}`}
            style={{
              maxWidth: "calc(100% - 24px)",
              margin: "12px"
            }}
          />
        </Paper>
      </Box>

      <Typography
        style={{ color: 'white', textAlign: 'center' }}
        gutterBottom
        variant="h3"
        fontFamily="Mokoto,Roboto,Helvetica"
        fontSize={36}
      >
        {props.name}
      </Typography>
      <div style={{ maxWidth: '1020px', margin: '0px auto'}}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography style={{ color: 'white', marginBottom: '12px' }}>
          Puedes recoger tu pulsera HACEDORES, los días 19, 20 y 21 de setiembre en Av. Perú 1236 de 9:00 a.m. a 7:00 p.m.
        </Typography>
        <Typography style={{ color: 'white', marginBottom: '12px' }}>
          ¡Te esperamos! 
        </Typography>
        <Typography style={{ color: 'white', marginBottom: '12px' }}>
          Nota: Si no recogiste tu pulsera los días mencionados, ya no podrás adquirirla. 
        </Typography>
        </div>
      </div>
      
    </div>
  )
}