import React from "react";
import Footer from "../footer/footer";
import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import trust1 from "../../assets/images/whotrust1.svg"
import trust2 from "../../assets/images/whotrust2.svg"
import trust3 from "../../assets/images/whotrust3.svg"
import trust4 from "../../assets/images/whotrust4.svg"
import trust5 from "../../assets/images/whotrust5.svg"
import trust6 from "../../assets/images/whotrust6.svg"
import trust7 from "../../assets/images/whotrust7.svg"
import trust8 from "../../assets/images/whotrust8.svg"
import trust9 from "../../assets/images/whotrust9.svg"
import trust10 from "../../assets/images/whotrust10.svg"


import "./whoTrust.css"
import Makeappointement from "./MakeAppointement";

function WhoTrust(){
    const { t, i18n } = useTranslation();
    const selectedLanguage = i18n.language;

    const WhoTrust=[
        {img:trust1,id:1},
        {img:trust2,id:2},
        {img:trust3,id:3},
        {img:trust4,id:4},
        {img:trust5,id:5},
        {img:trust6,id:6},
        {img:trust7,id:7},
        {img:trust8,id:8},
        {img:trust9,id:9},
        {img:trust10,id:10},
    ]
    return(
        <>
        <Grid className="bgTrust"
        sx={{
            paddingTop:{lg:"60px",md:"60px",sm:"60px",xs:"45px"}
        }}
        >
           <Box
           sx={{
            display:"flex",
            flexDirection:"column",
            gap:{lg:"24px",md:"24px",sm:"24px",xs:"16px"},
            paddingLeft: { lg: "120px", md: "16px", sm: "16px", xs: "11px" },
            paddingRight: { lg: "120px", md: "16px", sm: "16px", xs: "11px" },
            marginBottom:{lg:"92px",md:"92px",sm:"44px",xs:"44px"}
           }}
           >
           
            <Typography
            sx={{
                fontSize:{lg:"24px",md:"24px",sm:"24px",xs:"18px"},
                color:"var(--header-color)",
                fontWeight:"400",
                lineHeight:"normal",
                fontFamily: "var(--English-font)",
                letterSpacing:selectedLanguage === "en" && {lg:"0.96px",md:"0.96px",sm:"0.96px",xs:"0.64px"}

            }}
            >
           {t("WhoTrust.Ourclients")}
            </Typography>
            <Typography
            sx={{
                fontSize:{lg:"48px",md:"48px",sm:"48px",xs:"32px"},
                color:"var(--white-color)",
                fontWeight:"400",
                lineHeight:"normal",
                fontFamily: "var(--English-font)",
                letterSpacing:selectedLanguage === "en" && {lg:"1.92px",md:"1.92px",sm:"1.92px",xs:"1.28px"}

            }}
            >
           {t("WhoTrust.theyTrust")}
            </Typography>
            <Typography
            sx={{
                fontSize:{lg:"24px",md:"24px",sm:"24px",xs:"16px"},
                color:"var(--white-color)",
                fontWeight:"400",
                lineHeight:"normal",
                textAlign:"justify",
                fontFamily: "var(--English-font)",
                letterSpacing:selectedLanguage === "en" && {lg:"0.96px",md:"0.96px",sm:"0.96px",xs:"0.64px"},
                maxWidth:"850px"

            }}
            >
{t("WhoTrust.WeAreCommitted")}
            </Typography>
           
           </Box>
           <Grid container item
           sx={{
            paddingLeft: selectedLanguage === "en" && { lg: "120px", md: "16px", sm: "16px", xs: "0px" },
            paddingRight: selectedLanguage === "ar" && { lg: "120px", md: "16px", sm: "16px", xs: "0px" },
           
 
           }}
           >
                {WhoTrust.map((item,index)=>(
                    <Grid item key={index} lg={1.2} md={2} sm={2} xs={4}
                    sx={{
                        justifyContent:{lg:"start",md:"start",sm:"start",xs:"center"},
                        alignItems:"center",
                        display:"flex",
                        marginBottom:{lg:"80px",md:"80px",sm:"80px",xs:item.id === 10 ? "85px" : "58px"}
                    }}
                    >
                                            <img loading="lazy" width="80px" height="80px" src={item.img}></img>

                        </Grid>
                ))}
            </Grid>
        </Grid>
        </>
    )
}

export default WhoTrust