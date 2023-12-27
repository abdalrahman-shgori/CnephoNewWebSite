import React, { useEffect, useState } from 'react';
import { Button, Menu, MenuItem, Typography, Hidden, Grid, Box } from '@mui/material';
import TestImg from "../../assets/images/PortfolioTestImg.svg"
import TestImg2 from "../../assets/images/viprankingcontrol.svg"
import { ArrowDownward, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { keyframes } from '@emotion/react';
import { useTranslation } from "react-i18next";
import ArrowWhite from "../../assets/images/arrowRight.svg"
import './PortfolioList.css';
import AOS from "aos";
import "aos/dist/aos.css";
const titleStyle = {
    fontSize: { lg: "36px", md: "36px", sm: "28px", xs: "24px" },
    lineHeight: "36px",
    color: "var(--white-color)",
    fontVariant: "small-caps",
    fontStyle: "normal",
    textAlign: "justify",
    fontFamily: "var(--English-font)",
    fontWeight: "600"
}
const typeStyle = {
    fontSize: { lg: "24px", md: "24px", sm: "20px", xs: "18px" },
    lineHeight: "36px",
    color: "var(--header-color)",
    fontVariant: "small-caps",
    fontStyle: "normal",
    textAlign: "justify",
    fontFamily: "var(--English-font)",
    fontWeight: "400"
}
const descriptionStyle = {
    fontSize: { lg: "24px", md: "24px", sm: "20px", xs: "18px" },
    lineHeight: "36px",
    color: "var(--white-color)",
    fontVariant: "small-caps",
    fontStyle: "normal",
    textAlign: "justify",
    fontFamily: "var(--English-font)",
}
AOS.init();
const Portfolio = () => {
   
    const { t, i18n } = useTranslation();
    const selectLanguage = i18n.language

    const [selectedType, setSelectedType] = useState('all');
    console.log(selectedType);
    const [anchorEl, setAnchorEl] = useState(null);
    const types = ['all', 'app', 'web development', 'branding', 'social media', 'logo design'];

    const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
    const handleTypeChange = (type) => {
        setSelectedType(type);
        closeMenu();
    };
    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const closeMenu = () => {
        setAnchorEl(null);
    };

    const portfolioItems = [
        { id: 1, title: 'broadnet', description: 'BroadNet is a prominent global business messaging solutions provider and a GSMA member. Broadnet offers a number of services .......', type: 'web development', img: TestImg2 },
        { id: 2, title: 'cheeze hospitality', description: 'Cheez Hospitality is building the bridge from local property owners, guides, and producers to worldwide traveleres, immersing .......', type: 'app', img: TestImg2 },
        { id: 3, title: 'vip parking', description: 'The primary objective of VIP Parking Control was to offer viable solutions that would mitigate the unnecessary stress .........', type: 'branding', img: TestImg },
        { id: 4, title: 'sesamers', description: 'Sesamers is connecting founders & investors in better, more contextually-relevant ways based on their interest in attending upcoming Tech .....', type: 'social media', img: TestImg },
        { id: 5, title: 'fattal', description: 'Cheez Hospitality is building the bridge from local property owners, guides, and producers to worldwide traveleres, immersing .......', type: 'logo design', img: TestImg },
        // { id: 6, title: 'cheeze hospitality', description: 'Cheez Hospitality is building the bridge from local property owners, guides, and producers to worldwide traveleres, immersing .......', type: 'branding', img: TestImg },
        // { id: 7, title: 'cheeze hospitality', description: 'Cheez Hospitality is building the bridge from local property owners, guides, and producers to worldwide traveleres, immersing .......', type: 'social media', img: TestImg },
        // { id: 8, title: 'cheeze hospitality', description: 'Cheez Hospitality is building the bridge from local property owners, guides, and producers to worldwide traveleres, immersing .......', type: 'logo design', img: TestImg },
        // { id: 9, title: 'cheeze hospitality', description: 'Cheez Hospitality is building the bridge from local property owners, guides, and producers to worldwide traveleres, immersing .......', type: 'logo design', img: TestImg },
        // { id: 10, title: 'cheeze hospitality', description: 'Cheez Hospitality is building the bridge from local property owners, guides, and producers to worldwide traveleres, immersing .......', type: 'logo design', img: TestImg },
        // { id: 11, title: 'cheeze hospitality', description: 'Cheez Hospitality is building the bridge from local property owners, guides, and producers to worldwide traveleres, immersing .......', type: 'logo design', img: TestImg },
        // { id: 12, title: 'cheeze hospitality', description: 'Cheez Hospitality is building the bridge from local property owners, guides, and producers to worldwide traveleres, immersing .......', type: 'logo design', img: TestImg },
        // { id: 13, title: 'cheeze hospitality', description: 'Cheez Hospitality is building the bridge from local property owners, guides, and producers to worldwide traveleres, immersing .......', type: 'logo design', img: TestImg },
        // { id: 14, title: 'cheeze hospitality', description: 'Cheez Hospitality is building the bridge from local property owners, guides, and producers to worldwide traveleres, immersing .......', type: 'logo design', img: TestImg },
        // { id: 15, title: 'cheeze hospitality', description: 'Cheez Hospitality is building the bridge from local property owners, guides, and producers to worldwide traveleres, immersing .......', type: 'logo design', img: TestImg },
        // { id: 16, title: 'cheeze hospitality', description: 'Cheez Hospitality is building the bridge from local property owners, guides, and producers to worldwide traveleres, immersing .......', type: 'logo design', img: TestImg },
    ];
    return (
        <>
            <Grid
                sx={{
                    paddingLeft: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                    paddingRight: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                    marginTop: { lg: "48px", md: "48px", sm: "10px", xs: "10px" },
                    marginBottom: { lg: "80px", md: "80px", sm: "51px", xs: "51px" }
                }}
            >
                <header >
                    <nav>
                        <div className="nav-container ">
                            <Hidden mdUp>
                                {/* Display button only on medium and smaller screens */}
                                <Button className="nav-toggle" onClick={openMenu}
                                    sx={{
                                        color: selectedType ? "var(--header-color)" : "var(--btn-text-color)",
                                        fontSize: "24px",
                                        fontWeight: "700",
                                        lineHeight: "36px",
                                        fontVariant: "small-caps",
                                        fontFamily: "var(--English-font)",
                                        textAlign: "center",
                                        fontStyle: "normal",
                                    }}
                                    disableRipple
                                >
                                    {selectedType}
                                    {anchorEl === null ? (
                                        <KeyboardArrowDown sx={{ height: "24px", width: "24px", }} />

                                    ) :
                                        (
                                            <KeyboardArrowUp sx={{ height: "24px", width: "24px" }} />

                                        )
                                    }
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={closeMenu}
                                    className="nav-list-dropdown"
                                >
                                    {types.map((type) => (
                                        <MenuItem
                                            key={type}
                                            selected={type === selectedType}
                                            onClick={() => handleTypeChange(type)}
                                            sx={{
                                                color: type === selectedType ? "var(--header-color)" : "var(--btn-text-color)",
                                                fontSize: "16px",
                                                fontWeight: "600",
                                                lineHeight: "24px",
                                                fontVariant: "small-caps",
                                                fontFamily: "var(--English-font)",
                                                textAlign: "center",
                                                fontStyle: "normal"
                                            }}
                                            disableRipple
                                        >
                                            {type}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Hidden>
                            <Hidden mdDown>
                                {/* Display all types directly on large screens */}
                                <Box className=""
                                    sx={{
                                        display: "flex",
                                        gap: { lg: "80px", md: "50px" },
                                        justifyContent: { xl: "center", lg: "unset", md: "center" },
                                    }}
                                >
                                    {types.map((type) => (
                                        <Button
                                            key={type}
                                            className={type === selectedType ? 'active text-focus-in' : 'text-focus-in'}
                                            onClick={() => handleTypeChange(type)}
                                            disableRipple

                                            sx={{
                                                color: type === selectedType ? "var(--header-color)" : "var(--white-color)",

                                                fontSize: { lg: "24px", md: "20px" },
                                                // width:"100%",
                                                lineHeight: "36px",
                                                fontVariant: "small-caps",
                                                fontFamily: "var(--English-font)",
                                                fontWeight: "400",
                                                textAlign: "justify",
                                                fontStyle: "normal",
                                                whiteSpace: "nowrap",
                                                transition: "color 0.5s ease",
                                                padding: "0",
                                                margin: "0",
                                                '&:hover': {
                                                    backgroundColor: 'transparent', // Set the background color to transparent or any value you want
                                                },
                                            }}
                                        >
                                            {type}
                                        </Button>
                                    ))}
                                </Box>
                            </Hidden>
                        </div>
                    </nav>
                </header>
            </Grid>

            <Grid className='PortfolioBgSec' data-aos="fade-up"
                sx={{
                    marginTop: { lg: "80px", md: "80px", sm: "27px", xs: "27px" },
                    paddingLeft: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                    paddingRight: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                }}
            >
                <Grid container className=''
                    sx={{
                        justifyContent: "center",
                    }}
                >
                    {portfolioItems
                        .filter((item) => selectedType === 'all' || item.type === selectedType)
                        .map((item, index) => (
                            <Grid 
                            key={item.id} lg={6} md={6}
                                sx={{
                                    display: "flex",
                                    justifyContent: item.id % 2 === 0 && index > 0 ? "end" : "start",
                                    paddingLeft: {
                                        lg: item.id % 2 === 0 && index > 0 ? selectLanguage === "en" && "45px" : "45px",
                                        md: item.id % 2 === 0 && index > 0 ? selectLanguage === "en" && "45px" : "45px",
                                        // md: item.id % 2 === 0 ? "45px" : "",
                                        xs: "unset"
                                    },
                                    paddingRight: {
                                        lg: item.id % 2 !== 0 ? selectLanguage === "en" && "45px" : "45px",
                                        md: item.id % 2 !== 0 ? selectLanguage === "en" && "45px" : "45px",
                                        xs: "unset"
                                    },

                                    marginBottom: {
                                        lg: "40px",
                                        md: "40px",
                                        sm: "50px",
                                        xs: "50px"
                                    },
                                    animation: `${fadeIn} 1.5s ease-out 0s forwards`,
                                }}
                            >
                                <Box  
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: { lg: "24px", md: "24px", sm: "20px", xs: "20px" },
                                    }}
                                >
                                    <img data-aos-duration="1500"  data-aos={item.id % 2 === 0 ?  "flip-left" :  "flip-right"} style={{ maxWidth: "99.9%" }} src={item.img}></img>
                                    <Box data-aos-duration="1500"  data-aos={item.id % 2 === 0 ?  "fade-up" :  "fade-up"}
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: { lg: "8px", md: "8px", xs: "0px", xs: "0px", }
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                ...titleStyle
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                ...typeStyle,
                                                paddingBottom: "8px"
                                            }}
                                        >
                                            {item.type}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                ...descriptionStyle,
                                                overflow: 'hidden',
                                                display: '-webkit-box',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 3, // Show only 3 lines
                                            }}
                                        >
                                            {item.description}

                                        </Typography>
                                    </Box>
                                    <Box 
                                        sx={{
                                            display: "flex",
                                            justifyContent: selectLanguage === "en" ? "right" : "left",
                                        }}
                                    >
                                        <Button
                                            sx={{
                                                backgroundColor: "transparent",
                                                color: "var(--white-color)",
                                                fontSize: { lg: "24px", md: "24px", sm: "16px", xs: "16px" },
                                                lineHeight: "36px",
                                                fontVariant: "small-caps",
                                                fontWeight: "600",
                                                fontFamily: "var(--English-font)",
                                                border: "1px solid var(--white-color)",
                                                borderRadius: "36px",
                                                padding: "8px 24px",
                                                height: { lg: "52px", md: "52px", sm: "52px", xs: "44px" },
                                                gap: "16px",

                                            }}
                                        >
                                            {t("caseStudy.seeCase")}
                                            <img className="typcn-arrow-up" alt="Typcn arrow up" src={ArrowWhite}
                                                style={{
                                                    transform: selectLanguage === "ar" ? "rotate(180deg)" : "",

                                                }}
                                            />
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                </Grid>
            </Grid>
        </>
    );
};

export default Portfolio;