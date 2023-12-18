import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import award1 from "../../assets/images/award1.svg"
import award2 from "../../assets/images/award2.svg"
import award3 from "../../assets/images/award3.svg"
import award4 from "../../assets/images/award4.svg"
import award5 from "../../assets/images/award5.svg"
import "./ourAwards.css"
import Blog from "./blogs";

function OurAward(){
    const { t, i18n } = useTranslation();
    const selectLanguage = i18n.language

    const award=[
        {img:award1},
        {img:award2},
        {img:award3},
        {img:award4},
        {img:award5},
        {img:award1},
        {img:award2},
        {img:award3},
        {img:award4},
        {img:award5},

    ]

return(
    <>
    <Grid className="bgCaseAwards"
    sx={{
        paddingLeft: { lg: "120px", md: "16px", sm: "16px", xs: "11px" },
        paddingRight: { lg: "120px", md: "16px", sm: "16px", xs: "11px" },
        display:"flex",
        flexDirection:"column",
        gap:"24px",
        paddingTop:"48px"
}}
    >

   <Typography
   sx={{
    color:"var(--header-color)",
    fontFamily:"var(--English-font)",
    fontSize:"24px",
    fontWeight:"400",
    letterSpacing:selectLanguage === "en" && "0.96px"
   }}
   >
   {t("ourAward.OurAwards")}
   </Typography>
   <Typography
   sx={{
    color:"var(--white-color)",
    fontSize:{lg:"48px",md:"48px",sm:"32px",xs:"24px"},
    fontWeight:"700",
    lineHeight:"normal",
    letterSpacing:selectLanguage === "en" && "1.92px",
    fontFamily:"var(--English-font)",
    maxWidth:"1000px"

   }}
   >
{t("ourAward.weAreVoted")}
   </Typography>

   <Grid container
   sx={{
    marginTop:"16px"
   }}
   >
      {/* First line */}
      <Grid container  item justify="center" 
      sx={{
        paddingBottom:{lg:"26px",md:"26px",sm:"26px",xs:"90px"}

      }}
      >
        {award.map((item, index) => (
          <Grid  key={index} item lg={2.2} md={4} sm={6} xs={6} 
          sx={{
            marginTop:index >= 5 ? {lg:"40px",md:"40px",sm:"0px",xs:"0px"} : index >= 2 && {lg:"0px",md:"0px",sm:"22px",xs:"22px"},
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
           marginRight:  {lg:"16px",md:"0px",sm:"0px",xs:"0px"},


          }}
          >
            <Box
            sx={{
                boxShadow:" 2px 4px 4px 0px rgba(212, 223, 255, 0.01)",
                borderRadius:"16px",
                padding:"16px 36px",
                

            }}
            >
            <img width="100%"  src={item.img} alt={`award-${index}`} />

            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Second line */}
      {/* <Grid container item justify="center">
        {award.slice(5, 10).map((item, index) => (
          <Grid key={index} item lg={2} xs={6}>
            <img width="100%" src={item.img} alt={`award-${index + 5}`} />
          </Grid>
        ))}
      </Grid> */}
    </Grid>
   
    </Grid>
    <Blog/>
    </>
)

}

export default OurAward