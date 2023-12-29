import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import com from "../../assets/images/Rectangle.svg";
import comAr from "../../assets/images/RectangleAr.svg";
import C from "../../assets/images/C.svg";
import Arrow from "../../assets/images/BlueArrow.svg"
import { useTranslation } from "react-i18next";
// import LottieAnimation from './lottie'; // Adjust the path as needed
// import animationDataHome2 from '../../assets/images/HomePart1/HomePart1.json';
import "./landingPage.css"
function SectionOne() {
    const { t, i18n } = useTranslation();
    const selectLanguage = i18n.language;
    const handleContactUsClick = () => {
        // Navigate to the contact us page
        window.location.href = '/Contact-Us';
    };

    return (
        <>
            {/* <LottieAnimation animationData={animationDataHome2} /> */}

            <Grid container className="we root-container" sx={{
                overflowX: "hidden", paddingTop: { lg: "110px", md: "110px", sm: "110px", xs: "116px" },
            }}>
                <Grid item lg={6.1} sm={6.1} xs={12}
                    sx={{
                        height: "100%",

                    }}>
                    <Typography
                        className="BetterSolutionText"
                        sx={{
                            padding: selectLanguage === "en" ? { lg: "0px 0px 0px 120px", xs: "20px 49px 0px 16px" } : { lg: "20px 120px 0px 120px", md: "20px 16px 0px 49px", xs: "20px 16px 0px 49px" },

                            color: "var(--white-color)",
                            fontSize: { lg: "64px", md: "64px", sm: "40px", xs: "40px", xxs: "10px" },
                            textTransform: "uppercase",
                            fontWeight: "900",
                            lineHeight: { lg: "76px", md: "76px", xs: "50px" },
                            fontVariant: "all-small-caps",
                            letterSpacing: selectLanguage === "en" && { lg: "2.56px", md: "2.56px", sm: "1.6px", xs: "1.6px" },
                            fontStyle: "normal",
                            whiteSpace: "nowrap",
                            fontFamily: "var(--English-font)",
                            width: selectLanguage === "en" ? { lg: "521px", md: "521px", xs: "325px" } : { lg: "464px", md: "464px", xs: "225px" }
                        }}
                    >
                        {selectLanguage === "en" ?
                            <>

                                {t("landingPageSection1.BetterSolution1")}<br />
                                {t("landingPageSection1.BetterSolution2")}<br />
                                {t("landingPageSection1.BetterSolution3")}
                            </>

                            :
                            <>
                                {t("landingPageSection1.BetterSolution1")}<br />
                                {t("landingPageSection1.BetterSolution2")}
                            </>


                        }

                    </Typography>

                    <Typography
                        sx={{
                            color: "var(--white-color)",
                            fontFamily: "var(--English-font)",
                            fontSize: { lg: "36px", md: "36px", xs: "22px" },
                            lineHeight: { lg: "36px", md: "36px", xs: "32px" },
                            fontWeight: "400",
                            fontVariant: "small-caps",
                            letterSpacing: "0",
                            marginTop: { lg: "24px", md: "24px", xs: "20px" },
                            padding: selectLanguage === "en" ? { lg: "0px 0px 0px 120px", xs: "0px 16px 0px 16px" } : { lg: "20px 120px 0px 120px", md: "0px 16px 0px 16px", xs: "0px 16px 0px 16px" },
                        }}
                    >
                        {t("landingPageSection1.WeHaveMission")}

                    </Typography>

                    <Button
                        onClick={handleContactUsClick}
                        disableRipple
                        disableTouchRipple
                        sx={{
                            padding: selectLanguage === "en" ? { lg: "0px 0px 0px 120px", xs: "0px 16px 0px 16px" } : { lg: "20px 120px 0px 120px", md: "0px 16px 0px 16px", xs: "0px 16px 0px 16px" },
                            '&:hover': {
                                backgroundColor: 'inherit',
                            },
                        }}
                    >
                        <div className="frame">
                            <div className="text-wrapper">{t("footer.CONTACTUS")}</div>
                            <img className="typcn-arrow-up" alt="Typcn arrow up" src={Arrow}
                                style={{
                                    transform: selectLanguage === "ar" ? "rotate(180deg)" : "",

                                }}
                            />
                        </div>
                    </Button>
                </Grid>
                <Grid item lg={5.9} sm={5.9} xs={12}
                    sx={{
                        display: "flex",
                        justifyContent: { lg: "start", md: "center", xs: "center" },
                        position: "relative",
                        bottom: { lg: "60px", md: "0px" },
                    }}
                >
                    <Box
                        sx={{
                            marginLeft: selectLanguage === "en" && { lg: "-36px", md: "36px", sm: "200px" },
                            marginRight: selectLanguage === "ar" && { lg: "-36px", md: "36px", sm: "200px" }

                        }}
                    >

                        <img className="computerImg" height="755px" src={selectLanguage === "en" ? com : comAr}></img>
                    </Box>

                    <Box
                        sx={{
                            position: "absolute",
                            right: selectLanguage === "en" && "0",
                            left: selectLanguage === "ar" && "0",
                            translate: "rotate",
                            transform: selectLanguage === "ar" && "rotate(180deg)",
                            top: { lg: "380px", md: "420px", sm: "420px", xs: "-70px" }
                        }}
                    >
                        <img className="CImg" src={C} style={{

                        }}></img>
                    </Box>

                </Grid>
            </Grid>



        </>
    )
}
export default SectionOne;