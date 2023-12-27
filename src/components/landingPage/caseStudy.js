import React from "react";
import { useTranslation } from "react-i18next";
import "./caseStudy.css"
import { Box, Grid, Typography, Button } from "@mui/material";
import Arrow from "../../assets/images/BlueArrow.svg"
import ArrowWhite from "../../assets/images/arrowRight.svg"
import caseTest from "../../assets/images/caseTest.png"
import OurClients from "./ourClients";
import Footer from "../footer/footer";

function CaseStudy() {
    const cases = [
        { id: 0, title: "Quiff: Online Salon Booking Platform Development, Optimization, and Support", desc: "Lorem ipsum dolor sit amet consectetur. Fermentum auctor tincidunt tristique et leo sed quisque et. Gravida suscipit tincidunt elit ut quis in sed. Id donec sed quam tempus metus. Vel et nunc faucibus etiam sit adipiscing.Lorem ipsum dolor sit amet consectetur. Fermentum auctor tincidunt tristique et leo sed quisque et. Gravida suscipit tincidunt elit ut quis in sed. Id donec sed quam tempus metus. Vel et nunc faucibus etiam sit adipiscing.", img: caseTest },
        { id: 1, title: "Quiff: Online Salon Booking Platform Development, Optimization, and Support", desc: "Lorem ipsum dolor sit amet consectetur. Fermentum auctor tincidunt tristique et leo sed quisque et. Gravida suscipit tincidunt elit ut quis in sed. Id donec sed quam tempus metus. Vel et nunc faucibus etiam sit adipiscing.Lorem ipsum dolor sit amet consectetur. Fermentum auctor tincidunt tristique et leo sed quisque et. Gravida suscipit tincidunt elit ut quis in sed. Id donec sed quam tempus metus. Vel et nunc faucibus etiam sit adipiscing.", img: caseTest }
    ]


    const { t, i18n } = useTranslation();
    const selectLanguage = i18n.language



    return (
        <>
            <Grid className="bgCase root-container"
                sx={{
                    paddingLeft: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                    paddingRight: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                    backgroundPosition: { lg: " 0 -260px", md: " 0 -260px", sm: "0 -160px" },
                    paddingBottom: {lg:"73px",md:"73px",sm:"87px",xs:"87px"},
                    marginTop: { lg: "0px", md: "0px", sm: "20px", xs: "70px" },
                }}
            >

                <Grid
                    sx={{
                        paddingTop: { lg: "79px", md: "50px" },
                    }}
                >
                    <Typography
                        sx={{
                            color: "var(--header-color)",
                            fontSize: { lg: "24px", md: "24px", sm: "18px", xs: "18px" },
                            fontWeight: "400",
                            lineHeight: "normal",
                            letterSpacing: selectLanguage === "en" && "0.96px",
                            fontFamily: "--English-font",
                            paddingBottom: "20px"

                        }}
                    >
                        {t("caseStudy.LatestCase")}
                    </Typography>

                    <Grid item container>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Typography
                                sx={{
                                    color: "var(--white-color)",
                                    fontSize: { lg: "48px", md: "48px", sm: "32px", xs: "32px" },
                                    fontWeight: "700",
                                    lineHeight: "normal",
                                    letterSpacing: selectLanguage === "en" && { lg: "1.92px", md: "1.92px", sm: "1.28px", xs: "1.28px" },
                                    fontFamily: "--English-font",
                                    paddingBottom: { lg: "0px", md: "0px", sm: "0px", xs: "20px" }


                                }}
                            >
                                {t("caseStudy.ourCreative")}
                            </Typography>

                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Typography
                                sx={{
                                    color: "var(--white-color)",
                                    fontSize: { lg: "16px", md: "16px", sm: "12px", xs: "12px" },
                                    fontWeight: "400",
                                    lineHeight: "normal",
                                    letterSpacing: selectLanguage == - "en" && { lg: "0.64px", md: "0.64px", sm: "0.48px", xs: "0.48px" },
                                    textAlign: "justify",
                                    fontFamily: "--English-font"
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur. Fermentum auctor tincidunt tristique et leo sed quisque et. Gravida suscipit tincidunt elit ut quis in sed. Id donec sed quam tempus metus. Vel et nunc faucibus etiam sit adipiscing.

                            </Typography>
                        </Grid>
                    </Grid>

                    {cases.map((item, index) => (

                        <Grid item key={index} container
                            sx={{
                                marginTop: { lg: "20px", md: "20px", sm: "20px", xs: "0px" }
                            }}
                        >
                            <>
                                <Grid item lg={6} md={6} sm={item.id === 0 || item.id % 2 === 0 ? 7 : 5} xs={12}
                                    sx={{
                                        display: "flex",
                                        paddingTop: "50px"

                                    }}
                                >
                                    {item.id === 0 || item.id % 2 === 0 ?
                                        <img style={{ maxWidth: "100%" }} src={item.img}></img>
                                        :
                                        <>
                                            <Box>

                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: { lg: "24px", md: "24px", sm: "16px", xs: "16px" },
                                                        marginTop: "20px"
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            color: "var(--white-color)",
                                                            fontSize: { lg: "24px", md: "24px", sm: "16px", xs: "16px" },
                                                            fontWeight: "700",
                                                            lineHeight: "normal",
                                                            letterSpacing: selectLanguage === "en" && "0.96",
                                                            textAlign: "justify",
                                                            fontFamily: "var(--English-font)"

                                                        }}
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            color: "var(--white-color)",
                                                            fontSize: { lg: "16px", md: "16px", sm: "12px", xs: "12px" },
                                                            lineHeight: { lg: "36px" },
                                                            fontWeight: "400",
                                                            letterSpacing: selectLanguage === "en" && { lg: "0.64px", md: "0.64px", sm: "0.48px", xs: "0.48px" },
                                                            fontFamily: "var(--English-font)",
                                                            textAlign: "justify"


                                                        }}
                                                    >
                                                        {item.desc}
                                                    </Typography>


                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent: { lg: "end", md: "end", sm: "end", xs: "center" },
                                                        marginTop: "8px"
                                                    }}
                                                >
                                                    <div className="frame">
                                                        <div className="text-wrapper"> {t("caseStudy.seeCase")} </div>
                                                        <img className="typcn-arrow-up" alt="Typcn arrow up" src={Arrow}
                                                            style={{
                                                                transform: selectLanguage === "ar" ? "rotate(180deg)" : "",

                                                            }}
                                                        />
                                                    </div>
                                                </Box>

                                            </Box>
                                        </>

                                    }

                                </Grid>
                                <Grid item lg={6} md={6} sm={item.id % 2 !== 0 ? 7 : 5} xs={12}
                                    sx={{
                                        display: "flex",
                                        justifyContent: { lg: "end", md: "end", sm: "end", xs: "center" },
                                        marginTop: "60px"
                                    }}
                                >
                                    {item.id % 2 !== 0 ?
                                        <img style={{ maxWidth: "100%" }} src={item.img}></img>
                                        :
                                        <>
                                            <Box>

                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: { lg: "24px", md: "24px", sm: "16px", xs: "16px" }
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            color: "var(--white-color)",
                                                            fontSize: { lg: "24px", md: "24px", sm: "16px", xs: "16px" },
                                                            fontWeight: "700",
                                                            lineHeight: "normal",
                                                            letterSpacing: selectLanguage === "en" && "0.96",
                                                            textAlign: "justify",
                                                            fontFamily: "var(--English-font)"

                                                        }}
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            color: "var(--white-color)",
                                                            fontSize: { lg: "16px", md: "16px", sm: "12px", xs: "12px" },
                                                            lineHeight: { lg: "36px" },
                                                            fontWeight: "400",
                                                            letterSpacing: selectLanguage === "en" && { lg: "0.64px", md: "0.64px", sm: "0.48px", xs: "0.48px" },
                                                            fontFamily: "var(--English-font)",
                                                            textAlign: "justify"


                                                        }}
                                                    >
                                                        {item.desc}
                                                    </Typography>


                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent: { lg: "end", md: "end", sm: "end", xs: "center" },
                                                        paddingBottom: "20px",
                                                        marginTop: "8px"


                                                    }}
                                                >
                                                    <div className="frame">
                                                        <div className="text-wrapper">{t("caseStudy.seeCase")}</div>
                                                        <img className="typcn-arrow-up" alt="Typcn arrow up" src={Arrow}
                                                            style={{
                                                                transform: selectLanguage === "ar" ? "rotate(180deg)" : "",

                                                            }}
                                                        />
                                                    </div>
                                                </Box>

                                            </Box>

                                        </>

                                    }

                                </Grid>
                            </>


                        </Grid>
                    ))}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: { lg: "80px", md: "80px", sm: "80px", xs: "80px" }
                        }}
                    >
                        <Button
                            sx={{
                                backgroundColor: "transparent",
                                color: "var(--white-color)",
                                fontSize: { lg: "24px", md: "24px", sm: "16px", xs: "16px" },
                                lineHeight: "36px",
                                fontVariant: "small-caps",
                                fontWeight: "600",
                                fontFamily: "var(--English-font)",
                                border: "1px solid var(--white-color)",
                                borderRadius: "36px",
                                padding: "16px 24px",
                                height:{lg:"52px",md:"52px",sm:"52px",xs:"44px"},
                                gap: "16px",

                            }}
                        >
                            {t("caseStudy.allCases")}
                            <img className="typcn-arrow-up" alt="Typcn arrow up" src={ArrowWhite}
                                style={{
                                    transform: selectLanguage === "ar" ? "rotate(180deg)" : "",

                                }}
                            />
                        </Button>

                    </Box>

                </Grid>


            </Grid>

        </>
    )
}

export default CaseStudy