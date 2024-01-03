import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Navbar from './components/navbar/navbar';

import ThemeSettings from './pagedirection/ThemeSettings';
import ThemeLocalization from './locals/ThemeLocalization';
import { useTranslation } from 'react-i18next';
import LandingPage from './components/landingPage/landingPage';
import ContactUs from './components/contactUs/contactUs';
import AboutUs from './components/aboutUs/aboutUs';
import Portfolio from './components/portfolios/portfolio';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { Box } from '@mui/material';
import logo from "./assets/images/logo-white.svg"
import Abdooo from './components/logoSvg';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
   const [landingPageLoaded, setLandingPageLoaded] = useState(false);
   const navigate = useNavigate();
   const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  
  useEffect(() => {
   const handleScrollToTop = () => {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   };
   handleScrollToTop();
   const simulateLandingPageLoading = () => {
     setTimeout(() => {
       setLandingPageLoaded(true);
     }, 2500);
   };
   if (window.location.pathname === '/') {
     simulateLandingPageLoading();
   }
   return () => {
     window.removeEventListener("scroll", handleScrollToTop);
   };
 }, [navigate]);

  return (
   <>

{window.location.pathname === '/' && !landingPageLoaded ? (
        <Box
        sx={{
         display:"flex",
         justifyContent:"center",
         alignItems:"center",
         height:"100vh",
         width:{lg:"20%",md:"20%",sm:"20%",xs:"30%"},
         marginLeft:"auto",
         marginRight:"auto",
         overflowY:"hidden"
        }}
        >
       <Abdooo/>
        </Box>
      ) : (
        <ThemeSettings>
          <ThemeLocalization>
            <NavBar />
            <AnimatePresence mode='wait'>
  <Routes>
    <Route key="landing" path='/' element={<LandingPage />} />
    <Route key="contact" path='/Contact-Us' element={<ContactUs />} />
    <Route key="about" path='/AboutUs' element={<AboutUs />} />
    <Route key="portfolio" path='/Portolios' element={<Portfolio />} />
  </Routes>
</AnimatePresence>
            <Footer />
          </ThemeLocalization>
        </ThemeSettings>
     
      )}



   </>
  );
}

export default App;
