import React, { useState, useEffect, Fragment } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ImageBanner from '../img/in_posible_banner.png'; // Import using relative path


export default function CodigoQr(props) {

    return (
        
        <Grid container justifyContent="center">
            <Grid item xs={12} sm={12} md={9}>
                    <Grid container sx={{minHeight:'10vh', maxHeight:'25vh', minWidth:'40vh', maxWidth:'155vh'}} justifyContent="center">
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            md={4}
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
                <Box component="main" sx={{ flex: 1, py: 2, px: 3}}>
                    <Grid container rowSpacing={2}>
                        <Grid item xs={12} xm={12} md={12}>
                            <Paper sx={{maxWidth: 300, maxHeight: 300, margin: 'auto', overflow: 'hidden' }} style={{borderRadius: 26}} >
                                <Grid container rowSpacing={2}>
                                    <Grid item>
                                        <img class="card-img-top" src={"data:image/jpg;base64,"+props.codigoQr} style={{height:"45%", margin:"33px"}}/>
                                    </Grid>
                                </Grid> 
                                
                            </Paper>
                        </Grid>
                        
                    </Grid>
                    
                    
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