import * as React from 'react';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from "../../assets/images/Logo.svg"
import "../../assets/styles/variables.css";
import arrowRight from "../../assets/images/arrowRight.svg"
import LanguageSwitcher from './LanguageSwitcher';

const drawerWidth = "100%";
function NavBar(props) {
    const { t, i18n } = useTranslation();
    const navItems = [
        { title: t("navBar.ABOUTUS"), path: "/About_us" },
        { title: t("navBar.SERVICES"), path: "/services" },
        { title: t("navBar.PORTFOLIO"), path: "/portfolio" },
        { title: t("navBar.BLOG"), path: "/blog" },
        { title: t("navBar.CAREER"), path: "/career" },
        { title: t("navBar.CONTACTUS"), path: "/contact us" },
    ];
    const [selectedLink, setSelectedLink] = useState(null);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { window } = props;
    const selectLanguage = i18n.language;
    const handleLinkClick = (index) => {
        setSelectedLink(index)
    };

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <List sx={{ marginTop: "97px" }}>
                {navItems.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "24px",
                            padding: "10px",
                            cursor: "pointer",
                            textDecoration: "none",
                            color: "#FFFFFF"
                        }}
                        component={Link}
                        to={item.path}
                    >
                        <Typography>
                            {item.title}
                        </Typography>
                    </Box>

                ))}
            </List>
        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box>
            <CssBaseline />
            <AppBar component="nav" color="transparent"
                sx={{
                    paddingLeft: selectLanguage === "en" ? { lg: "96px", sm: "6px", xs: "6px" } : { lg: "56px", sm: "29px", xs: "29px" },
                    paddingRight: selectLanguage === "en" ? { lg: "56px", sm: "29px", xs: "29px" } : { lg: "96px", sm: "6px", xs: "6px" },
                    boxShadow: "none",
                    paddingTop: { lg: "26px", sm: "36px", xs: "36px" },
                    paddingBottom: "40px",

                }}
            >
                <Toolbar sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0px 0px"
                }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "100px" }}>

                        <img src={Logo} ></img>

                        <Box sx={{ display: { lg: "block", xs: 'none', sm: 'none' } }}>
                            {navItems.slice(0, 5).map((items, index) => (
                                <Button
                                    key={index}
                                    // component={Link}
                                    // to={items.path}
                                    sx={{
                                        color: index === selectedLink ? '#21D6D6' : '#fff',
                                        marginRight: '8px',
                                        width: "115px",
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        lineHeight: "36px",
                                        fontFamily: "Source Sans Pro",
                                    }}
                                    onClick={() => handleLinkClick(index)}
                                >
                                    {items.title}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        gap: { lg: "24px", xs: "0px" }
                    }}>
                        <LanguageSwitcher />
                        <Box sx={{
                            display: { lg: "block", xs: 'none', sm: 'none' },
                        }}>
                            <Box
                                sx={{
                                    borderRadius: '36px',
                                    border: '1px solid #FFF',
                                    color: '#FFFFFF',
                                    padding: '8px 24px',
                                    display: 'flex',
                                    gap: "16px"
                                }}
                            >

                                <Button
                                    sx={{
                                        color: "#ffffff",
                                        padding: "6px 0px"
                                    }}

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
                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                            sx={{
                                display: { lg: 'none' },
                                color: '#fff',
                                padding: "0px",
                                paddingLeft: selectLanguage === "en" ? "19px" : "0px",
                                paddingRight: selectLanguage === "ar" ? "19px" : "0px",
                            }}
                            disableRipple
                        >
                            <MenuIcon />
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
                    sx={{

                        display: { xs: 'block', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: "100px", backgroundColor: "var(--website-bg-color)", boxShadow: "none", color: "#fff", },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ paddingBottom: "60px" }}>

                <Toolbar />

            </Box>
        </Box>
    );
}

NavBar.propTypes = {
    window: PropTypes.func,
};

export default NavBar;
