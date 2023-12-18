import { Grid, Box, Typography, Button } from "@mui/material";
import React, { useRef, useState } from "react";
import ourClients from "../../assets/images/ourClients.svg"
import { useTranslation } from "react-i18next";
import ClientImg from "../../assets/images/ClientImg.svg"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./ourClient.css";
import ArrowRight from "../../assets/images/ArrowRightBlue.svg"
import ArrowLeft from "../../assets/images/ArrowLeftBlue.svg"
import quetos from "../../assets/images/quetos.svg"
import Help from "./needHelp";

function OurClients(props) {
    const { t, i18n } = useTranslation();
    const selectLanguage = i18n.language;
    const [currentSlide, setCurrentSlide] = useState(0);

    const Clients = [
        {
            id: 0,
            desc: "Lorem ipsum dolor sit amet consectetur. Fermentum auctor tincidunt tristique et leo sed quisque et. Gravida suscipit tincidunt elit ut quis in sed. Id donec sed quam tempus metus. Vel et nunc faucibus etiam sit adipiscing.",
            clientName: "Jane Roe",
            clientPosition: t("ourClients.CEOFounderat"),
            clientImg: ClientImg
        },
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur. Fermentum auctor tincidunt tristique et leo sed quisque et. Gravida suscipit tincidunt elit ut quis in sed. Id donec sed quam tempus metus. Vel et nunc faucibus etiam sit adipiscing.",
            clientName: "Jane Roe",
            clientPosition: t("ourClients.CEOFounderat"),
            clientImg: ClientImg
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur. Fermentum auctor tincidunt tristique et leo sed quisque et. Gravida suscipit tincidunt elit ut quis in sed. Id donec sed quam tempus metus. Vel et nunc faucibus etiam sit adipiscing.",
            clientName: "Jane Roe",
            clientPosition: t("ourClients.CEOFounderat"),
            clientImg: ClientImg
        }
    ]

    const settings = {
        dots: true,
        customPaging: (i) => (
            <div
                style={{
                    width: '18px', // Customize dot width
                    height: '18px', // Customize dot height
                    background: i === currentSlide ? 'var(--header-color)' : 'transparent', // Customize dot color based on index
                    borderRadius: '50%', // Make dots circular
                    border: i != currentSlide && "3px solid #313D72",
                    position: "relative",
                    top: "54px",
                }}
            ></div>),
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next),

    };

    const sliderRef = useRef(null);

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
            if (sliderRef.current === 3) {
                sliderRef.current.slickPrev()
            }
        }
    };

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };


    return (
        <>
            <Grid container item
                sx={{
                    backgroundColor: "#F1F4FF",
                }}
            >
                <Grid item xl={5} lg={6} md={12} sm={12} xs={12}
                    sx={{
                        backgroundColor: "#F1F4FF",
                        position: "relative"

                    }}
                >
                    <Box>
                        <img style={{ width: "100%" }} src={ourClients}></img>
                    </Box>
                    <Box
                        sx={{
                            position: "absolute",
                            top: { lg: "50%", md: "99%", sm: "99%", xs: "97%" },
                            left:selectLanguage === "en" ?  { lg: "99.4%", md: "50%", sm: "50%", xs: "50%" } :{ lg: "-1%", md: "50%", sm: "50%", xs: "50%" } ,
                            transform: "translate(-44%, -50%)",
                            textAlign: "center",
                            width: { lg: "68px", md: "68px", sm: "68px", xs: "44px" },
                            height: { lg: "68px", md: "68px", sm: "68px", xs: "44px" }

                        }}
                    >
                        <img style={{ maxWidth: "100%" }} src={quetos}></img>
                    </Box>
                </Grid>
                <Grid item xl={6} lg={6} md={12} sm={12} xs={12}
                    sx={{
                        backgroundColor: "#F1F4FF",
                        paddingLeft: { lg: "118px", md: "16px", sm: "16px", xs: "16px" },
                        paddingRight: { lg: "118px", md: "16px", sm: "16px", xs: "16px" },

                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: { lg: "24px", md: "24px", sm: "24px", xs: "12px" },
                            marginTop: { lg: "48px", md: "48px", sm: "48px", xs: "28px" },

                        }}
                    >
                        <Typography
                            sx={{
                                color: "var(--header-color)",
                                fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "18px" },
                                lineHeight: "normal",
                                letterSpacing: selectLanguage === "en" && { lg: "0.96px", md: "0.96px", sm: "0.72px", xs: "0.72px" },
                                fontFamily: "var(--English-font)",
                                fontWeight: "400"


                            }}
                        >
                            {t("ourClients.whatClientsSays")}
                        </Typography>
                        <Typography
                            sx={{
                                color: "var(--btn-text-color)",
                                fontSize: { lg: "48px", md: "48px", sm: "48px", xs: "32px" },
                                lineHeight: "normal",
                                fontWeight: "700",
                                letterSpacing: selectLanguage === "en" && { lg: "1.92px", md: "1.92px", sm: "1.28px", xs: "1.28px" },
                                fontFamily: "var(--English-font)",

                            }}
                        >
                            {t("ourClients.satisfiedClient")}
                        </Typography>
                        <div
                            style={{
                                border: "none",
                                width: "177px",
                                borderTop: "4px solid #21D6D6",
                                borderRadius: "4px"
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            // paddingBottom:"10px"
                        }}
                    >

                        <Slider ref={sliderRef} {...settings}>
                            {Clients.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        marginTop: { lg: "36px", md: "36px", sm: "36px", xs: "30px" },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: { lg: "16px", md: "16px", sm: "16px", xs: "12px" },
                                            fontWeight: "400",
                                            lineHeight: "normal",
                                            letterSpacing: selectLanguage === "en" && { lg: "0.64px", md: "0.64px", sm: "0.48px", xs: "0.48px" },
                                            color: "var(--btn-text-color)",
                                            fontFamily: "var(--English-font)",
                                            textAlign: "justify",
                                            marginRight: "6px"

                                        }}
                                    >
                                        {item.desc}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: { lg: "24px", md: "24px", sm: "24px", xs: "24px" },
                                            marginTop: { lg: "48px", md: "48px", sm: "48px", xs: "38px" },
                                            direction: selectLanguage === "en" ? "ltr" : "rtl"
                                        }}
                                    >
                                        <img src={item.clientImg}></img>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "8px"
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: "var(--btn-text-color)",
                                                    fontSize: "24px",
                                                    fontWeight: "400",
                                                    lineHeight: "normal",
                                                    fontFamily: "var(--English-font)",
                                                    letterSpacing: selectLanguage === "en" && "0.96px",
                                                    textAlign: "justify"


                                                }}
                                            >
                                                {item.clientName}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: "var(--btn-text-color)",
                                                    fontSize: "16px",
                                                    fontWeight: "400",
                                                    lineHeight: "normal",
                                                    fontFamily: "var(--English-font)",
                                                    letterSpacing: selectLanguage === "en" && "0.64px",
                                                    textAlign: "justify"
                                                }}
                                            >
                                                {item.clientPosition}
                                            </Typography>
                                        </Box>
                                    </Box>

                                </Box>
                            ))}

                        </Slider>
                        <Grid item container
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: { lg: "36px", md: "36px", sm: "36px", xs: "36px" },
                                paddingBottom: { lg: "48px", md: "48px", sm: "22px", xs: "22px" },
                                direction: "ltr"
                            }}
                        >
                            <Grid item lg={6} md={6} xs={6}
                                sx={{

                                    textAlign: selectLanguage === "en" ? "left" : "left",
                                    cursor: { lg: "pointer", md: "pointer", sm: "unset", xs: "unset" }
                                }}
                                onClick={handlePrev}

                            >

                                <img src={selectLanguage === "en" ? ArrowLeft : ArrowLeft}></img>
                            </Grid>


                            <Grid item lg={6} md={6} xs={6}
                                sx={{
                                    textAlign: selectLanguage === "en" ? "right" : "right",
                                    cursor: { lg: "pointer", md: "pointer", sm: "unset", xs: "unset" }
                                }}



                            >
                                <Button
                                    onClick={handleNext}
                                    disableRipple

                                >


                                    <img src={selectLanguage === "en" ? ArrowRight : ArrowRight}></img>
                                </Button>
                            </Grid>

                        </Grid>
                    </Box>

                </Grid>

            </Grid>
            <Help />

        </>
    )
}

export default OurClients