import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import whyImg from "../../assets/images/whyChoose.svg"
import { useTranslation } from "react-i18next";

function WhyChoose(){
    const { t, i18n } = useTranslation();
    const selectLanguage = i18n.language;

    return(
        <>
        <Grid
        sx={{
            paddingLeft: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
            paddingRight: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
            paddingBottom:"100px"
        }}
        >
           <Grid container>
  <Grid item lg={5} md={6} sm={5} xs={5} // Add xs={12} to take full width on small screens
    sx={{
      position: "relative",
      paddingRight:selectLanguage === "en" && {lg:"57px",md:"19px",sm:"10px",xs:"7px"},
      paddingLeft:selectLanguage === "ar" && {lg:"57px",md:"19px",sm:"10px",xs:"7px"}

    }}
  >
    <img style={{maxWidth:"100%" }} src={whyImg} alt="Why Choose Us"></img>
    {/* <Box
      sx={{
        background: "#21D6D6",
        width: "100%",
        maxWidth: "401px",
        height: "100%",
        borderRadius: "28px",
        position: "relative",
        left: "24px",
        top: "24px",
        zIndex: "2"
      }}
    ></Box> */}
  </Grid>
  <Grid item lg={7} md={6} sm={7} xs={7} // Add xs={12} to take full width on small screens
    sx={{
      display: "flex",
      gap: {lg:"24px",md:"24px",sm:"6px",xs:"6px"},
      marginTop:{lg:"0",md:"0",sm:"auto",xs:"auto"},
      marginBottom:{lg:"0",md:"0",sm:"auto",xs:"auto"},
      flexDirection: "column",
      paddingLeft:selectLanguage === "en" && {lg:"57px",md:"19px",sm:"10px",xs:"7px"},
      paddingRight:selectLanguage === "ar" && {lg:"57px",md:"19px",sm:"10px",xs:"7px"}

      
    }}
  >
    
    <Typography
      sx={{
        color: "var(--header-color)",
        fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "16px" },
        lineHeight: "normal",
        fontWeight: "400",
        letterSpacing: selectLanguage === "en" && { lg: "0.96px", md: "0.96px", sm: "0.96px", xs: "0.64px" },
        fontFamily: "var(--English-font)",
      }}
    >
      why choose us
    </Typography>
    <Typography
      sx={{
        color: "var(--white-color)",
        fontSize: { lg: "48px", md: "48px", sm: "32px", xs: "20px" },
        lineHeight: { lg: "normal", md: "normal", sm: "normal", xs: "normal" },
        fontWeight: "700",
        letterSpacing: selectLanguage === "en" && { lg: "1.92px", md: "1.92px", sm: "1.92px", xs: "0.88px" },
        fontFamily: "var(--English-font)",
        width: "100%",
        maxWidth: {lg:"443px",md:"443px",sm:"350px",xs:"216px"}
      }}
    >
      highly experienced people with us
    </Typography>
    <Typography
      sx={{
        color: "var(--white-color)",
        fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "16px" },
        lineHeight: { lg: "38px", md: "36px", sm: "30px", xs: "30px" },
        fontWeight: "400",
        fontVariant: "small-caps",
        fontFamily: "var(--English-font)",
        textAlign: "justify",
        display:{lg:"flex",md:"flex",sm:"none",xs:"none"}
      }}
    >
      Lorem ipsum dolor sit amet consectetur. Rhoncus proin eget parturient habitasse vel congue at etiam iaculis. Enim cras aliquet quis et fringilla pharetra amet morbi sit. A praesent nibh sagittis augue. Eget proin at pretium et. Suspendisse accumsan sed at risus non. Amet volutpat parturient amet morbi. Senectus et tincidunt rutrum mi sed in neque. aliquet quis et fringilla pharetra amet morbi sit. A praesent nibh sagittis augue. Rhoncus proin eget parturient habitasse vel congue at etiam iaculis.
    </Typography>
  </Grid>
  <Grid xs={12}>

  <Typography
      sx={{
        color: "var(--white-color)",
        fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "16px" },
        lineHeight: { lg: "38px", md: "36px", sm: "30px", xs: "30px" },
        fontWeight: "400",
        fontVariant: "small-caps",
        fontFamily: "var(--English-font)",
        textAlign: "justify",
        display:{lg:"none",md:"none",sm:"block",xs:"block"},
        marginTop:"28px"
      }}
    >
      Lorem ipsum dolor sit amet consectetur. Rhoncus proin eget parturient habitasse vel congue at etiam iaculis. Enim cras aliquet quis et fringilla pharetra amet morbi sit. A praesent nibh sagittis augue. Eget proin at pretium et. Suspendisse accumsan sed at risus non. Amet volutpat parturient amet morbi. Senectus et tincidunt rutrum mi sed in neque. aliquet quis et fringilla pharetra amet morbi sit. A praesent nibh sagittis augue. Rhoncus proin eget parturient habitasse vel congue at etiam iaculis.
    </Typography>
    </Grid>

</Grid>


        </Grid>
        </>
    )
}

export default WhyChoose