import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import "./OurSolution.css"

function OurSolution() {

    return (
        <>

            <Grid className="root-container"
            sx={{
                position:"relative",
                bottom:{lg:"80px",md:"0px",sm:"0px",xs:"0px"},
                top:{lg:"-80px",md:"20px",sm:"20px",xs:"20px"},

            }}
            >
                <Box   
                            sx={{
                               textAlign:"center",
                                color:"var(--white-color)",
                                display:{lg:"none",md:"flex",sm:"flex",xs:"flex"},
                                flexDirection:"column",
                                gap:{lg:"0px",md:"0px",sm:"16px",xs:"12px"},
                                marginBottom:{lg:"0px",md:"65px",sm:"65px",xs:"65px"},

                            }}
                            >

                                <Typography
                                sx={{
                                    fontFamily:"var(--English-font)",
                                    fontSize:{lg:"40px",md:"40px",sm:"26px",xs:"26px"},
                                    fontWeight:"600",
                                    fontVariant:"all-small-caps",
                                    letterSpacing:{lg:"1.6px",md:"1.6px",xs:"1.04px"},
                                    padding: 0,


                                }}
                                >
                                We offer it solution
                                </Typography>

                                <Typography
                                sx={{
                                    fontFamily:"var(--English-font)",
                                    fontSize:{lg:"48px",md:"48px",sm:"26px",xs:"26px"},
                                    fontWeight:"700",
                                    fontVariant:"all-small-caps",
                                    letterSpacing:{lg:"1.92px",md:"1.92px",xs:"1.04px"},
                                    padding:"0 0"

                                }}
                                >
                                Safe and <span style={{color:"#21D6D6"}}>sustainable </span>
                                </Typography>
                                <Typography
                                sx={{

                                    fontFamily:"var(--English-font)",
                                    fontSize:{lg:"36px",md:"36px",sm:"26px",xs:"23px"},
                                    fontWeight:"400",
                                    fontVariant:"all-small-caps",
                                    letterSpacing:{lg:"1.44px",md:"1.44px",xs:"0.92pxpx"},
                                    paddingLeft:{lg:"0px",md:"0px",xs:"55px"},
                                    paddingRight:{lg:"0px",md:"0px",xs:"55px"},
                                    textAlign:"center",


                                }}
                                >
                                something knows about our features
                                </Typography>
                            </Box>
                <Grid className="bg1">
                    <Grid className="bg2">
                        <Grid className="bg3">
                            <Box
                            sx={{
                               textAlign:"center",
                                color:"var(--white-color)",
                                display:{lg:"flex",md:"none",sm:"none",xs:"none"},
                                flexDirection:"column",
                                gap:{lg:"0px",md:"0px",sm:"16px",xs:"12px"},

                            }}
                            >

                                <Typography
                                sx={{
                                    fontFamily:"var(--English-font)",
                                    fontSize:{lg:"40px",md:"40px",sm:"26px",xs:"26px"},
                                    fontWeight:"600",
                                    fontVariant:"all-small-caps",
                                    letterSpacing:{lg:"1.6px",md:"1.6px",xs:"1.04px"},
                                    padding: 0,


                                }}
                                >
                                We offer it solution
                                </Typography>

                                <Typography
                                sx={{
                                    fontFamily:"var(--English-font)",
                                    fontSize:{lg:"48px",md:"48px",sm:"26px",xs:"26px"},
                                    fontWeight:"700",
                                    fontVariant:"all-small-caps",
                                    letterSpacing:{lg:"1.92px",md:"1.92px",xs:"1.04px"},
                                    padding:"0 0"

                                }}
                                >
                                Safe and <span style={{color:"#21D6D6"}}>sustainable </span>
                                </Typography>
                                <Typography
                                sx={{

                                    fontFamily:"var(--English-font)",
                                    fontSize:{lg:"36px",md:"36px",sm:"26px",xs:"23px"},
                                    fontWeight:"400",
                                    fontVariant:"all-small-caps",
                                    letterSpacing:{lg:"1.44px",md:"1.44px",xs:"0.92pxpx"},
                                    paddingLeft:{lg:"0px",md:"0px",xs:"45px"},
                                    paddingRight:{lg:"0px",md:"0px",xs:"55px"},
                                    textAlign:"center",


                                }}
                                >
                                something knows about our features
                                </Typography>
                            </Box>
                            
                        </Grid>
                    </Grid>

                </Grid>

                
            </Grid>

        </>
    )
}

export default OurSolution;