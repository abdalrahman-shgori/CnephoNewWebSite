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
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from "../../assets/images/Logo.svg"
import "../../assets/styles/variables.css";
import arrowRight from "../../assets/images/arrowRight.svg"
import LanguageSwitcher from './LanguageSwitcher';
import "./navbar.css"
const drawerWidth = "100%";
function NavBar(props) {
    const { t, i18n } = useTranslation();
    const navItems = [
        { title: t("navBar.Home"), path: "/" },
        { title: t("navBar.ABOUTUS"), path: "/About_us" },
        { title: t("navBar.SERVICES"), path: "/services" },
        { title: t("navBar.PORTFOLIO"), path: "/portfolio" },
        { title: t("navBar.BLOG"), path: "/blog" },
        { title: t("navBar.CAREER"), path: "/career" },
        { title: t("navBar.CONTACTUS"), path: "/Contact-Us" },
    ];
    const [selectedLink, setSelectedLink] = useState(
        localStorage.getItem("contact") || 0
    );    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const { windowMenu } = props;
    const selectLanguage = i18n.language;
    const handleLinkClick = (index) => {
        localStorage.setItem("contact", index);
        setSelectedLink(index); // Update the state with the selected link index
        if(mobileOpen === true) {
            handleDrawerToggle()
        }

    };

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
        // document.body.style.overflow = isVisible ?'hidden' : "sroll";

        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      };
    
      const handleContactUsClick = () => {
        // Navigate to the contact us page
        window.location.href = '/Contact-Us'; // Replace '/contact-us' with the actual URL of your contact us page
      };
      const handleBackToHomePage = () => {
        // Navigate to the home page
        window.location.href = '/'; // Replace '/contact-us' with the actual URL of your contact us page
      };
   
      const location = useLocation();
      const isContactUsPage = location.pathname === '/Contact-Us';

    
    const drawer = (
        <>
        <Box
        sx={{
            display:"flex",
            justifyContent:"end"
        }}
        >

          <Button
            sx={{
                color:"var(--white-color)",
                fontSize:"24px",
                paddingLeft: selectLanguage === "en" ? "0px" : "20px",
                paddingRight: selectLanguage === "ar" ? "0px" : "20px",
                position:"relative",
                top:"38px",
            }}
            onClick={handleDrawerToggle}
            >
                X
            </Button>
            </Box>

            <Box sx={{ textAlign: 'center' ,position:"relative",top:"40px",zIndex:"2"}}>
          <List sx={{ }}>
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
                          
                          fontSize:"24px",
                          fontWeight:"400",
                          fontFamily: "var(--English-font)",
                          color: index === parseInt(selectedLink, 10) ? '#21D6D6' : '#fff',
                          width:"100%",
                          height:"100%"

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
    const container = windowMenu !== undefined ? () => window().document.body : undefined;
    return (
        <Box>
            <CssBaseline />
            <AppBar component="nav"
                sx={{
                    overflowY:"hidden",
                    position:"static",
                    paddingLeft: selectLanguage === "en" ? { lg: "96px", sm: "6px", xs: "6px" } : { lg: "56px", sm: "29px", xs: "29px" },
                    paddingRight: selectLanguage === "en" ? { lg: "56px", sm: "29px", xs: "29px" } : { lg: "96px", sm: "6px", xs: "6px" },
                    boxShadow: "none",
                    paddingTop: { lg: "26px", sm: "36px", xs: "36px" },
                    paddingBottom: "0px",
                    backgroundColor: "transparent",
                    fontFamily:"var(--English-font)",

                }}
            >
                <Toolbar className='root-container' sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0px 0px",
                    width:"100%",

                }}>
                    <Box className="logoGap" sx={{ display: "flex", alignItems: "center" }}>

                        <img style={{cursor:"pointer"}} onClick={handleBackToHomePage} src={Logo}></img>

                        <Box sx={{ display: { lg: "flex", xs: 'none', sm: 'none' } }}>
                            {navItems.slice(1, 6).map((items, index) => (
                                <Typography
                                    className='navText'
                                    key={index}
                                    component={Link}
                                    to={items.path}
                                    sx={{
                                        display: "flex",
                                        color: index === selectedLink ? '#21D6D6' : '#fff',
                                        transition: 'color 0.3s ease', 
                                        marginRight: '8px',
                                        width: "115px",
                                        textAlign: "center",
                                        justifyContent: "center",
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        lineHeight: "36px",
                                        fontFamily: "var(--English-font)",
                                        cursor: "pointer",
                                        textTransform:"uppercase",
                                        textDecoration:"none"
                                        
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
                        width:"auto"
                     
                    }}>
                        <LanguageSwitcher />
                        <Box sx={{
                            display: { lg: "block", xs: 'none', sm: 'none' },
                            cursor:"pointer"
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
                                        fontWeight:"600",
                                        fontFamily:"var(--English-font)",
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
                                zIndex:"0"
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
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: "0px", backgroundColor: "var(--website-bg-color)", boxShadow: "none", color: "#fff", },
                    }}
                >
                    {drawer}
                </Drawer>
                
            </nav>
            <Box component="main"  sx={{paddingBottom:"20px",display:"none"}}>
                <Toolbar/>
            </Box>
           
        </Box>
    );
}

NavBar.propTypes = {
    windowMenu: PropTypes.func,
};

export default NavBar;
