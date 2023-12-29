import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import person from "../../assets/images/person.svg"
function OurExperts() {
    const { t, i18n } = useTranslation();
    const selectLanguage = i18n.language;

    const persons = [
        { person1: "name", work: "Developer", img: person },
        { person1: "name", work: "Developer", img: person },
        { person1: "name", work: "Developer", img: person }
    ]

    return (
        <>
            <Grid
                sx={{
                    marginTop: { lg: "80px", md: "80px", sm: "35px", xs: "35px" },
                    paddingLeft: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                    paddingRight: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                    paddingBottom: { lg: "134px", md: "134px", sm: "40px", xs: "40px" },
                    position:"relative"
                }}
            >
                                <Box className="AboutUsBgSec"></Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: { lg: "24px", md: "24px", sm: "24px", xs: "12px" }
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
                            paddingBottom: { lg: "0px", md: "0px", sm: "0xp", xs: "8px" },

                        }}
                    >
                        know more about our experts
                    </Typography>

                    <Typography
                        sx={{
                            color: "var(--white-color)",
                            fontSize: { lg: "48px", md: "48px", sm: "48px", xs: "24px" },
                            lineHeight: { lg: "normal", md: "normal", sm: "normal", xs: "normal" },
                            fontWeight: "700",
                            letterSpacing: selectLanguage === "en" && { lg: "1.92pxpx", md: "1.92px", sm: "1.92px", xs: "0.96px" },
                            fontFamily: "var(--English-font)",
                            paddingBottom: { lg: "0px", md: "0px", sm: "16px", xs: "16px" },
                            width: "100%",
                            maxWidth: "669px"

                        }}
                    >
                        A team is like a puzzle—all the pieces fit together to create something beautiful!                    </Typography>

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
                        Lorem ipsum dolor sit amet consectetur. Rhoncus proin eget parturient habitasse vel congue at etiam iaculis. Enim cras aliquet quis et fringilla pharetra amet morbi sit. A praesent nibh sagittis augue. Eget proin at pretium et. Suspendisse accumsan sed at risus non.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        marginTop: { lg: "42px", md: "42px", sm: "40px", xs: "40px" }
                    }}
                >
                    <Box
                        sx={{
                            position: "relative",
                        
                        }}
                    >

                        <Grid container item 
                            sx={{
                                justifyContent: { lg: "space-between", md: "space-between", sm: "space-between", xs: "center" },
                                margin: { lg: "unset", md: "unset", sm: "0 auto", xs: "0 auto" },

                            }}
                        >
                            {persons.map((item, index) => (
                                <Grid lg={3.8}  md={3.8}  sm={5.8} xs={9.5}
                                    key={index}
                                    sx={{
                                        position: "relative",
                                        marginBottom:{lg:"unset",md:"unset",sm:"40px",xs:"40px"}

                                    }}
                                >
                                    <Box>
                                        <img loading="lazy" width="100%" src={item.img}></img>
                                    </Box>
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            bottom: "2px",
                                            backgroundColor: "var(--header-color)",
                                            borderRadius: "8px",
                                            width: "100%",
                                            height: "100%",
                                            maxHeight: { lg: "204px", md: "170px", sm: "204px", xs: "138px" },
                                            clipPath: "polygon(71% 2%, 100% 27%, 100% 100%, 50% 100%, 0 100%, 0 29%)",
                                        }}
                                    >

                                        <Box
                                            sx={{
                                                position: "absolute",
                                                bottom: "0px",
                                                backgroundColor: "#F1F4FF",
                                                borderRadius: "8px",
                                                width: "100%",
                                                height: "100%",
                                                maxHeight: { lg: "195px", md: "160px", sm: "195px", xs: "132px" },
                                                clipPath: "polygon(71% 5%, 100% 24%, 100% 100%, 50% 100%, 0 100%, 0 32%)",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    bottom: { lg: "29px", md: "29px", sm: "29px", xs: "20px" },
                                                    left: "50%",
                                                    transform: "translateX(-50%)",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: { lg: "24px", md: "24px", sm: "24px", xs: "19px" }
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        color: "var(--btn-text-color)",
                                                        textAlign: "center",
                                                        fontSize: { lg: "36px", md: "36px", sm: "36px", xs: "20px" },
                                                        fontWeight: "700",
                                                        lineHeight: "normal",
                                                        fontFamily: "var(--English-font)",
                                                        letterSpacing: selectLanguage === "en" && { lg: "1.44px", md: "1.44px", sm: "1.44px", xs: "0.8px" }

                                                    }}
                                                >
                                                    {item.person1}
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        color: "var(--header-color)",
                                                        fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "16px" },
                                                        fontWeight: "700",
                                                        fontFamily: "var(--English-font)",
                                                        letterSpacing: selectLanguage === "en" && { lg: "0.96", md: "0.96", sm: "0.96", xs: "0.64px" },
                                                        lineHeight: "normal",
                                                        textAlign: "center"
                                                    }}
                                                >
                                                    {item.work}
                                                </Typography>
                                            </Box>


                                        </Box>
                                    </Box>

                                </Grid>


                            ))}

                        </Grid>

                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default OurExperts