import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from "react-i18next";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousal.css'; // Import your custom styles

import { Box, Button, Grid, Typography, button } from '@mui/material';
import greenShape from "../../assets/images/SolutionCard.svg";
import ArrowRight from "../../assets/images/Group.svg"
import ArrowLeft from "../../assets/images/arrowRightCarousal.svg"
import ui from "../../assets/images/ui.svg"


const Carousel = (props) => {
    const [progressBarWidth, setProgressBarWidth] = useState(0);

    const { t, i18n } = useTranslation();

    const items = [
        { id: "0", name: "UI/UX design", img: greenShape, desc: "our customers get solutions and businesses opportunities instead of just project" },
        { id: "1", name: "Web development", img: greenShape, desc: "our customers get solutions and businesses opportunities instead of just project" },
        { id: "2", name: "Cyber Security", img: greenShape, desc: "our customers get solutions and businesses opportunities instead of just project" },
        { id: "3", name: "business planning", img: greenShape, desc: "our customers get solutions and businesses opportunities instead of just project" }
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
    useEffect(() => {
        const handleResize = () => {
            // Force a re-render to recalculate the current slide
            setForceRerender(prev => !prev);
        };
        // Function to recalculate currentSlide based on window width
      

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
        // Remove event listener when the component unmounts
        return () => {
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
            <Slider ref={sliderRef} {...settings} key={forceRerender}
                centerPadding="0px" // Adjust the value for the desired gap

            >


                {items.map((item, idx) => (
                    <Grid key={idx} className=""
                   
                    >
                        <Box
                            sx={{
                                backgroundColor: "#FFFFFF",
                                height: "295px",
                                width: "99%",
                                maxWidth:"285px",
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
                                <img src={greenShape} alt="Green Shape" />

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
                            backgroundColor: "white",
                            height: "5px",
                            borderRadius: "8px",
                        }}
                    >
                        <Box
                            className="progress-bar"
                            sx={{
                                transition: "width 0.5s ease-in-out",
                                width:
                                {
                                    lg: `${Math.min(((currentSlide + 4) / settings.slidesToShow) * 100, 100)}%`,
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
                        cursor: { lg: "pointer", md: "pointer", sm: "unset", xs: "unset" }
                    }}
                    onClick={handleNext}


                >
                    <img src={selectedLanguage === "en" ? ArrowLeft : ArrowLeft}></img>
                </Grid>

            </Grid>


        </Grid>
    );
};

// const Card = ({ title, content }) => (
//     <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
//         <h3>{title}</h3>
//         <p>{content}</p>
//     </div>
// );

export default Carousel;
