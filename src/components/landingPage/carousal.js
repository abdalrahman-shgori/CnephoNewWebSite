import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from "react-i18next";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousal.css';
import { Box, Button, Grid, Typography, button } from '@mui/material';
import greenShape from "../../assets/images/SolutionCard.svg";
import uiux from "../../assets/images/UiUx.svg"
import ArrowRight from "../../assets/images/Group.svg"
import ArrowLeft from "../../assets/images/arrowRightCarousal.svg"
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from 'framer-motion'
import UiUx from './UiUxSvg';
import WebSvg from './webDevelopmentSvg';
import CyperSecuritySvg from './cyperSecuritySvg';
import CalendarSvg from './CalendarSvg';
import { Slideshow } from '@mui/icons-material';

const Carousel = (props) => {




    const [progressBarWidth, setProgressBarWidth] = useState(0);

    const { t, i18n } = useTranslation();
    useEffect(() => {
        AOS.init({
            disable: "",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);



    const items = [
        { id: 0, name: "UI/UX design", img: <UiUx />, desc: "our customers get solutions and businesses opportunities instead of just project" },
        { id: 1, name: "Web development", img: <WebSvg />, desc: "our customers get solutions and businesses opportunities instead of just project" },
        { id: 2, name: "Cyber Security", img: <CyperSecuritySvg />, desc: "our customers get solutions and businesses opportunities instead of just project" },
        { id: 3, name: "business planning", img: <CalendarSvg />, desc: "our customers get solutions and businesses opportunities instead of just project" }
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    const selectedLanguage = i18n.language;
    const [forceRerender, setForceRerender] = useState(false);

    const settings = {
        dots: false, // Disable default dots
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
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
                breakpoint: 890,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: false,
                    initialSlide: 1,
                },
            },
        ],


    };


    const sliderRef = useRef(null);
    console.log(currentSlide)
    const handleNext = () => {
        if (window.innerWidth < 1381 && currentSlide < 1) {
            sliderRef.current.slickNext();
        }
        else if (window.innerWidth < 890 && currentSlide < 2) {
            sliderRef.current.slickNext();

        }
        else if (window.innerWidth < 560 && currentSlide < 3) {
            sliderRef.current.slickNext();

        }
        console.log(sliderRef.current.state.breakpoint, "wke")
        if (window.innerWidth < 1381 && currentSlide < 1) {
            props.onNextClick();

        }
        else if (window.innerWidth < 890 && currentSlide < 2) {
            props.onNextClick();

        }

        else if (window.innerWidth < 560 && currentSlide < 3) {
            props.onNextClick();

        }


    };

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
        if (window.innerWidth < 1381 && currentSlide <= 1 && currentSlide > 0) {
            props.onNextClick();
        }
        else if (window.innerWidth < 890 && currentSlide <= 2 && currentSlide > 0) {
            props.onNextClick();

        }
        else if (window.innerWidth < 560 && currentSlide <= 3 && currentSlide > 0) {
            props.onNextClick();

        }
    };
    useEffect(() => {
        let prevWindowWidth = window.innerWidth;
        const handleResize = () => {
            const currentWindowWidth = window.innerWidth;

            // Check if the window width has changed
            if (currentWindowWidth !== prevWindowWidth) {
                // Force a re-render to recalculate the current slide
                setForceRerender(prev => !prev);

                // Update the previous window width
                prevWindowWidth = currentWindowWidth;
            }
        };
        // Function to recalculate currentSlide based on window width
        const calculateCurrentSlide = () => {
            const newCurrentSlide = sliderRef.current ? sliderRef.current.innerSlider.state.currentSlide : 0;
            setCurrentSlide(newCurrentSlide);
        };

        // Initial calculation when the component mounts
        calculateCurrentSlide();

        // Add event listener for window resize
        window.addEventListener('resize', calculateCurrentSlide);
        window.addEventListener('resize', handleResize);
        // Remove event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', calculateCurrentSlide);
            window.removeEventListener('resize', handleResize);
        };
    }, [sliderRef, forceRerender]);


    return (
        <Grid className="carousel-container"
            sx={{
                paddingLeft: { lg: "107px", xs: "0px" },
                paddingRight: { lg: "107px", xs: "0px" },
                paddingTop: { lg: "80px", md: "0px", sm: "0px", xs: "30px" },


            }}
        >

            <Slider onSwipe={props.onNextClick} ref={sliderRef} {...settings} key={forceRerender}
                centerPadding="0px" // Adjust the value for the desired gap

            >


                {items.map((item, idx) => (
                    <Grid key={idx}

                    >


                        <Box
                            sx={{
                                backgroundColor: "#FFFFFF",
                                height: "295px",
                                width: "99%",
                                maxWidth: "285px",
                                borderRadius: "66px 8px 8px 8px",
                                position: "relative",
                                margin: "0 auto",

                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "-67px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    zIndex: 1, // Add this line
                                }}
                            >
                                {/* <img src={item.img} alt="Green Shape" /> */}
                                {item.img}

                            </Box>

                            <Typography
                                sx={{
                                    textAlign: "center",
                                    color: "var(--btn-text-color)",
                                    fontSize: "24px",
                                    fontWeight: "700",
                                    fontFamily: "var(--English-font)",
                                    lineHeight: "40px",
                                    fontVariant: "small-caps",
                                    whiteSpace: "nowrap",
                                    position: "absolute",
                                    left: "50%", // Center horizontally
                                    transform: "translateX(-50%)",
                                    top: "84px",
                                    letterSpacing: selectedLanguage === "en" && "0.96px",




                                }}
                            >
                                {item.name}
                                <div
                                    style={{
                                        border: "none",
                                        width: "97px",
                                        borderTop: "4px solid #313D72",
                                        margin: "0 auto",
                                        marginTop: "8px",
                                        borderRadius: "4px"
                                    }}
                                />
                            </Typography>
                            <Typography
                                sx={{
                                    textAlign: "justify",
                                    letterSpacing: selectedLanguage === "en" && "0.64",
                                    color: "var(--btn-text-color)",
                                    fontSize: "16px",
                                    fontWeight: "400",
                                    fontFamily: "var(--English-font)",
                                    lineHeight: "40px",
                                    fontVariant: "small-caps",
                                    position: "absolute",
                                    left: "50%", // Center horizontally
                                    transform: "translateX(-50%)",
                                    top: "150px",
                                    width: "100%",
                                    paddingLeft: "24px",
                                    paddingRight: "24px",

                                }}
                            >
                                {item.desc}
                            </Typography>




                        </Box>
                    </Grid>
                ))}

                {/* Add more cards as needed */}
            </Slider>
            <Grid item container spacing={0}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: { lg: "20px", xs: "19px" },
                    paddingRight: { lg: "20px", xs: "29px" },
                    marginTop: { lg: "24px", md: "24px", sm: "24px", xs: "40px" },
                    direction: "ltr",

                }}
            >
                <Grid item lg={1} md={1} sm={1} xs={3}
                    sx={{

                        textAlign: "left",
                        cursor: { lg: "pointer", md: "pointer", sm: "unset", xs: "unset" }
                    }}
                    onClick={handlePrev}

                >

                    <img src={selectedLanguage === "en" ? ArrowRight : ArrowRight}></img>
                </Grid>


                <Grid item lg={10} md={10} sm={10} xs={6} className="progress-bar-container"

                >
                    <Box
                        sx={{
                            backgroundColor: "#D4DFFF",
                            height: "5px",
                            borderRadius: "8px",

                            boxShadow: "2px 4px 8px 0px rgba(255, 255, 255, 0.16)"

                        }}
                    >
                        <Box
                            className="progress-bar"
                            sx={{
                                transition: "width 0.5s ease-in-out",
                                width:
                                {
                                    lg: window.innerWidth > 1380 ?
                                        `${Math.min(((currentSlide + 4) / settings.slidesToShow) * 100, 100)}%`
                                        :
                                        `${Math.min(((currentSlide + 3) / settings.slidesToShow) * 100, 100)}%`
                                    ,
                                    md: `${Math.min(((currentSlide + 3) / settings.slidesToShow) * 100, 100)}%`,
                                    sm: `${Math.min(((currentSlide + 2) / settings.slidesToShow) * 100, 100)}%`,
                                    xs: `${Math.min(((currentSlide + 1) / settings.slidesToShow) * 100, 100)}%`
                                }
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item lg={1} md={1} sm={1} xs={3}
                    sx={{
                        textAlign: "right",
                        cursor: { lg: "pointer", md: "pointer", sm: "unset", xs: "unset" },
                        textDecoration: "none"
                    }}



                >
                    <Button
                        onClick={handleNext}
                        disableRipple
                        disableTouchRipple
                        sx={{ backgroundColor: "transparent", '&:hover': { backgroundColor: "transparent" } }}


                    >

                        <img src={selectedLanguage === "en" ? ArrowLeft : ArrowLeft}></img>
                    </Button>

                </Grid>

            </Grid>


        </Grid>
    );
};
export default Carousel;
