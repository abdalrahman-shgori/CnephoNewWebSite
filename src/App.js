import { Route, Routes } from 'react-router-dom';
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

function App() {
   const { t, i18n } = useTranslation();
  // moment().locale("en_us");
  // window.document.body.style.zoom = 1;
  document.body.dir = i18n.dir();

  return (
   <>

    <ThemeSettings>
<ThemeLocalization> 
   <NavBar/>
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/Contact-Us' element={<ContactUs/>} />
    <Route path='/AboutUs' element={<AboutUs/>} />
    <Route path='/Portolios' element={<Portfolio/>} />
   </Routes>
   <Footer/>
   </ThemeLocalization>
   </ThemeSettings>



   </>
  );
}

export default App;
