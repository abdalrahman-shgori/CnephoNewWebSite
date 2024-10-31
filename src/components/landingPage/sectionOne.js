import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Grid, Hidden, Typography } from "@mui/material";
import com from "../../assets/images/Rectangle.svg";
import comAr from "../../assets/images/RectangleAr.svg";
import C from "../../assets/images/C.svg";
import Arrow from "../../assets/images/BlueArrow.svg"
import { useTranslation } from "react-i18next";
import LottieAnimation from './lottie'; // Adjust the path as needed
import animationDataHome2 from '../../assets/HomePart1/HomePart1.json';
import animationDataHome3 from '../../assets/HomePart1/HomePart2.json';
import { motion } from 'framer-motion'
import { Link as ScrollLink, Element, scroller } from 'react-scroll';
import "./landingPage.css"
import Lottie from "react-lottie";
import OurSolution from './ourSolution';


function SectionOne() {

    const [scrolled, setScrolled] = useState(false);
    const [animatedRun, setAnimatedRund] = useState(true);
    const [showSection, setShowSection] = useState(false)
    const [scrollBarEnable,setScrollBarEnabel]=useState(true)
    const sectionRef = useRef(null);


    
    const scrollToSteps = () => {
        const stepsElement = document.getElementById('steps');
        
        if (stepsElement) {
            // const offset =
            //     window.innerWidth > 600 ? 0 : -40; 
            const targetPosition = stepsElement.getBoundingClientRect().top + window.scrollY - 20;
            const startPosition = window.scrollY;
            const startTime = performance.now();


            const scroll = (currentTime) => {
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / 1500, 1); // 500 milliseconds duration
                const newPosition = startPosition + progress * (targetPosition - startPosition);
                window.scrollTo(0, newPosition);
                if (progress < 1) {
                    requestAnimationFrame(scroll);
                    document.body.classList.add('no-scroll');
                }
                else{
                    document.body.classList.remove('no-scroll');

                }
               
            };

            requestAnimationFrame(scroll);
        }
    };

    useEffect(() => {
        if (scrolled) {
            
            scrollToSteps();

        }
    }, [scrolled]);

     
    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: animationDataHome3,
    };
    const { t, i18n } = useTranslation();
    const selectLanguage = i18n.language;
    const handleContactUsClick = () => {
        // Navigate to the contact us page
        window.location.href = '/Contact-Us';
    };
    console.log(animationDataHome2)
    return (

        <>
            <Element name="sectionOne ">

                <motion.div
                    initial={{ opacity: 0, y: scrolled ? 0 : 150 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: scrolled ? -50 : 0 }}
                    transition={{
                        duration: 1.5
                    }}
                    id="sectionOne"
                >
                    <Box className="we root-container" />
                    <Grid container className="root-container" sx={{
                        paddingTop: { lg: "110px", md: "110px", sm: "110px", xs: "116px" },
                        position: "relative",
                        paddingBottom: {xl:"200px", lg: "136px", md: "70px", sm: "60px", xs: "100px" },
                    }}>
                        <Grid item lg={5.6} md={5.6} sm={5.6} xs={12}
                            sx={{
                                height: "100%",
                                marginTop: { lg: "60px", md: "0px", sm: "0px", xs: "0px" }

                            }}>

                            <Typography
                                className="typing-animation"
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
                                    width: selectLanguage === "en" ? { lg: "100%", md: "521px", xs: "325px" } : { lg: "464px", md: "464px", xs: "225px" }
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

                            {/* <Button
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
                            </Button> */}
                        </Grid>
                        <Grid item lg={6.4} md={6.4} sm={6.4} xs={12}
                            sx={{
                                display: "flex",
                                justifyContent: { lg: "start", md: "center", xs: "center" },
                                position: "relative",
                                bottom: { lg: "50px", md: "50px", sm: "50px" },
                            }}
                        >
                            <Box
                                sx={{
                                    transform: selectLanguage === "ar" && "scaleX(-1)"
                                }}
                            >
                                <div style={{
                                    display: "flex",
                                    position: "relative",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%", 
                                }}>
                                    <LottieAnimation animationData={animationDataHome2} />
                                    <ScrollLink to='steps' duration={1500} smooth={true}>
                                    <Lottie
                                    

                                    width="100%" // Use a percentage to make it responsive
                                    isStopped={animatedRun}
                                    options={defaultOptions}
                                    style={{
                                        position: "absolute",
                                        top: "100%",
                                        left: "0",
                                        transform: "translate(-44.9%, -2.2%)",
                                        overflowY: "hidden",

                                    }}
                                />
                                    </ScrollLink>
                                   
                                </div>

                            </Box>

                            {/* <Box
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
                            </Box> */}

                        </Grid>

                    </Grid>
                </motion.div>
            </Element>

            <Element id='steps'>
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    animate={showSection === true ? { opacity: 1, y: 0 } : {}}
                    exit={showSection === true ? { opacity: 0, y: -50 } : {}}
                    transition={{ duration: 2  }} // Adjust this value to your desired duration in seconds
                >
                    <OurSolution />
                </motion.div>
            </Element>


        </>

    )
}
export default SectionOne;