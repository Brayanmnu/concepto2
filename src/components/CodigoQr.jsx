import React, { useState, useEffect, Fragment } from "react";
import Grid from '@mui/material/Grid';

export default function CodigoQr(props) {

    return (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={12} md={12}>
                <img class="card-img-top" src={"data:image/jpg;base64,"+props.codigoQr}  />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                {props.name}
            </Grid>
        </Grid>
    )
}