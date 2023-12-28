import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

function HeaderPortfolio(){
    const { t, i18n } = useTranslation();
    const selectLanguage=i18n.language;

    return(
        <>
                            <Box  className="root-container PortfolioBgFirst" 
                            
                            sx={{
                                display:{xl:"none"}
                                
                            }}
                            />

        <Grid
        sx={{
            paddingLeft: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
            paddingRight: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
            marginTop:{lg:"113px",md:"113px",sm:"113px",xs:"113px"}
        }}
        >
            <Box
            sx={{
                display:"flex",
                flexDirection:"column",
                gap:{lg:"24px",md:"24px",sm:"24px",xs:"0px"}
            }}
            >
                <Typography
                sx={{
                    color:"var(--white-color)",
                    fontSize:{lg:"64px",md:"64px",sm:"48px",xs:"40px"},
                    fontWeight:"900",
                    lineHeight:"76px",
                    letterSpacing:selectLanguage === "en" && {lg:"2.56px",md:"2.56px",sm:"2.56px",xs:"1.6px"},
                    fontVariant:"all-small-caps",
                    fontFamily: "var(--English-font)",
                    fontStyle:"normal"
                }}
                >
                Portfolio
                </Typography>
                <Typography
                sx={{
                    color:"var(--white-color)",
                    fontSize:{lg:"24px",md:"24px",sm:"18px",xs:"18px"},
                    fontWeight:"400",
                    lineHeight:"36px",
                    fontVariant:"small-caps",
                    fontStyle:"normal",
                    fontFamily: "var(--English-font)",
                    textAlign:selectLanguage === "en" ? "justify" : "justify"

                }}
                >
                    {t("Portfolio.headerDesc")}
                </Typography>

            </Box>
            

        </Grid>
        
        </>
    )

}

export default HeaderPortfolio