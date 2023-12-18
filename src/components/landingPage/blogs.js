import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../footer/footer";
import "./blogs.css"
import { Box, Button, Grid, Typography } from "@mui/material";
import blogImg1 from "../../assets/images/blogImg.svg";
import ArrowWhite from "../../assets/images/BlueArrow.svg"
import WhoTrust from "./whoTrust";

function Blog(){
    const { t, i18n } = useTranslation();
    const selectLanguage=i18n.language;

    const Blogs=[
        {id:0,type:"Art",date:"April 2 , 2023",title:"Lorem ipsum dolor sit amet consectetur.",img:blogImg1},
        {id:1,type:"Art",date:"April 2 , 2023",title:"Lorem ipsum dolor sit amet consectetur.",img:blogImg1},
        {id:2,type:"Art",date:"April 2 , 2023",title:"Lorem ipsum dolor sit amet consectetur.",img:blogImg1}


    ]
    return(

        <>
        <Grid className="bgBlogs">
            <Box
            sx={{
                paddingLeft: { lg: "120px", md: "16px", sm: "16px", xs: "11px" },
                paddingRight: { lg: "120px", md: "16px", sm: "16px", xs: "11px" },
                paddingTop:{lg:"48px",md:"48px",sm:"35px",xs:"35px"},
                display:"flex",
                flexDirection:"column",
                gap:{lg:"24px",md:"24px",sm:"24px",xs:"12px"}
            }}
            >
            <Typography
            sx={{
                color:"var(--header-color)",
                fontSize:{lg:"24px",md:"24px",sm:"24px",xs:"18px"},
                fontWeight:"400",
                lineHeight:"normal",
                letterSpacing:selectLanguage === "en" && {lg:"0.96px",md:"0.96px",sm:"0.96px",xs:"0.72px"},
                fontFamily: "var(--English-font)",

            }}
            >
            {t("blogs.ourBlogs")}
                </Typography>
                <Typography
                sx={{
                    fontFamily: "var(--English-font)",
                    color:"var(--btn-text-color)",
                    fontSize:{lg:"48px",md:"48px",sm:"32px",xs:"32px"},
                    fontWeight:"700",
                    lineHeight:"normal",
                    letterSpacing:selectLanguage === "en" && {lg:"1.92px",md:"1.92px",sm:"1.28px",xs:"1.28px"}
                }}
                >
                {t("blogs.latestNews")}
                </Typography>
                <Grid container 
             
               
                >
        {Blogs.map((item, index) => (
  <Grid container item xl={4} lg={4} md={4} sm={5} xs={12} key={index} justifyContent="center" >
    <Box
      sx={{
        position: "relative",
        paddingLeft: {lg:"10px",md:"10px",sm:"10px",xs:"0px"},
        paddingRight:  {lg:"10px",md:"10px",sm:"10px",xs:"0px"},
        marginTop: item.id = 1 && {lg:"0px",md:"0px",sm:"24px",xs:"24px"},
       
       

      }}
    >
        <Box
        sx={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            padding: {lg:"17px 35px",md:"17px 35px",sm:"17px 35px",xs:"14px 25px"},
            zIndex: 1,
            display:"flex",
            flexDirection:"column",
            gap:{lg:"16px",md:"16px",sm:"16px",xs:"11px"},
        }}
        >

        <Box
        sx={{
          
            display:"flex",
            gap:"24px"

        }}
        >

      <Typography
        sx={{
          color: "var(--header-color)",
          fontSize: "16px",
          lineHeight: "normal",
          fontWeight: "400",
          letterSpacing: selectLanguage === "en" && "0.64px",
          fontFamily: "var(--English-font)",
         
        }}
      >
        {item.type}
      </Typography>

<Typography
sx={{
    color: "var(--white-color)",
    fontSize: "16px",
    lineHeight: "normal",
    fontWeight: "400",
    letterSpacing: selectLanguage === "en" && "0.64px",
    fontFamily: "var(--English-font)",
}}
>
    {item.date}
    </Typography>   
       </Box>
<Box>
    <Typography
    sx={{
        color:"var(--white-color)",
        fontSize:{lg:"24px",md:"24px",sm:"18px",xs:"24px"},
        fontWeight:"700",
        lineHeight:"normal",
        letterSpacing:selectLanguage === "en" && "0.96px",
        fontFamily: "var(--English-font)",

    }}
    >
        {item.title}
    </Typography>
</Box>
       </Box>



      <img
        src={item.img}
        alt={`Blog ${index + 1}`}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          position: "relative",
          zIndex: 0,
        }}
      />
    </Box>
  </Grid>
))}



                              </Grid>
                              <Box
                        sx={{
                          paddingBottom: {lg:"36px",md:"36px",sm:"36px",xs:"31px"},
                          paddingTop:"36px",
                          display:"flex",
                          justifyContent:{lg:"flex-end",md:"flex-end",sm:"flex-end",xs:"center"},
                          width: "auto",
                          paddingLeft:"16px",
                          paddingRight: "16px"

                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "transparent",
                            color: "var(--btn-text-color)",
                            fontSize: "24px",
                            lineHeight: "36px",
                            fontVariant: "small-caps",
                            fontWeight: "600",
                            fontFamily: "var(--English-font)",
                            border: "1px solid var(--btn-text-color)",
                            borderRadius: "36px",
                            padding: "16px 24px",
                            height: "52px",
                            gap: "16px",
                            display: "inline-flex",
                            alignItems:"center"
                          }}
                        >
                          {t("blogs.seeAllNews")}
                          <img className="typcn-arrow-up" alt="Typcn arrow up" src={ArrowWhite}
                            style={{
                              transform: selectLanguage === "ar" ? "rotate(180deg)" : "",
                              display:"flex",
                             

                            }}
                          />
                        </Button>
                      </Box>

                    
 

            </Box>

        </Grid>
        <WhoTrust/>


        </>
    )
}

export default Blog