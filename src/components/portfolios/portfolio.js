import React from "react";
import HeaderPortfolio from "./header";
import NavBar from "../navbar/navbar";
import PortfolioList from "./PortfolioList";
import Footer from "../footer/footer";
import Makeappointement from "../landingPage/MakeAppointement";
import { Grid } from "@mui/material";
import './PortfolioList.css'

function Portfolio() {

    return (
        <>
            <div className="root-container">
                {/* <NavBar /> */}
                <div className="PortfolioBgFirst">
                    <HeaderPortfolio />
                    <PortfolioList />
                </div>

            </div>
            <Makeappointement />
            {/* <Footer /> */}
        </>


    )
}

export default Portfolio