import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./needHelp.css"
import { Box, Button, Grid, Typography } from "@mui/material";
import img1 from "../../assets/images/needHelpImg1.svg";
import img2 from "../../assets/images/needHelpImg2.svg";
import img3 from "../../assets/images/needHelpImge3.svg";
import ArrowWhite from "../../assets/images/BlueArrow.svg"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OurAward from "./ourAward";

function Help() {
  const { t, i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const selectLanguage = i18n.language

  const items = [
    { id: 0, name: t("needHelp.needTeam"), img: img1, desc: "Lorem ipsum dolor sit amet consectetur. Dui nunc elit dui quis sit et non tristique. Quis pharetra sed accumsan non auctor arcu duis sagittis. Eu egestas enim nascetur convallis vulputate eu in. Massa scelerisque vulputate morbi urna scelerisque. Faucibus vel aenean aliquam lacus dictumst tellus sem. Et ac in vitae arcu leo ac mattis donec. Elementum tellus curabitur ." },
    { id: 1, name: t("needHelp.MVP"), img: img2, desc: "Lorem ipsum dolor sit amet consectetur. Dui nunc elit dui quis sit et non tristique. Quis pharetra sed accumsan non auctor arcu duis sagittis. Eu egestas enim nascetur convallis vulputate eu in. Massa scelerisque vulputate morbi urna scelerisque. Faucibus vel aenean aliquam lacus dictumst tellus sem. Et ac in vitae arcu leo ac mattis donec. Elementum tellus curabitur ." },
    { id: 2, name: t("needHelp.talkTech"), img: img3, desc: "Lorem ipsum dolor sit amet consectetur. Dui nunc elit dui quis sit et non tristique. Quis pharetra sed accumsan non auctor arcu duis sagittis. Eu egestas enim nascetur convallis vulputate eu in. Massa scelerisque vulputate morbi urna scelerisque. Faucibus vel aenean aliquam lacus dictumst tellus sem. Et ac in vitae arcu leo ac mattis donec. Elementum tellus curabitur ." },
  ];

  const settings = {
    dots: true,
    customPaging: (i) => (
      <div
        style={{
          width: '18px',
          height: '18px',
          background: i === currentSlide ? '#313C74' : '#E0E5FE',
          borderRadius: '50%',
          position: "relative",
          top: "40px",
        }}
      ></div>),
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 0,

    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: false,
          initialSlide: 1,
        },
      },
    ],


  };
  const sliderRef = useRef(null);


  return (
    <>
      <Grid className="help-bg">
        <Grid className="text-content"
          sx={{
            marginTop: { lg: "40px", md: "40px", sm: "180px", xs: "206px" },
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "177px",
          }}
        >
          <Typography
            sx={{
              display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
              fontFamily: "var(--English-font)",
              color: "var(--white-color)",
              fontSize: "48px",
              fontWeight: "700",
              lineHeight: "normal",
              letterSpacing: selectLanguage === "en" && "1.92px",
              justifyContent: "center"
            }}
          >
            {t("needHelp.letUs")}
          </Typography>
          <Box
            sx={{
              paddingLeft: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
              paddingRight: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },

            }}
          >

            <Slider ref={sliderRef} {...settings}
            

            >
           

              {items.map((item,index) => (
                <>
                  <Grid
                  key={index}
                    sx={{
                      marginRight: { lg: "10px", md: "10px", sm: "10px", xs: "10px" },
                      marginLeft: { lg: "10px", md: "10px", sm: "10px", xs: "10px" },
                      display:"flex",
                      flexDirection:"column",
                      justifyContent:"center",
                      alignItems:"center"
                   


                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: item.id === 1 ? "var(--btn-text-color)" : "var(--header-color)",
                        height: "97px",
                        width: "100%",
                        maxWidth:"386px",
                        position: "relative",
                        borderRadius: "16px 16px 0px 0px",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: "0",
                          left: item.id === 0 ? { lg: "34%", md: "34%", sm: "32%", xs: "32%" } : item.id === 1 ? "44%" : item.id === 2 ? "45%" : "",
                          transform: "translateX(-50%)",
                        }}
                      >

                        <img src={item.img}></img>
                      </Box>


                    </Box>
                    <Box
                      sx={{
                        backgroundColor: "var(--white-color)",
                        height: "100%",
                        width: "100%",
                        maxWidth:"386px",

                        borderRadius: "0px 0px 16px 16px",
                        paddingLeft: "24px",
                        paddingRight: "24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px"

                      }}
                    >
                      <Typography
                        sx={{
                          marginTop: "24px",
                          color: "var(--btn-text-color)",
                          fontSize: "24px",
                          fontWeight: "700",
                          lineHeight: "normal",
                          letterSpacing: selectLanguage === "en" && "0.96px",
                          fontFamily: "var(--English-font)",
                          direction:selectLanguage === "en" ? "ltr" : "rtl"


                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "var(--btn-text-color)",
                          fontSize: "16px",
                          fontFamily: "var(--English-font)",
                          letterSpacing: selectLanguage === "en" && "0.64px",
                          textAlign: "justify",
                          lineHeight: "normal",
                          fontWeight: "400"



                        }}
                      >
                        {item.desc}
                      </Typography>
                      <Box
                        sx={{
                          paddingBottom: "24px",
                          width: "auto",
                          display:"flex",
                          direction:selectLanguage === "en" ? "ltr" : "rtl"

                        }}
                      >

                        <Button
                          sx={{
                            backgroundColor: "transparent",
                            color: "var(--btn-text-color)",
                            fontSize: selectLanguage === "en" ? "24px" : "18px",
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

                          }}
                        >
                          {t("needHelp.sendMail")}
                          <img className="typcn-arrow-up" alt="Typcn arrow up" src={ArrowWhite}
                            style={{
                              transform: selectLanguage === "ar" ? "rotate(180deg)" : "",

                            }}
                          />
                        </Button>
                      </Box>



                    </Box>
                  </Grid>
                </>
              ))}

            </Slider>
          </Box>
        </Grid>
      </Grid>

    </>
  )
}

export default Help