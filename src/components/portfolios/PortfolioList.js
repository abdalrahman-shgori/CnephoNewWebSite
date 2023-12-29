import React, { useEffect, useState } from 'react';
import { Button, Menu, MenuItem, Typography, Hidden, Grid, Box, CircularProgress } from '@mui/material';
import { ArrowDownward, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { keyframes } from '@emotion/react';
import { useTranslation } from "react-i18next";
import ArrowWhite from "../../assets/images/arrowRight.svg"
import './PortfolioList.css';
import AOS from "aos";
import Skeleton from '@mui/material/Skeleton';
import TestImg from "../../assets/images/PortfolioTestImg.svg"
import TestImg2 from "../../assets/images/viprankingcontrol.svg"
import TestImg3 from "../../assets/images/testImg3.svg"
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
    const [pageLoaded, setPageLoaded] = useState(false);
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
        { id: 1, title: 'broadnet', description: 'BroadNet is a prominent global business messaging solutions provider and a GSMA member. Broadnet offers a number of services .......', type: 'web development', img: TestImg },
        { id: 2, title: 'cheeze hospitality', description: 'Cheez Hospitality is building the bridge from local property owners, guides, and producers to worldwide traveleres, immersing .......', type: 'app', img: TestImg3 },
        { id: 3, title: 'vip parking', description: 'The primary objective of VIP Parking Control was to offer viable solutions that would mitigate the unnecessary stress .......', type: 'app', img: TestImg },
        { id: 4, title: 'sesamers', description: 'Sesamers is connecting founders & investors in better, more contextually-relevant ways based on their interest in attending upcoming Tech .....', type: 'social media', img: TestImg },
        { id: 5, title: 'fattal', description: 'Cheez Hospitality is building the bridge from local property owners, guides, and producers to worldwide traveleres, immersing .......', type: 'logo design', img: TestImg3 },
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

    const images = portfolioItems.map((item) => (item.img))
    console.log(images)
    useEffect(() => {
        const checkPageLoaded = async () => {
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
                    console.log("done")
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

    // if (!pageLoaded) {
    //     return (
    //         <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
    //             <CircularProgress />
    //         </Box>
    //     );
    // }
    return (
        <>

            <Grid
                sx={{
                    paddingLeft: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                    paddingRight: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                    marginTop: { lg: "48px", md: "48px", sm: "10px", xs: "10px" },
                    marginBottom: { lg: "80px", md: "80px", sm: "27px", xs: "27px" }
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
                                                fontStyle: "normal",

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

            <Grid className=''
                sx={{
                    marginTop: { lg: "80px", md: "80px", sm: "27px", xs: "27px" },

                    position: "relative"
                }}
            >
                <Box className="basicVector" />

                <Box className="rightVector" />
                <Box className="leftVector" />
                <Box className="PortfolioBgSec" />

                <Grid container className=''
                    sx={{
                        justifyContent: "center",
                        paddingLeft: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                        paddingRight: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                    }}
                >
                    {!pageLoaded ? (
<>
<Grid container 
sx={{
    display:"flex",
    justifyContent:{lg:"space-between",md:"space-between",sm:"space-between",xs:"center"},
    paddingBottom:"100px"
   
}}
>
{Array.from({ length: 2 }, (_, index) => (
    <Grid item lg={6} md={6} sm={6} xs={12} >
      <Box
        key={index}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          width:{lg:"97%",md:"97%",sm:"97%",xs:"100%"},
          marginBottom:index === 0 && {lg:"0px",md:"0px",sm:"40px",xs:"40px"}
        }}
      >
        <Skeleton variant="rectangular" width="100%" height={218} sx={{borderRadius:"16px"}} />
        <Skeleton width={100}  />
        <Skeleton width={160} />
        <Skeleton  height={100}/>
      </Box>
      </Grid>

    ))}
</Grid>


</>
                    ):
                    (
                        portfolioItems
                            .filter((item) => selectedType === 'all' || item.type === selectedType)
                            .map((item, index) => (
                                <Grid item
                                    key={item.id} lg={6} md={6} sm={6}
                                    sx={{
                                        display: "flex",
                                        justifyContent: index % 2 === 0 ? "start" : "start",
                                        ...selectLanguage === "en" && {
                                            paddingRight: {
                                                lg: index % 2 === 0 ? "45px" : "0px",
                                                md: index % 2 === 0 ? "45px" : "0px",
                                                sm: index % 2 === 0 ? "20px" : "0px",
                                                xs: "unset"
                                            }
                                        },
                                        ...selectLanguage === "en" && {
                                            paddingLeft: {
                                                lg: index % 2 !== 0 ? "45px" : "0px",
                                                md: index % 2 !== 0 ? "45px" : "0px",
                                                sm: index % 2 !== 0 ? "20px" : "0px",
                                                xs: "unset"
                                            }
                                        },
                                        ...selectLanguage === "ar" && {
                                            paddingLeft: {
                                                lg: index % 2 === 0 ? "45px" : "0px",
                                                md: index % 2 === 0 ? "45px" : "0px",
                                                sm: index % 2 === 0 ? "20px" : "0px",
                                                xs: "unset"
                                            }
                                        },
                                        ...selectLanguage === "ar" && {
                                            paddingRight: {
                                                lg: index % 2 !== 0 ? "45px" : "0px",
                                                md: index % 2 !== 0 ? "45px" : "0px",
                                                sm: index % 2 !== 0 ? "20px" : "0px",
                                                xs: "unset"
                                            }
                                        },
    
                                        // paddingRight: {
                                        //     lg: item.id % 2 !== 0 ? selectLanguage === "en" && "45px" : "0px",
                                        //     md: item.id % 2 !== 0 ? selectLanguage === "en" && "45px" : "0px",
                                        //     sm: item.id % 2 !== 0 ? selectLanguage === "en" && "20px" : "0px",
                                        //     xs: "unset"
                                        // },
    
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
                                        
                                        <img data-aos-duration="1500"
                                            data-aos={item.id % 2 === 0 ? "flip-left" : "flip-right"}
                                            style={{ maxWidth: "100%" }}
                                            src={item.img} />
    
                                        <Box data-aos-duration="1500" data-aos={item.id % 2 === 0 ? "fade-up" : "fade-up"}
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: { lg: "8px", md: "8px", xs: "0px", xs: "0px", },
                                                paddingLeft: "2px",
                                                paddingRight: "2px"
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
                                                    WebkitLineClamp: { lg: 3, md: 3, sm: 3, xs: 4 },
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
    
                            ))
                    )}
                    
                </Grid>
            </Grid>
        </>
    );
};

export default Portfolio;
