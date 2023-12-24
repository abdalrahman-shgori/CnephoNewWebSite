import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../navbar/navbar";


function Header({bgImg,bgImgSm,title,desc}){
    const { t, i18n } = useTranslation();
    const selectLanguage=i18n.language;

    return(
        <>
         <Grid className=""
                sx={{
                    backgroundImage: {lg:`url(${bgImg})`,md:`url(${bgImg})`,sm:`url(${bgImgSm})`,xs:`url(${bgImgSm})`},
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",

                }}
                >
                    <NavBar/>

                    <Grid
                        sx={{
                            
                            
                            paddingLeft: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                            paddingRight: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                            paddingBottom: { lg: "121px", md: "121px", sm: "121px", xs: "100px" },
                            marginTop: { lg: "105px", md: "105px", sm: "105px", xs: "79px" }
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: { lg: "40px", md: "40px", sm: "40px", xs: "24px" }
                            }}
                        >
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    color: "var(--white-color)",
                                    fontSize: { lg:"48px",md:"48px",sm:"48px",xs:"24px" },
                                    fontWeight:"700",
                                    lineHeight: {lg:"48px",md:"48px",sm:"48px",xs:"36px"},
                                    fontVariant: "all-small-caps",
                                    fontFamily: "var(--English-font)",
                                    width:"100%",
                                    maxWidth:{lg:"780px",md:"780px",sm:"780px",xs:"300px"},
                                   margin:"0 auto",
                                   

                                }}
                            >
                                {/* {t("contactUs.ContactUs")} */}
                                {title}
                            </Typography>
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    fontStyle:"normal",
                                    color: "var(--white-color)",
                                    fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "16px" },
                                    fontWeight: "400",
                                    lineHeight: { lg: "36px", md: "36px", sm: "36px", xs: "30px" },
                                    fontFamily: "var(--English-font)",
                                    fontVariant:"all-small-caps",
                                   
                                   

                                }}
                            >
                                {/* {t("contactUs.contactDesc")} */}
                                {desc}
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>
        </>
    )
}

export default Header