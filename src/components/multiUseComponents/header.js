import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
function Header({ bgImg, bgImgSm, title, desc }) {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Grid className="root-container"
                sx={{
                    backgroundImage: { lg: `url(${bgImg})`, md: `url(${bgImg})`, sm: `url(${bgImgSm})`, xs: `url(${bgImgSm})` },
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",

                }}

            >
                {/* <NavBar/> */}

                <Grid
                    sx={{


                        paddingLeft: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                        paddingRight: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                        paddingBottom: { lg: "121px", md: "121px", sm: "121px", xs: "100px" },
                        paddingTop: { lg: "182px", md: "182px", sm: "182px", xs: "174px" }
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: { lg: "40px", md: "40px", sm: "40px", xs: "13px" }
                        }}
                    >

                        {/* {t("contactUs.ContactUs")} */}
                        {title}
                        {desc}
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Header