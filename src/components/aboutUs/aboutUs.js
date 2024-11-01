import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, Button, CircularProgress } from "@mui/material";
import aboutUsBg from "../../assets/images/AboutUsBg.svg"
import aboutUsBgSm from "../../assets/images/AboutUsBgSm.svg"
import Header from "../multiUseComponents/header";
import group from "../../assets/images/aboutUsGroup.svg"
import CustomProgressBar from "./progress";
import arrowRight from "../../assets/images/arrowRight.svg"
import WhyChoose from "./whyChooseUs";
import NumberAbout from "./numberAboutUs";
import MoreAbout from "./moreAbout";
import OurExperts from "./ourExperts";
import Makeappointement from "../landingPage/MakeAppointement";
import "./aboutUs.css"

function AboutUs() {

    const [pageLoaded, setPageLoaded] = useState(false);
    const images = [aboutUsBg, aboutUsBgSm, group];

    useEffect(() => {
        const checkPageLoaded = async () => {
            console.log("checking ...");
            try {
                const areImagesLoaded = await Promise.all(images.map((src) => {
                    return new Promise((resolve, reject) => {
                        const image = new Image();
                        image.onload = () => resolve(true);
                        image.onerror = () => reject(false);
                        image.src = src;
                    });
                }));

                if (areImagesLoaded.every((loaded) => loaded)) {
                    setPageLoaded(true);
                }
            } catch (error) {
                console.error("Error loading images:", error);
            }
        };

        // Call the function initially
        checkPageLoaded();

        // Add an event listener for further checks, if needed
        window.addEventListener("load", checkPageLoaded);

        return () => {
            window.removeEventListener("load", checkPageLoaded);
        };
    }, []);


    const { t, i18n } = useTranslation();
    const selectLanguage = i18n.language;

    const handleContactUsClick = () => {
        // Navigate to the contact us page
        window.location.href = '/Contact-Us';
    };
    if (!pageLoaded) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <>
        <Box className="root-container"
        sx={{
            position:"relative"
        }}
        >
        <Box className="AboutUsBgFirst root-container" />

        </Box>

            <Header
                bgImg={aboutUsBg}
                bgImgSm={aboutUsBgSm}
                title={
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "var(--white-color)",
                            fontSize: { lg: "48px", md: "48px", sm: "48px", xs: "24px" },
                            fontWeight: "700",
                            lineHeight: { lg: "48px", md: "48px", sm: "48px", xs: "36px" },
                            fontVariant: "all-small-caps",
                            fontFamily: "var(--English-font)",
                            width: "100%",
                            maxWidth: { lg: "780px", md: "780px", sm: "780px", xs: "300px" },
                            margin: "0 auto"

                        }}

                    >
                        {/* {t("contactUs.ContactUs")} */}
                        our team provide creative solutions for your creative ideas
                    </Typography>
                }
                desc={
                    <Typography
                        sx={{
                            textAlign: "center",
                            fontStyle: "normal",
                            color: "var(--white-color)",
                            fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "16px" },
                            fontWeight: "400",
                            lineHeight: { lg: "36px", md: "36px", sm: "36px", xs: "30px" },
                            fontFamily: "var(--English-font)",
                            fontVariant: "small-caps"
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur. Rhoncus tincidunt vitae viverra donec. In urna massa lacinia ut. Amet lorem facilisi tristique eget urna ac elementum sit aliquet.

                    </Typography>

                }
            />



            <Grid className="root-container"
                sx={{
                    // backgroundImage: {
                    //     lg: `url(${Vector})`,
                    //     md: `url(${Vector})`,
                    //     sm: `url(${Vector})`,
                    //     xs: `url(${Vector2})`,// Use proper template literals and url function
                    // },
                    // backgroundPosition: { lg: "0 -620px", xl: "0 -700px", md: "0 -600px", sm: "0 -840px", xs: "0 -520px" },
                    // backgroundRepeat: "no-repeat",
                    // backgroundSize: {lg:"cover",md:"cover",sm:"cover",xs:"contain"},
                    paddingTop: { lg: "60px", md: "60px", sm: "50px", xs: "50px" },
                    position: "relative"


                }}
            >
                <Box className="AboutUsBgThird" />

                <Grid container
                    sx={{
                        paddingLeft: { lg: selectLanguage === "en" ? "120px" : "0px", md: selectLanguage === "en" ? "16px" : "0px", sm: "16px", xs: "16px" },
                        paddingRight: { lg: selectLanguage === "ar" ? "120px" : "0px", md: selectLanguage === "ar" ? "16px" : "0px", sm: "16px", xs: "16px" },
                    }}
                >

                    <Grid item sm={12} xs={12} md={6.2} lg={6.2}
                        sx={{
                            paddingRight: selectLanguage === "en" && { lg: "51px", md: "51px", sm: "0px", xs: "0px" },
                            paddingLeft: selectLanguage === "ar" && { lg: "38.5px", md: "19px", sm: "0px", xs: "0px" }

                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: { lg: "24px", md: "24px", sm: "17px", xs: "17px" }
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
                                Who we are
                            </Typography>
                            <Typography
                                sx={{
                                    color: "var(--white-color)",
                                    fontSize: { lg: "48px", md: "48px", sm: "48px", xs: "24px" },
                                    lineHeight: { lg: "normal", md: "normal", sm: "normal", xs: "normal" },
                                    fontWeight: "700",
                                    letterSpacing: selectLanguage === "en" && { lg: "1.92pxpx", md: "1.92px", sm: "1.92px", xs: "0.96px" },
                                    fontFamily: "var(--English-font)",
                                    paddingBottom: { lg: "0px", md: "0px", sm: "16px", xs: "16px" }

                                }}
                            >
                                An essential aspect of creativity is not afraid to fail
                            </Typography>
                            <Box
                                sx={{
                                    display: { lg: "none", md: "none", sm: "block", xs: "block" },
                                    paddingBottom: "64px"

                                }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                    }}
                                >


                                    <img
                                        width="100%"
                                        alt="group of people"
                                        style={{ height: "100%", zIndex: "2", position: "relative" }}
                                        src={group}
                                    //   onLoad={() => setImageLoaded(true)}
                                    //   onError={() => setImageLoaded(true)} 
                                    // For simplicity, mark as loaded even on error
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: "-30px",
                                            left: "35px",
                                            width: '90px',
                                            height: '90px',
                                            border: '2px solid var(--header-color)',
                                            transform: 'rotate(45deg)',
                                            borderRadius: '24px',
                                            zIndex: '1',
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: "-20px",
                                            right: "32px",
                                            width: '105px',
                                            height: '105px',
                                            border: '2px solid var(--header-color)',
                                            transform: 'rotate(45deg)',
                                            borderRadius: '24px',
                                            zIndex: '3',
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: "-39px",
                                            right: "32px",
                                            width: '105px',
                                            height: '105px',
                                            backgroundColor: "var(--white-color)",
                                            transform: 'rotate(45deg)',
                                            borderRadius: '24px',
                                            zIndex: '3',
                                        }}
                                    />


                                    <Box
                                        sx={{
                                            position: "absolute",
                                            zIndex: "4",
                                            display: "flex",
                                            flexDirection: "column",
                                            right: "45px",
                                            bottom: "-18px",
                                            gap: "4px"
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                textAlign: selectLanguage === "en" ? "right" : "left",
                                                width: "100%",
                                                maxWidth: selectLanguage === "en" ? "104px" : "56px",
                                                color: "var(--btn-text-color)",
                                                fontSize: "32px",
                                                fontWeight: "900",
                                                letterSpacing: "1.28px",
                                                lineHeight: "normal",
                                                fontFamily: "var(--English-font)",



                                            }}
                                        >
                                            12
                                        </Typography>
                                        <Typography
                                            sx={{

                                                color: "var(--btn-text-color)",
                                                width: "100%",
                                                maxWidth: "126px",
                                                fontSize: "14px",
                                                fontWeight: "700",
                                                letterSpacing: "0.96px",
                                                lineHeight: "normal",
                                                textAlign: "center",
                                                fontFamily: "var(--English-font)",
                                                position: "relative",
                                                left: "24px"


                                            }}
                                        >
                                            years of experience
                                        </Typography>
                                    </Box>

                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: { lg: "block", md: "block", sm: "none", xs: "none" }
                                }}
                            >

                                <Typography
                                    sx={{
                                        color: "var(--white-color)",
                                        fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "16px" },
                                        lineHeight: { lg: "38px", md: "36px", sm: "30px", xs: "30px" },
                                        fontWeight: "400",
                                        fontVariant: "small-caps",
                                        fontFamily: "var(--English-font)",
                                        textAlign: "justify",


                                    }}
                                >
                                    Lorem ipsum dolor sit amet consectetur. Mattis nisi aliquam amet sed volutpat in at commodo. Sollicitudin laoreet nulla aliquam ultrices nibh massa.Sollicitudin laoreet nulla aliquam ultrices nibh massa.
                                </Typography>

                                <CustomProgressBar />
                            </Box>


                        </Box>

                    </Grid>
                    <Grid item sm={12} xs={12} md={5.8} lg={5.8}
                        sx={{
                            display: "flex",
                            justifyContent: "end"
                        }}
                    >
                        <Box
                            sx={{
                                display: { lg: "block", md: "block", sm: "none", xs: "none" },
                                justifyContent: "end",


                            }}
                        >
                            <Box
                                sx={{
                                    position: "relative"
                                }}
                            >

                                <img width="100%" style={{ height: "100%", maxHeight: "650px", zIndex: "2", position: "relative" }} src={group}></img>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: "-40px",
                                        left: "40px",
                                        width: '191px',
                                        height: '191px',
                                        border: '2px solid var(--header-color)',
                                        transform: 'rotate(45deg)',
                                        borderRadius: '24px',
                                        zIndex: '1',
                                        display: { lg: "block", md: "none" }
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: "-50px",
                                        right: "72px",
                                        width: '191px',
                                        height: '191px',
                                        border: '2px solid var(--header-color)',
                                        transform: 'rotate(45deg)',
                                        borderRadius: '24px',
                                        zIndex: '3',
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: "-86px",
                                        right: "72px",
                                        width: '191px',
                                        height: '191px',
                                        backgroundColor: "var(--white-color)",
                                        transform: 'rotate(45deg)',
                                        borderRadius: '24px',
                                        zIndex: '3',
                                    }}
                                />


                                <Box
                                    sx={{
                                        position: "absolute",
                                        zIndex: "4",
                                        display: "flex",
                                        flexDirection: "column",
                                        right: "120px",
                                        bottom: "-48px",
                                        gap: "4px"
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            textAlign: selectLanguage === "en" ? "right" : "left",
                                            width: "100%",
                                            maxWidth: selectLanguage === "en" ? "120px" : "80px",
                                            color: "var(--btn-text-color)",
                                            fontSize: "64px",
                                            fontWeight: "900",
                                            letterSpacing: "2.56px",
                                            lineHeight: "normal",
                                            fontFamily: "var(--English-font)",



                                        }}
                                    >
                                        12
                                    </Typography>
                                    <Typography
                                        sx={{

                                            color: "var(--btn-text-color)",
                                            width: "100%",
                                            maxWidth: "136px",
                                            fontSize: "24px",
                                            fontWeight: "700",
                                            letterSpacing: "0.96px",
                                            lineHeight: "normal",
                                            textAlign: "center",
                                            fontFamily: "var(--English-font)",
                                            position: "relative",
                                            left: "20px"


                                        }}
                                    >
                                        years of experience
                                    </Typography>
                                </Box>

                            </Box>

                        </Box>
                        <Box
                            sx={{
                                display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
                                flexDirection: "column"

                            }}
                        >
                            <Typography
                                sx={{
                                    color: "var(--white-color)",
                                    fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "16px" },
                                    lineHeight: { lg: "36px", md: "36px", sm: "30px", xs: "30px" },
                                    fontWeight: "400",
                                    fontVariant: "small-caps",
                                    fontFamily: "var(--English-font)",
                                    textAlign: "justify",


                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur. Mattis nisi aliquam amet sed volutpat in at commodo. Sollicitudin laoreet nulla aliquam ultrices nibh massa.Sollicitudin laoreet nulla aliquam ultrices nibh massa.
                            </Typography>

                            <CustomProgressBar />
                        </Box>
                    </Grid>

                    <Box
                        sx={{
                            borderRadius: '36px',
                            border: '1px solid #FFF',
                            color: 'var(--white-color)',
                            padding: '8px 24px',
                            display: 'flex',
                            gap: "16px",
                            width: "auto",
                            marginLeft: selectLanguage === "en" && { lg: "0", md: "0", sm: "auto", xs: "auto" },
                            marginRight: selectLanguage === "ar" && { lg: "0", md: "0", sm: "auto", xs: "auto" },
                            marginTop: { lg: "40px", md: "40px", sm: "28px", xs: "28px" },
                            marginBottom: { lg: "120px", md: "120px", sm: "42.5px", xs: "42.5px" },
                            cursor: "pointer",

                        }}
                        onClick={handleContactUsClick}
                    >

                        <Button

                            sx={{
                                color: "var(--white-color)",
                                padding: "6px 0px",
                                whiteSpace: "nowrap",
                                fontWeight: "600",
                                fontFamily: "var(--English-font)",
                                '&:hover': {
                                    backgroundColor: 'transparent', // Set the background color to transparent or any value you want
                                },
                            }}
                            disableRipple
                        >
                            {t("navBar.CONTACTUS")}

                        </Button>
                        <img src={arrowRight} alt="Arrow"
                            style={{
                                transform: selectLanguage === "ar" ? "rotate(180deg)" : "",
                            }}
                        />
                    </Box>

                </Grid>




                <WhyChoose />

            </Grid>

            <div className="root-container">
                <NumberAbout />
                <MoreAbout />
                <OurExperts />
                <Makeappointement />
            </div>
            


        </>
    )
}

export default AboutUs