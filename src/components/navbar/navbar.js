import * as React from 'react';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from "../../assets/images/logo-white.svg"
import "../../assets/styles/variables.css";
import arrowRight from "../../assets/images/arrowRight.svg"
import LanguageSwitcher from './LanguageSwitcher';
import "./navbar.css"
import { useEffect } from 'react';
import LogoNav from '../landingPage/logoNav';
import AOS from "aos";
import {motion,AnimatePresence} from 'framer-motion'
import { Grid } from '@mui/material';


AOS.init();

const drawerWidth = "100%";
function NavBar(props) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Set isMounted to true after the component is mounted
        setIsMounted(true);
    }, []);
    const { t, i18n } = useTranslation();
    const navItems = [
        { title: t("navBar.Home"), path: "/" },
        { title: t("navBar.ABOUTUS"), path: "/AboutUs" },
        { title: t("navBar.SERVICES"), path: "/services" },
        { title: t("navBar.PORTFOLIO"), path: "/Portolios" },
        { title: t("navBar.BLOG"), path: "/blog" },
        { title: t("navBar.CAREER"), path: "/career" },
        { title: t("navBar.CONTACTUS"), path: "/Contact-Us" },
    ];
    const [selectedLink, setSelectedLink] = useState("");
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };
    const drawerStyles = {
        zIndex: '2',
        display: { xs: 'block', sm: 'block' },
        '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            marginTop: '0px',
            backgroundColor: 'var(--website-bg-color)',
            boxShadow: 'none',
            color: '#fff',
            animation: mobileOpen ? 'slideIn 0.5s ease' : 'slideOut 0.5s ',
        },
        '@keyframes slideIn': {
            '0%': {
                transform: 'translateX(-100%)',
            },
            '100%': {
                transform: 'translateX(0)',
            },
        },
        '@keyframes slideOut': {
            '0%': {
                transform: 'translateX(0)',
            },
            '100%': {
                transform: 'translateX(-100%)',
            },
        },
    };

    const { windowMenu } = props;
    const selectLanguage = i18n.language;
    const BurgerIcon = ({ isOpen }) => (
        <div
            style={{
                width: '24px',
                height: '24px',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                gap: "4px"
            }}
        >
            <div
                style={{
                    width: '24px',
                    height: '4px',
                    borderRadius: "16px",
                    backgroundColor: '#D0DEF3',
                    transformOrigin: 'bottom',
                    transform: isOpen && isMounted ? 'rotate(-45deg) translate(-5px, 6px)' : 'none',
                    animation: isOpen && isMounted ? 'rotateTopLine 0.3s ease' : 'rotateTopLineReverse 0.3s ease',
                }}
            ></div>
            <div
                style={{
                    width: '24px',
                    height: '4px',
                    borderRadius: "16px",

                    backgroundColor: '#D0DEF3',
                    opacity: isOpen && isMounted ? 0 : 1,
                    transition: 'opacity 0.5s ease',
                }}
            ></div>
            <div
                style={{
                    width: '24px',
                    height: '4px',
                    borderRadius: "16px",
                    backgroundColor: '#D0DEF3',
                    transformOrigin: 'top',
                    transform: isOpen && isMounted ? 'rotate(45deg) translate(-4px, -6px)' : 'none',
                    animation: isOpen && isMounted ? 'rotateBottomLine 0.3s ease' : 'rotateBottomLineReverse 0.3s ease',
                }}
            ></div>
        </div>
    );





    const handleContactUsClick = () => {
        // Navigate to the contact us page
        window.location.href = '/Contact-Us';
    };
    const handleBackToHomePage = () => {
        // Navigate to the home page
        window.location.href = '/';
    };

    const location = useLocation();
    const isContactUsPage = location.pathname === '/Contact-Us';




    const drawer = (
        <>
            <Box
                sx={{
                    textAlign: 'center',
                    position: "relative",
                    top: "100px",
                    zIndex: "2",

                }}>
                <List sx={{}}>
                    {navItems.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: "18px",
                                padding: "10px",
                                cursor: "pointer",
                                textDecoration: "none",
                            }}
                            component={Link}
                            to={item.path}

                        >
                            <Typography
                                sx={{

                                    fontSize: "24px",
                                    fontWeight: "400",
                                    fontFamily: "var(--English-font)",
                                    color: item.path === location.pathname ? '#21D6D6' : '#fff',
                                    width: "100%",
                                    height: "100%"

                                }}
                                onClick={() => handleLinkClick(index)}

                            >
                                {item.title}
                            </Typography>
                        </Box>

                    ))}
                </List>
            </Box>
        </>

    );


    const handleLinkClick = (index) => {
        setSelectedLink(index);
        if (mobileOpen === true) {
            handleDrawerToggle();
        }
    };
    const container = windowMenu !== undefined ? () => window().document.body : undefined;
    return (
        <>
        <Grid>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
            duration:2
        }}
        >
            <CssBaseline />
            <AppBar component="nav"
                sx={{
                    overflowY: "hidden",
                    position: "absolute",
                    paddingLeft: selectLanguage === "en" ? { lg: "96px", sm: "6px", xs: "26px" } : { lg: "56px", sm: "26px", xs: "26px" },
                    paddingRight: selectLanguage === "en" ? { lg: "56px", sm: "26px", xs: "26px" } : { lg: "96px", sm: "6px", xs: "6px" },
                    boxShadow: "none",
                    paddingTop: { lg: "26px", sm: "36px", xs: "36px" },
                    paddingBottom: "20px",
                    backgroundColor: mobileOpen === false ? "transparent" : "var(--website-bg-color)",
                    fontFamily: "var(--English-font)",
                    transition: mobileOpen === true ? 'background-color 0s ease-out' : 'background-color 0s ease', // Adjust the duration as needed
                    transitionDelay: mobileOpen ? '0.5s' : '0s', // Adjust the delay as needed


                }}
            >
                <Toolbar className='root-container' sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0px 0px",
                    width: "100%",

                }}>
                    <Box className="logoGap" sx={{ display: "flex", alignItems: "center" }}>

                        <Box style={{ cursor: "pointer", zIndex: "3", position: "relative",width:"103px",height:"57px" }} onClick={handleBackToHomePage}>
                            <LogoNav/>
                        </Box>

                        <Box sx={{ display: { lg: "flex", xs: 'none', sm: 'none' } }}>
                            {navItems.slice(1, 6).map((items, index) => (
                                <Typography
                                    className='navText'
                                    key={index}
                                    component={Link}
                                    to={items.path}
                                    sx={{
                                        display: "flex",
                                        color: items.path === location.pathname ? '#21D6D6' : '#fff',
                                        transition: 'color 0.5s ease',
                                        marginRight: '8px',
                                        width: "115px",
                                        textAlign: "center",
                                        justifyContent: "center",
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        lineHeight: "36px",
                                        fontFamily: "var(--English-font)",
                                        cursor: "pointer",
                                        textTransform: "uppercase",
                                        textDecoration: "none",
                                        ":hover":{
                                            color:"var(--header-color)"

                                        }

                                    }}
                                    onClick={() => handleLinkClick(index)}
                                >
                                    {items.title}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        gap: { lg: "24px", xs: "0px" },
                        width: "auto"

                    }}>
                        <LanguageSwitcher />
                        <Box sx={{
                            display: { lg: "block", xs: 'none', sm: 'none' },
                            cursor: "pointer"
                        }}
                            onClick={handleContactUsClick}

                        >
                            <Box
                                sx={{
                                    borderRadius: '36px',
                                    border: isContactUsPage ? '1px solid var(--header-color)' : '1px solid #FFF',
                                    color: 'var(--white-color)',
                                    padding: '8px 24px',
                                    display: 'flex',
                                    gap: "16px"
                                }}
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

                        </Box>
                        <IconButton
                            // disableScrollLock
                            className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                            sx={{
                                display: { lg: 'none' },
                                color: '#fff',
                                padding: "0px",
                                paddingLeft: selectLanguage === "en" ? "19px" : "0px",
                                paddingRight: selectLanguage === "ar" ? "19px" : "0px",
                                zIndex: "3",
                                position: "relative",
                            }}
                            disableRipple

                        >
                            <BurgerIcon isOpen={mobileOpen} />

                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                        BackdropProps: {
                            invisible: true,
                        },
                    }}
                    sx={drawerStyles}

                >
                    {drawer}
                </Drawer>

            </nav>
            <Box component="main" sx={{ paddingBottom: "20px", display: "none" }}>
                <Toolbar />
            </Box>

        </motion.div>
        </Grid>
         
        </>
     
    );
}
NavBar.propTypes = {
    windowMenu: PropTypes.func,
};

export default NavBar;
