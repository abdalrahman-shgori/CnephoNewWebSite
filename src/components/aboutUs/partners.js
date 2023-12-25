import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";


function Partner() {
    const { t, i18n } = useTranslation();
    const selectLanguage = i18n.language;

    return (
        <>
            <Grid
                sx={{
                    marginTop: { lg: "80px", md: "80px", sm: "76px", xs: "76px" },
                    paddingLeft: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                    paddingRight: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                }}
            >
                <Grid container>
                    <Grid lg={6}>

                        <Box>
                            <Typography
                                sx={{
                                    color: "var(--header-color)",
                                    fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "24px" },
                                    lineHeight: "normal",
                                    fontWeight: "400",
                                    letterSpacing: selectLanguage === "en" && { lg: "0.96px", md: "0.96px", sm: "0.96px", xs: "0.64px" },
                                    fontFamily: "var(--English-font)",

                                }}
                            >
                                Partners
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
                                Our Best Partners
                            </Typography>
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
                    </Grid>
                    <Grid lg={6}>2</Grid>

                </Grid>

            </Grid>
        </>
    )
}

export default Partner