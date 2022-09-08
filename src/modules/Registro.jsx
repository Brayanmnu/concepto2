import React, { useState } from "react";
import Formulario from '../components/Formulario'
import CodigoQr from '../components/CodigoQr'

export default function Registro() {

    const [isCreated, setIsCreated] = useState(false);
    const [codigoQr, setCodigoQr] = useState('');
    const [name, setName] = useState('');

    return isCreated?
        <CodigoQr codigoQr={codigoQr} name={name}/>
        : <Formulario setIsCreated={setIsCreated} setCodigoQr={setCodigoQr}  setName={setName}/>
}