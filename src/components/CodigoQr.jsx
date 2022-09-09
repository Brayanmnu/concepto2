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
        height: 'calc(100vh - 18px)',
        margin: '0px 24px',
        padding: '18px 0px 0px',
      }}
    >
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
            margin: '0px auto 42px',
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
    </div>
  )
}