import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import React, { useEffect, useRef, useState } from "react";
import numBg from "../../assets/images/numberBg.svg"
import numBgSm from "../../assets/images/numberBgSm.svg"

function NumberAbout() {
    const { t, i18n } = useTranslation();
    const selectLanguage = i18n.language;
    const numbers = [
        { id: 0, number: "40", Symbol: "K", title: "global happy client" },
        { id: 1, number: "245", Symbol: "", title: "team member" },
        { id: 2, number: "50", Symbol: "K", title: "project completed" },
        { id: 3, number: "550", Symbol: "", title: "digital products" }
    ]
    const [counters, setCounters] = useState(numbers.map(() => 0));
    const [isVisible, setIsVisible] = useState(false);
    const targetRef = useRef(null);
    const handleIntersection = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        });
    };
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, 
        });

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }
        return () => {
            observer.disconnect();
        };
    }, [targetRef]);

    useEffect(() => {
        let animationFrameId;

        const animateCounters = (timestamp) => {
            setCounters((prevCounters) =>
                prevCounters.map((counter, index) => {
                    const targetNumber = parseInt(numbers[index].number.replace("K", "000"));
                    const step = Math.ceil(targetNumber / 100);
                    const nextCounter = Math.min(counter + step, targetNumber);
                    return nextCounter;
                })
            );

            const allCountersReachedTarget = counters.every((counter, index) => counter >= parseInt(numbers[index].number.replace("K", "000")));

            if (!allCountersReachedTarget) {
                animationFrameId = requestAnimationFrame(animateCounters);
            }
        };

        const startAnimation = () => {
            animationFrameId = requestAnimationFrame(animateCounters);
        };

        if (isVisible) {
            startAnimation();
        }

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isVisible, counters, numbers]);
    return (
        <>
            <Grid
                ref={targetRef}
                sx={{
                    backgroundImage: { lg: `url(${numBg})`, md: `url(${numBg})`, sm: `url(${numBgSm})`, xs: `url(${numBgSm})` },
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            >
                <Grid
                    sx={{
                        paddingLeft: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                        paddingRight: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                        paddingTop: { lg: "48px", md: "48px", sm: "44px", xs: "44px" },
                        paddingBottom: { lg: "57px", md: "57px", sm: "49px", xs: "49px" }
                    }}
                >


                    <Grid container item>
                        <Grid md={4} sm={7} xs={12} lg={4.5}

                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: { lg: "24px", md: "24px", sm: "13px", xs: "13px" }
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
                                    numbers about CNEPHO
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "var(--white-color)",
                                        fontSize: { lg: "48px", md: "48px", sm: "48px", xs: "24px" },
                                        lineHeight: { lg: "normal", md: "normal", sm: "normal", xs: "normal" },
                                        fontWeight: "700",
                                        letterSpacing: selectLanguage === "en" && { lg: "1.92pxpx", md: "1.92px", sm: "1.92px", xs: "0.96px" },
                                        fontFamily: "var(--English-font)",
                                        paddingBottom: { lg: "0px", md: "0px", sm: "11px", xs: "11px" }

                                    }}
                                >
                                    our fun fact
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "var(--white-color)",
                                        fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "16px" },
                                        lineHeight: { lg: "36px", md: "36px", sm: "30px", xs: "30px" },
                                        fontWeight: "400",
                                        fontVariant: "small-caps",
                                        fontFamily: "var(--English-font)",
                                    }}
                                >
                                    Lorem ipsum dolor sit amet consectetur. Rhoncus proin eget parturient habitasse vel congue  Rhoncus proin
                                </Typography>
                            </Box>

                        </Grid>
                        <Grid lg={7.5} md={7.5} sm={5} xs={12} container>
                            <Grid lg={7} md={7} xs={12} sm={12}
                                sx={{
                                    marginTop: { lg: "61px", md: "50px", sm: "30px", xs: "30px" },
                                    paddingLeft: { lg: "50px", md: "10px", sm: "0px", xs: "0px" },
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: { lg: "50px", md: "50px", sm: "12px", xs: "12px" },
                                    marginBottom: { lg: "0px", md: "0px", sm: "0px", xs: "12px" }

                                }}
                            >
                                {numbers.slice(0, 2).map((item, index) => (


                                    <Box key={index}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            height: { lg: "67px", md: "67px", sm: "67px", xs: "54px" },


                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: "var(--white-color)",
                                                fontSize: { lg: "64px", md: "64px", sm: "48px", xs: "32px" },
                                                lineHeight: "normal",
                                                fontWeight: "700",
                                                letterSpacing: selectLanguage === "en" && { lg: "2.56px", md: "2.56px", sm: "1.28px", xs: "1.28px" },
                                                fontFamily: "var(--English-font)",

                                            }}
                                        >
                                            {counters[index]}{item.Symbol}
                                        </Typography>
                                        <Box>
                                            <Typography
                                                sx={{
                                                    color: "#21D6D6",
                                                    fontSize: { lg: "24px", md: "24px", sm: "16px", xs: "16px" },
                                                    lineHeight: "normal",
                                                    fontWeight: "600",
                                                    fontFamily: "var(--English-font)",
                                                    letterSpacing: selectLanguage === "en" && { lg: "0.96px", md: "0.96px", sm: "0.64px", xs: "0.64px" }

                                                }}
                                            >
                                                +
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: "var(--white-color)",
                                                    fontSize: { lg: "24px", md: "24px", sm: "16px", xs: "16px" },
                                                    lineHeight: "36px",
                                                    textTransform: "capitalize",
                                                    fontWeight: "400",
                                                    fontFamily: "var(--English-font)",
                                                    // textAlign:"justify"
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                        </Box>
                                    </Box>



                                ))}
                            </Grid>
                            <Grid lg={5} md={5} xs={12} sm={12}
                                sx={{
                                    marginTop: { lg: "61px", md: "50px", sm: "0px", xs: "0px" },
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: { lg: "50px", md: "50px", sm: "12px", xs: "12px" }

                                }}
                            >
                                {numbers.slice(2, 4).map((item, index) => (
                                    <Box key={index}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            height: "67px"
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: "var(--white-color)",
                                                fontSize: { lg: "64px", md: "64px", sm: "48px", xs: "32px" },
                                                lineHeight: "normal",
                                                fontWeight: "700",
                                                letterSpacing: selectLanguage === "en" && { lg: "2.56px", md: "2.56px", sm: "1.28px", xs: "1.28px" },
                                                fontFamily: "var(--English-font)",

                                            }}
                                        >
                                            {counters[index + 2]}{item.Symbol}
                                        </Typography>
                                        <Box>
                                            <Typography
                                                sx={{
                                                    color: "#21D6D6",
                                                    fontSize: { lg: "24px", md: "24px", sm: "16px", xs: "16px" },
                                                    lineHeight: "normal",
                                                    fontWeight: "600",
                                                    fontFamily: "var(--English-font)",
                                                    letterSpacing: selectLanguage === "en" && { lg: "0.96px", md: "0.96px", sm: "0.64px", xs: "0.64px" }

                                                }}
                                            >
                                                +
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: "var(--white-color)",
                                                    fontSize: { lg: "24px", md: "24px", sm: "16px", xs: "16px" },
                                                    lineHeight: "36px",
                                                    textTransform: "capitalize",
                                                    fontWeight: "400",
                                                    fontFamily: "var(--English-font)",
                                                    textAlign: "justify"
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                        </Box>
                                    </Box>

                                ))}
                            </Grid>
                        </Grid>

                    </Grid>


                </Grid>

            </Grid>
        </>
    )
}

export default NumberAbout