import React, { useEffect, useState } from "react";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
// import LottieAnimation from './lottie'; // Adjust the path as needed
// import animationDataHome2 from '../../assets/images/HomePart1/HomePart1.json';
import "./landingPage.css"
import SectionOne from "./sectionOne";
import OurSolution from "./ourSolution";
import CaseStudy from "./caseStudy";
import OurClients from "./ourClients";
import Help from "./needHelp";
import OurAward from "./ourAward";
import Blog from "./blogs";
import Makeappointement from "./MakeAppointement";
function LandingPage() {
    const { t, i18n } = useTranslation();

  
    return (
        <>
        <div className="root-container">
        <SectionOne />
            <OurClients/>
            <Help/>
            <OurAward/>
            <Blog/>
            <Makeappointement/>
        </div>
            
        </>
    )
}
export default LandingPage;