import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Navbar from './components/navbar/navbar';
import Test from './components/navbar/test';
import ThemeSettings from './pagedirection/ThemeSettings';
import ThemeLocalization from './locals/ThemeLocalization';
import { useTranslation } from 'react-i18next';

function App() {
   const { t, i18n } = useTranslation();
  // moment().locale("en_us");
  // window.document.body.style.zoom = 1;
  document.body.dir = i18n.dir();

  return (
   <>

    <ThemeSettings>
<ThemeLocalization> 
   <Routes>
    <Route path='about' element={<Navbar/>}/>
    <Route path='/' element={<Test/>}/>

   </Routes>
   </ThemeLocalization>
   </ThemeSettings>



   </>
  );
}

export default App;
