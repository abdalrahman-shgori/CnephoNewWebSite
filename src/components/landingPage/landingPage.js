import React from "react";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
// import LottieAnimation from './lottie'; // Adjust the path as needed
// import animationDataHome2 from '../../assets/images/HomePart1/HomePart1.json';
import "./landingPage.css"
import SectionOne from "./sectionOne";
import OurSolution from "./ourSolution";


function LandingPage() {
    const { t, i18n } = useTranslation();
    const selectLanguage = i18n.language;

    return (
        <>
        <NavBar/>
           <SectionOne/>
           <OurSolution/>
           <Footer/>
        </>
    )
}
export default LandingPage;