import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { RegistroService } from '../services/RegistroService'
import Dialog from '@mui/material/Dialog'
import Link from '@mui/material/Link';
import Alert from './Alert'

const registroService = new RegistroService();

const styleInputs = { padding: '12px 18px' }

export default function Formulario(props) {
  const [isDisabledIglesia, setIsDisabledIglesia] = useState(true);
  const [menuItemTipoDoc, setMenuItemTipoDoc] = useState([]);
  const [evento, setEvento] = useState('');
  const [disponible, setDisponible] = useState('');
  const [isSendForm, setIsSendForm] = useState(false);
  const [soldOut, setSoldOut] = useState(false);
  const [msgError, setMsgError] = useState('');
  const [openAlert, setOpenAlert] = useState(false);


  const handleChangeIglesia = (event) => {
    const isDisabledIglesia = event.target.value !== 'Otra';
    setIsDisabledIglesia(isDisabledIglesia)
  };

  const registrarMaker = async (event) => {
    event.preventDefault();
    setIsSendForm(true)

    const iglesiaRegistro = event.target.iglesia.value === "Otra"
      ? event.target.otraIglesia.value
      : event.target.iglesia.value

      const dataFormMaker = {
        id_tipo_doc: event.target.id_tipo_doc.value,
        nro_doc: event.target.nroDoc.value,
        nombre: event.target.nombre.value,
        apellido: event.target.apellidos.value,
        ciudad: event.target.ciudad.value,
        edad: event.target.edad.value,
        iglesia: iglesiaRegistro,
        celular: event.target.celular.value,
        email: event.target.email.value,
        id_evento: evento
      }

      const makerResponse =  await registroService.createMakerBack(dataFormMaker);
      if (makerResponse.status === 200) {
        const makerResponseData = await makerResponse.data;
        console.log('makerResponseData.status: '+makerResponseData.status)
        if (makerResponseData.status=="ok") {
          props.setIsCreated(true)
          setIsSendForm(false)
          props.setCodigoQr(makerResponseData.codigo_qr)
          props.setName(makerResponseData.nombres_apellidos)
        }else if (makerResponseData.status=="aforo"){
          setSoldOut(true)
          setDisponible(0)
        }else if(makerResponseData.status=="doc_repetido"){
          setOpenAlert(true);
          setMsgError('Ya se encuentra registrado en el Congreso')
          setIsSendForm(false)
        }else{
          setOpenAlert(true);
          setMsgError('Ocurrió un error inesperado')
        }
      }else{
        setOpenAlert(true);
        setMsgError('Ocurrió un error inesperado')
      }
    }

  useEffect(() => {
    const getTypeDocument = async () => {
      const { data: typeDocuments } =  await registroService.getAllTipoDocumento();
      const itemsTipoDoc = typeDocuments.map(({ id, descripcion }) => ({ id, descripcion }))
      setMenuItemTipoDoc(itemsTipoDoc)
    }

    const getEvent = async () => {
      const eventoResponse =  await registroService.getEvento();
      const eventoResponseData  = eventoResponse.data;
      setEvento(eventoResponseData.id)
      setDisponible(eventoResponseData.disponible)
      if(eventoResponseData.disponible<=0){
        setDisponible(0)
        setSoldOut(true)  
      }
    }

    Promise.all([
      getTypeDocument(),
      getEvent()
    ])
  }, []);

  return (
    <Box
      component="form"
      onSubmit={registrarMaker}
      pt={3}
      style={{ margin: '0px 30px 0px' }}
    >
      <div style={{ maxWidth: '1020px', margin: '0px auto'}}>
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <Typography
            style={{color: 'white'}}
            gutterBottom
            variant="h2"
            fontFamily="Mokoto,Roboto,Helvetica"
            fontSize={40}
          >
            REGISTRO
          </Typography>
          <Typography style={{ color: '#B227B3', marginBottom: '12px' , fontWeight: 600 }}>
            QUEDAN {disponible} CUPOS DISPONIBLES
          </Typography>
          <Typography style={{ color: 'white', marginBottom: '12px' }}>
            Regístrate llenando el siguiente formularo y sigue las indicaciones para obtener tu credencial para Congreso Hacedores 2022.
          </Typography>
          <Typography style={{color: 'white'}}>
            Recuerda asistir temprano para asegurar tu lugar en cada conferencia.
          </Typography>
        </div>

        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 5 }}>
          <Grid item xs={12} sm={6} md={6} style={styleInputs}>
            <FormControl fullWidth>
              <InputLabel>Tipo de documento</InputLabel>
              <Select
                required
                labelId="tipo-doc-label"
                id="tipo-doc-select"
                label="Tipo de documento"
                type="select"
                fullWidth
                variant="standard"
                autoComplete="off"
                name="id_tipo_doc"
                defaultValue=""
              >
                {menuItemTipoDoc.map(({ id, descripcion }) => (
                  <MenuItem key={id} value={id}>
                    {descripcion}
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={styleInputs}>
            <TextField
              required
              id="nroDoc"
              name="nroDoc"
              label="Nro. Documento"
              type="text"
              variant="standard"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={styleInputs}>
            <TextField
              required
              id="nombre"
              name="nombre"
              label="Nombres"
              type="text"
              variant="standard"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={styleInputs}>
            <TextField
              required
              id="apellidos"
              name="apellidos"
              label="Apellidos"
              type="text"
              variant="standard"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={styleInputs}>
            <TextField
              required
              id="celular"
              name="celular"
              label="Celular"
              type="text"
              variant="standard"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={styleInputs}>
            <TextField
              required
              id="edad"
              name="edad"
              label="Edad"
              type="number"
              variant="standard"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={styleInputs}>
            <FormControl fullWidth>
              <InputLabel>Iglesia</InputLabel>
              <Select
                required
                labelId="iglesia-label"
                id="iglesia-select"
                label="Iglesia"
                onChange={handleChangeIglesia}
                fullWidth
                variant="standard"
                autoComplete="off"
                name="iglesia"
                defaultValue=""
              >
                <MenuItem key={1} value="Casa de Vida">Casa de Vida</MenuItem>
                <MenuItem key={2} value="Otra">Otra</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={styleInputs}>
            <TextField
              required={!isDisabledIglesia}
              disabled={isDisabledIglesia}
              id="otraIglesia"
              name="otraIglesia"
              label="Nombre de su iglesia"
              type="text"
              variant="standard"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={styleInputs}>
            <TextField
              id="ciudad"
              name="ciudad"
              label="Ciudad"
              type="text"
              variant="standard"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={styleInputs}>
            <TextField
              id="email"
              name="email"
              label="Correo electrónico"
              type="email"
              variant="standard"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} style={styleInputs}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              style={{ marginBottom: '1rem' }}
            >
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Button disabled={isSendForm} type="submit" fullWidth variant="contained" color="register">
                  Registrar
                </Button>
              </Grid>
            </Box>
            <Typography style={{ color: '#95B1B8' }} fontSize={11}>
              © CONGRESO HACEDORES 2022. | Powered by <Link underline="hover"  target="_blank" color='#A1CFDB' href="https://www.instagram.com/soybrayanneyra/">MUTec</Link>
            </Typography>
          </Grid>
          
          <Dialog open={soldOut}  PaperProps={{style: { backgroundColor: 'transparent', boxShadow: 'none',},}}>
           <img
              src="/sold_out.png"
              alt="sold_out"
              style={{
                width: "100%",
                maxWidth: "560px",
                margin: "0 auto"
              }}
            />
          </Dialog>
          <Alert openAlert={openAlert} setOpenAlert={setOpenAlert} mensaje={msgError} severity="error"/>
        </Grid>
      </div>
    </Box>
  )
}