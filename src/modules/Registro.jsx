import React, { useState, useEffect, Fragment } from "react";
//Imports material-ui
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Image from '../img/login.jpg'; // Import using relative path


export default function Registro() {
    const [tipoDoc, setTipoDoc] = useState('');
    const [nroDoc, setNroDoc] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [idCiudad, setIdCiudad] = useState('');
    const [descNewCiudad, setDescNewCiudad] = useState('');
    const [edad, setEdad] = useState('');
    const [idIglesia, setIdIglesia] = useState('');
    const [descNewIglesia, setDescNewIglesia] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');

    const [menuItemTipoDoc, setMenuItemTipoDoc] = useState('');
    const [menuItemCiudad, setMenuItemCiudad] = useState('');
    const [menuItemIglesia, setMenuItemIglesia] = useState('');


    const handleChangeTipoDoc = (event) => {
        setTipoDoc(event.target.value);
    };

    async function reloadDataConfig() {
        /*const tipoProductoResponse =  await tipoProductoService.getAllTipoProducto();
        arrayTipoProducto = await tipoProductoResponse.data;
        setMenuItemProducto(
            arrayTipoProducto.map((tp) => {
                return(
                    <MenuItem value={tp.id}>{tp.descripcion}</MenuItem>
                )
                
            })
        )*/
        setMenuItemTipoDoc(<MenuItem value="1">DNI</MenuItem> )
    }

    async function registrarMaker() {
        console.log('Maker registrado')
    }

    
    useEffect(() => {
        reloadDataConfig();
    }, [,]);
   
    return(
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h4" gutterBottom>
                    FORMULARIO DE REGISTRO
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="caption" display="block" >
                    Regístrate llenando el siguiente formularo y sigue las indicaciones para obtener tu credencial para Congreso Hacedores 2022.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="caption" display="block" >
                    Recuerda asistir temprano para asegurar tu lugar en cada conferencia.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Select
                    required
                    labelId="tipo-doc-label"
                    id="tipo-doc-select"
                    value={tipoDoc}
                    label="Tipo de documento"
                    onChange={handleChangeTipoDoc}
                    fullWidth
                >
                    {menuItemTipoDoc}
                </Select>
                
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    required
                    margin="dense"
                    id="nroDoc"
                    label="Nro. Documento"
                    type="text"
                    variant="standard"
                    fullWidth
                    value={nroDoc}
                    onChange={(e) => setNroDoc(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    required
                    margin="dense"
                    id="celular"
                    label="Celular"
                    type="text"
                    variant="standard"
                    fullWidth
                    value={celular}
                    onChange={(e) => setCelular(e.target.value)}
                />
            </Grid>
            
            <Grid item xs={12} sm={6} md={5}>
                <TextField
                    required
                    margin="dense"
                    id="nombre"
                    label="Nombres"
                    type="text"
                    variant="standard"
                    fullWidth
                    value={nombres}
                    onChange={(e) => setNombres(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
                <TextField
                    required
                    margin="dense"
                    id="apellidos"
                    label="Apellidos"
                    type="text"
                    variant="standard"
                    fullWidth
                    value={apellidos}
                    onChange={(e) => setApellidos(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <TextField
                    required
                    margin="dense"
                    id="edad"
                    label="Edad"
                    type="number"
                    variant="standard"
                    fullWidth
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                Select iglesia required
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                Select Ciudad
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    margin="dense"
                    id="email"
                    label="Correo electrónico"
                    type="text"
                    variant="standard"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Grid> 
            <Grid item xs={12} sm={6} md={4}>
                <Button onClick={registrarMaker} variant="contained" >Registrar</Button>
            </Grid> 
        </Grid>
    )
}