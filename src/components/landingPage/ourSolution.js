import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import "./OurSolution.css"
import { useTranslation } from "react-i18next";
import CarouselComponent from "./carousal";
import CaseStudy from "./caseStudy";
import Footer from "../footer/footer";
import { motion, useAnimation } from 'framer-motion';


function OurSolution() {
    const { t, i18n } = useTranslation();
    const bg1AnimationControls = useAnimation();
    const bg3AnimationControls = useAnimation();


    const selectedLanguage = i18n.language;
    const animateBg1 = () => {
        bg1AnimationControls.start({
            x: [-200, 0], // Final x-axis position
            transition: {
                duration: 1, // Animation duration in seconds
                ease: 'easeInOut', // Easing function (optional)
            },
        });
    };
    const animateBg3 = () => {
        bg3AnimationControls.start({
            x: [400, 0], // Final x-axis position
            transition: {
                duration: 1, // Animation duration in seconds
            },
        });
    };
    const handleNextClick = () => {
        animateBg1();
        animateBg3();
        console.log("clicked")

    };
    return (
        <>
            <Grid className="root-container"
                sx={{
                    position: "relative",
                    bottom: { lg: "80px", md: "0px", sm: "0px", xs: "0px" },
                    marginBottom: "40px"
                }}
            >
                <Box
                    sx={{
                        textAlign: "center",
                        color: "var(--white-color)",
                        display: { lg: "none", md: "flex", sm: "flex", xs: "flex" },
                        flexDirection: "column",
                        gap: { lg: "0px", md: "0px", sm: "16px", xs: "12px" },
                        marginBottom: { lg: "0px", md: "85px", sm: "85px", xs: "85px" },
                    }}
                >

                    <Typography
                        sx={{
                            fontFamily: "var(--English-font)",
                            fontSize: { lg: "40px", md: "40px", sm: "26px", xs: "26px" },
                            fontWeight: "600",
                            fontVariant: "all-small-caps",
                            letterSpacing: selectedLanguage === "en" && { lg: "1.6px", md: "1.6px", xs: "1.04px" },
                            padding: 0,
                        }}
                    >
                        {t("landingPageSection2.weOffer")}
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: "var(--English-font)",
                            fontSize: { lg: "48px", md: "48px", sm: "26px", xs: "26px" },
                            fontWeight: "700",
                            fontVariant: "all-small-caps",
                            letterSpacing: selectedLanguage === "en" && { lg: "1.92px", md: "1.92px", xs: "1.04px" },
                            padding: "0 0"
                        }}
                    >
                        {t("landingPageSection2.SafeAnd")} <span style={{ color: "#21D6D6" }}> {t("landingPageSection2.sustainable")} </span>
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "var(--English-font)",
                            fontSize: { lg: "36px", md: "36px", sm: "26px", xs: "23px" },
                            fontWeight: "400",
                            fontVariant: "small-caps",
                            letterSpacing: selectedLanguage === "en" && { lg: "1.44px", md: "1.44px", xs: "0.92px" },
                            paddingLeft: { lg: "0px", md: "0px", xs: "55px" },
                            paddingRight: { lg: "0px", md: "0px", xs: "55px" },
                            textAlign: "center",
                        }}
                    >
                        {t("landingPageSection2.somethingknows")}
                    </Typography>
                </Box>
                <motion.div
                    initial={{ x: 0 }} // Initial x-axis position
                    animate={bg1AnimationControls}
                    exit={{ x: 0 }} // Exit animation (optional)
                >
                    <Grid className="bg1">
                        {/* Use motion.div for animation */}

                    </Grid>
                </motion.div>

                <Grid className="bg2"
                >
                </Grid>

                <motion.div
                    initial={{ x: 0 }} // Initial x-axis position
                    animate={bg3AnimationControls}
                    exit={{ x: 0 }}
                    style={{
                        position:"relative"
                    }}
                    transition={{
                        duration:2
                    }}
                // Exit animation (optional)
                >
                    <Grid className="bg3">

                    </Grid>
                </motion.div>

                <Box
                    sx={{
                        textAlign: "center",
                        color: "var(--white-color)",
                        display: { lg: "flex", md: "none", sm: "none", xs: "none" },
                        flexDirection: "column",
                        gap: { lg: "0px", md: "0px", sm: "16px", xs: "12px" },
                    }}
                >

                    <Typography
                        sx={{
                            fontFamily: "var(--English-font)",
                            fontSize: { lg: "40px", md: "40px", sm: "26px", xs: "26px" },
                            fontWeight: "600",
                            fontVariant: "all-small-caps",
                            letterSpacing: selectedLanguage === "en" && { lg: "1.6px", md: "1.6px", xs: "1.04px" },
                            padding: 0,
                        }}
                    >
                        {t("landingPageSection2.weOffer")}
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: "var(--English-font)",
                            fontSize: { lg: "48px", md: "48px", sm: "26px", xs: "26px" },
                            fontWeight: "700",
                            fontVariant: "all-small-caps",
                            letterSpacing: selectedLanguage === "en" && { lg: "1.6px", md: "1.6px", xs: "1.04px" },
                            padding: "0 0"
                        }}
                    >
                        {t("landingPageSection2.SafeAnd")} <span style={{ color: "#21D6D6" }}> {t("landingPageSection2.sustainable")} </span>
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "var(--English-font)",
                            fontSize: { lg: "36px", md: "36px", sm: "26px", xs: "23px" },
                            fontWeight: "400",
                            fontVariant: "small-caps",
                            letterSpacing: selectedLanguage === "en" && { lg: "1.44px", md: "1.44px", xs: "0.92pxpx" },
                            paddingLeft: { lg: "0px", md: "0px", xs: "45px" },
                            paddingRight: { lg: "0px", md: "0px", xs: "55px" },
                            textAlign: "center",
                        }}
                    >
                        {t("landingPageSection2.somethingknows")}
                    </Typography>
                </Box>
                <Box >
                    <CarouselComponent onNextClick={handleNextClick} />

                </Box>

                <CaseStudy />

            </Grid>

        </>
    )
}

export default OurSolution;
