import React from "react";
import HeaderPortfolio from "./header";
import NavBar from "../navbar/navbar";
import PortfolioList from "./PortfolioList";
import Footer from "../footer/footer";
import Makeappointement from "../landingPage/MakeAppointement";
import { Box, Grid } from "@mui/material";
import './PortfolioList.css'

function Portfolio() {

    return (
        <>
            <div className="root-container">
                    <HeaderPortfolio />
                    <PortfolioList />
            </div>
            <Makeappointement />
            {/* <Footer /> */}
        </>


    )
}

export default Portfolio