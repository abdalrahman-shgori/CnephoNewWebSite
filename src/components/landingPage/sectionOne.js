import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Grid, Typography } from "@mui/material";
import com from "../../assets/images/Rectangle.svg";
import comAr from "../../assets/images/RectangleAr.svg";
import C from "../../assets/images/C.svg";
import Arrow from "../../assets/images/BlueArrow.svg"
import { useTranslation } from "react-i18next";
import LottieAnimation from './lottie'; // Adjust the path as needed
import animationDataHome2 from '../../assets/HomePart1/HomePart1.json';
import animationDataHome3 from '../../assets/HomePart1/HomePart2.json';
import {motion} from 'framer-motion'


import "./landingPage.css"
import Lottie from "react-lottie";
import OurSolution from './ourSolution';
function SectionOne() {
    const [isFirstScroll, setIsFirstScroll] = useState(true);
    const [animationRun, setAnimationRun] = useState(true);
    const [showSteps, setShowSteps] = useState(false);
    const elementRef = useRef(null);
    const scrollToSteps = () => {
        const element = elementRef.current;
        const targetOffset = element.offsetTop;
        const duration = 1000;
        const startingY = window.pageYOffset;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    
        const linearEase = (time, start, change, duration) => {
          return (change * time) / duration + start;
        };

        const animateScroll = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            window.scrollTo(0, linearEase(elapsedTime, startingY, targetOffset - startingY, duration));
      
            if (elapsedTime < duration) {
              requestAnimationFrame(animateScroll);
              setAnimationRun(false);
            } else {
              window.scrollTo(0, targetOffset);
              setIsFirstScroll(false);
            }
          };
      
          requestAnimationFrame(animateScroll);
        };
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollDirection = scrollTop >= 0 ? 'down' : 'up';
            const threshold = 20;
        
            if (isFirstScroll && scrollDirection === 'down' && scrollTop <= threshold) {
              scrollToSteps();
            }
        
            // Check if the user has scrolled past the "steps" section
            const stepsElement = elementRef.current;
            const stepsOffset = stepsElement.offsetTop;
        
            if (scrollTop >= stepsOffset) {
              setShowSteps(true);
            } else {
              setShowSteps(false);
            }
          };
          useEffect(() => {
            window.addEventListener('scroll', handleScroll);
        
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, [isFirstScroll]);
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

    const seke = ()=>{
        setIsFirstScroll(false)
    }
    
    return (

        <>

            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            >

            <Grid container className="we root-container" sx={{
                 paddingTop: { lg: "110px", md: "110px", sm: "110px", xs: "116px" },
                position:"relative",
                paddingBottom:{lg:"122px",md:"122px",sm:"60px",xs:"60px"},
            }}>
                <Grid item lg={5.6} sm={5.6} xs={12}
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
                <Grid item lg={6} sm={6.4} xs={12}
                    sx={{
                        display: "flex",
                        justifyContent: { lg: "start", md: "center", xs: "center" },
                        position: "relative",
                        bottom: { lg: "60px", md: "0px" },
                        
                     
                    }}
                >
                    <Box>
<div style={{
  display: "flex",
  position: "relative",
  flexDirection: "column",
  alignItems: "center",
  justifyContent:"center",
  width: "100%", // Make sure the container takes up the full width
}}>
  <LottieAnimation animationData={animationDataHome2} />
  <Lottie
  
    width="100%" // Use a percentage to make it responsive
    isStopped={animationRun}
    options={defaultOptions}
    style={{
      position: "absolute",
      top: "100%",
      left: "0",
      transform: "translate(-44.9%, -2.2%)",
      overflowY: "hidden",
    
    }}
  />
</div>

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
            </motion.div>
            <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isFirstScroll === false ? { opacity: 1, y: 0 } : {}}
        exit={isFirstScroll === false ? { opacity: 0, y: -50 } : {}}
        id="steps"
        ref={elementRef}
      >
        <OurSolution />
      </motion.div>


        </>

    )
}
export default SectionOne;