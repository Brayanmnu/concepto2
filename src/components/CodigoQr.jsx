import React, { useState, useEffect, Fragment } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ImageBanner from '../img/in_posible_banner.png'; // Import using relative path


export default function CodigoQr(props) {

    return (
        
        <Grid container justifyContent="center" >
            <Grid item xs={12} sm={12} md={9} style={{paddingTop:"10px"}}>
                    <Grid container sx={{minHeight:'35vh', maxHeight:'255vh', minWidth:'60vh', maxWidth:'255vh'}} justifyContent="center">
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={6}
                            sx={{
                                backgroundImage: `url(${ImageBanner})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                    </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Paper sx={{maxWidth: 300, maxHeight: 300, overflow: 'hidden' }} style={{borderRadius: 26}} >
                        <Grid container>
                            <Grid item>
                                <img class="card-img-top" src={"data:image/jpg;base64,"+props.codigoQr} style={{height:"45%", margin:"33px"}}/>
                            </Grid>
                        </Grid> 
                    </Paper>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                >
                    <Typography style={{color: 'white'}} gutterBottom variant="h3">
                        {props.name}
                    </Typography>
                    
                </Box>
            </Grid>
        </Grid>
        
    )
}