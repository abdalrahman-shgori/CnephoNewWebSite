import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import './contactUs.css'
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import detailsBg from "../../assets/images/detailsBg.svg"
import phone from "../../assets/images/phoneUS.svg"
import location from "../../assets/images/locationUs.svg"
import email from "../../assets/images/emailUs.svg"
import MenuItem from '@mui/material/MenuItem';
import contactImg from "../../assets/images/contactUsImg.svg"
import Arrow from "../../assets/images/BlueArrow.svg"
import whiteBG from "../../assets/images/whitebG.svg"

function ContactUs() {
    const [description,setDescription]=useState("")
    const [budget,setBudget]=useState("1000")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phoneNum,setPhoneNum]=useState("")

    const { i18n, t } = useTranslation();
    const selectLanguage = i18n.language

    const contactDetails = [
        { img: phone, type: t("contactUs.HotLine"), desc: "Lorem ipsum dolor sit amet consectetur.", moreDetails: t("contactUs.num") },
        { img: location, type: t("contactUs.Location"), desc: "Lorem ipsum dolor sit amet consectetur. A condimentum neque nisl posuere.", moreDetails: "" },
        { img: email, type: t("contactUs.email"), desc: "Lorem ipsum dolor sit amet consectetur.", moreDetails: "cnepho@example.io" }
    ]

    const currencies = [
        {
            value: '1000',
            label: '1000',
        },
        {
            value: '2000',
            label: '2000',
        },
        {
            value: '3000',
            label: '3000',
        },
        {
            value: '4000',
            label: '4000',
        },
    ];

    const typeStyle = {
        fontSize: { lg: "36px", md: "36px", sm: "36px", xs: "24px" },
        lineHeight: "48px",
        fontVariant: "small-caps",
        color: "var(--white-color)",
        fontWeight: "700",
        textAlign: "center",
        fontFamily: "var(--English-font)",
    }
    const descStyle = {
        fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "16px" },
        lineHeight: { lg: "36px", md: "36px", sm: "36px", xs: "28px" },
        fontVariant: "small-caps",
        color: "var(--white-color)",
        fontWeight: "400",
        textAlign: "center",
        fontFamily: "var(--English-font)",
    }
    const moreDetailsStyle = {
        fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "16px" },
        lineHeight: "36px",
        fontVariant: "small-caps",
        color: "var(--white-color)",
        fontWeight: "400",
        textAlign: "center",
        fontFamily: "var(--English-font)",
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("des",description,"budget",budget,"name",name,"email",email,"phone",phoneNum)
        // Add your form submission logic here
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
      };
      const handleBudgetChange = (event) => {
        setBudget(event.target.value);
      };
      const handleNameChange = (event) => {
        setName(event.target.value);
      };
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
      const handlePhoneChange = (event) => {
        setPhoneNum(event.target.value);
      };
      

    return (

        <>
            <Grid className="root-container"
            sx={{
            }}
            >

                <Grid className="contactUsBg">
                    <NavBar />

                    <Grid
                        sx={{
                            paddingLeft: { lg: "120px", md: "16px", sm: "16px", xs: "11px" },
                            paddingRight: { lg: "120px", md: "16px", sm: "16px", xs: "11px" },
                            paddingBottom: { lg: "121px", md: "121px", sm: "121px", xs: "100px" },
                            marginTop: { lg: "105px", md: "105px", sm: "105px", xs: "67px" }
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: { lg: "40px", md: "40px", sm: "40px", xs: "24px" }
                            }}
                        >
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    color: "var(--white-color)",
                                    fontSize: { lg: "48px", md: "48px", sm: "48px", xs: "24px" },
                                    fontWeight: "700",
                                    lineHeight: "48px",
                                    fontVariant: "small-caps",
                                    fontFamily: "var(--English-font)",
                                    textTransform: "capitalize"

                                }}
                            >
                                {t("contactUs.ContactUs")}
                            </Typography>
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    color: "var(--white-color)",
                                    fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "15px" },
                                    fontWeight: "400",
                                    lineHeight: { lg: "36px", md: "36px", sm: "36px", xs: "28px" },
                                    textTransform: "capitalize",
                                    fontFamily: "var(--English-font)",

                                }}
                            >
                                {t("contactUs.contactDesc")}
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>

                <Grid className="VectorBg"
                    sx={{
                        paddingTop: {lg:"80px",md:"80px",sm:"60px",xs:"60px"},
                        paddingLeft: { lg: "112px", md: "16px", sm: "16px", xs: "16px" },
                        paddingRight: { lg: "128px", md: "16px", sm: "16px", xs: "32px" },

                    }}
                >
                    

                    <Grid className="detailsBg"
                        sx={{

                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            border: "1px solid #fff",
                            borderRadius: "28px",
                            display: { lg: "block", md: "block", sm: "none", xs: "none" },
                            zIndex:"2",
                            position:"relative"
                        }}
                    >
                    
                    <Box
                    sx={{
                        boxShadow:" 2px 2px 2px 0px rgba(255, 255, 255, 0.16)",
                        background:"transparent",
                        width:"100.4%",
                        height:"100.4%",
                        borderRadius:"28px",
                        position:"absolute",
                        left:"2px",
                        top:"6px",
                        zIndex:"1",


                    }}
                    >
<Box
                    sx={{
                        boxShadow:" 2px 2px 2px 0px rgba(255, 255, 255, 0.16)",
                        background:"transparent",
                        width:"100%",
                        height:"100%",
                        borderRadius:"28px",
                        position:"absolute",
                        left:"8px",
                        top:"8px",
                        zIndex:"0"


                    }}
                    ></Box>
                    </Box>


                        <Grid className="" container justifyContent="center"
                            sx={{

                            }}
                        >
                            {contactDetails.map((item, index) => (
                                <Grid key={index} item lg={4} md={4}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        marginTop: "40px",
                                        paddingBottom: "48px",
                                        paddingLeft: { lg: "36px", md: "16px" },
                                        paddingRight: { lg: "36px", md: "16px" },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "24px"
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center"
                                            }}
                                        >

                                            <img src={item.img}></img>
                                        </Box>

                                        <Typography
                                            sx={{ ...typeStyle }}
                                        >
                                            {item.type}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                ...descStyle
                                            }}
                                        >
                                            {item.desc}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                ...moreDetailsStyle
                                            }}
                                        >
                                            {item.moreDetails}
                                        </Typography>
                                    </Box>

                                </Grid>
                            ))}


                        </Grid>
                    </Grid>




                    <Grid className=""
                        sx={{
                            // backgroundSize: "contain",
                            // backgroundRepeat: "no-repeat",
                            // backgroundPosition: "center",
                            // height: {lg:"404px",md:"100%"},
                            display: { lg: "none", md: "none", sm: "block", xs: "block" }
                            // Add other styles as needed
                        }}
                    >
                        <Grid className="" container justifyContent="center"
                            sx={{
                            }}
                        >
                            {contactDetails.map((item, index) => (
                                <Grid key={index} item className="detailsBg" lg={3.2}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        paddingLeft: "36px",
                                        paddingRight: "36px",
                                        backgroundSize: "cover",
                                        paddingTop: "44px",
                                        paddingBottom: "44px",
                                        marginBottom: index <= 1 && "40px",
                                        border: "1px solid #fff",
                                        borderRadius: "28px",
                                        width: "100%",
                                        position:"relative"
                                    }}
                                >
                                      
                    <Box
                    sx={{
                        boxShadow:" 2px 2px 2px 0px rgba(255, 255, 255, 0.16)",
                        background:"transparent",
                        width:"100.4%",
                        height:"100.4%",
                        borderRadius:"28px",
                        position:"absolute",
                        left:"6px",
                        top:"6px",
                        zIndex:"1",


                    }}
                    >
<Box
                    sx={{
                        boxShadow:" 2px 2px 2px 0px rgba(255, 255, 255, 0.16)",
                        background:"transparent",
                        width:"100%",
                        height:"100%",
                        borderRadius:"28px",
                        position:"absolute",
                        left:"8px",
                        top:"8px",
                        zIndex:"0"


                    }}
                    ></Box>
                    </Box>
                                    
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "14px"
                                        }}
                                    >
                                        
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center"
                                            }}
                                        >

                                            <img width="40px" height="40px" src={item.img}></img>
                                        </Box>

                                        <Typography
                                            sx={{ ...typeStyle }}
                                        >
                                            {item.type}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                ...descStyle
                                            }}
                                        >
                                            {item.desc}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                ...moreDetailsStyle
                                            }}
                                        >
                                            {item.moreDetails}
                                        </Typography>
                                    </Box>

                                </Grid>
                            ))}


                        </Grid>
                    </Grid>



                </Grid>
                <Grid className="bgContactForm">

                    <Grid
                        sx={{
                            paddingLeft: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                            paddingRight: { lg: "120px", md: "16px", sm: "16px", xs: "16px" },
                                marginBottom:{lg:"128px",md:"128px",sm:"60px",xs:"60px"}
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: { lg: "24px", md: "24px", sm: "24px", xs: "20px" },
                                marginTop: { lg: "64px", md: "64px", sm: "60px", xs: "60px" }
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "var(--header-color)",
                                    fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "16px" },
                                    lineHeight: "normal",
                                    fontWeight: "400",
                                    letterSpacing: selectLanguage === "en" && { lg: "0.96px", md: "0.96px", sm: "0.96px", xs: "0.64px" },
                                    fontFamily: "var(--English-font)",

                                }}
                            >
                                {t("contactUs.needSomthing")}
                            </Typography>
                            <Typography
                                sx={{
                                    color: "var(--white-color)",
                                    fontSize: { lg: "48px", md: "48px", sm: "48px", xs: "24px" },
                                    lineHeight: "normal",
                                    fontWeight: "700",
                                    letterSpacing: selectLanguage === "en" && { lg: "1.92pxpx", md: "1.92pxpx", sm: "1.92pxpx", xs: "0.96px" },
                                    fontFamily: "var(--English-font)",

                                }}
                            >
                                {t("contactUs.letUsKnow")}
                            </Typography>
                        </Box>

                        <Grid item container
                            sx={{
                                marginTop: { lg: "50px", md: "50px", sm: "50px", xs: "22px" }
                            }}
                        >
                            <Grid item lg={6.5} xs={12}>
                                <form onSubmit={handleSubmit}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: { lg: "36px", md: "36px", sm: "36px", xs: "26px" },
                                        }}
                                    >

                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: { lg: "24px", md: "24px", sm: "24px", xs: "12px" }
                                            }}
                                        >

                                            <Typography
                                                sx={{
                                                    color: "var(--white-color)",
                                                    fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "16px" },
                                                    lineHeight: "36px",
                                                    fontWeight: "400",
                                                    textTransform: "capitalize",
                                                    fontFamily: "var(--English-font)",

                                                }}
                                            >
                                                {t("contactUs.proDescription")}
                                                <span
                                                    style={{
                                                        color: "var(--header-color)",
                                                        position: "relative",
                                                        left: selectLanguage === "en" ? "6px" : "-6px",
                                                        bottom: "9px"
                                                    }}
                                                >*</span>
                                            </Typography>
                                            <Box
                                                sx={{

                                                }}
                                            >
                                                <TextField
                                                    sx={{
                                                        backgroundColor: "var(--white-color)",
                                                        borderRadius: "16px",
                                                        display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
                                                        height: "120px",
                                                        "& .MuiOutlinedInput-notchedOutline": {
                                                            borderColor: "transparent !important",
                                                            borderRadius: "16px !important",
                                                        },
                                                    }}
                                                    fullWidth
                                                    multiline
                                                    rows={4}
                                                    name="description"
                                                    value={description}
                                                    onChange={handleDescriptionChange}
                                                ></TextField>
                                            </Box>
                                            <TextField
                                                sx={{
                                                    backgroundColor: "var(--white-color)",
                                                    borderRadius: "16px",
                                                    display: { lg: "none", md: "none", sm: "none", xs: "block" },

                                                    "& .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "transparent !important",
                                                        borderRadius: "16px !important",
                                                    },
                                                }}
                                                fullWidth
                                                rows={2}
                                                multiline
                                                name="description"
                                                    value={description}
                                                    onChange={handleDescriptionChange}
                                                required
                                            ></TextField>

                                        </Box>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: { lg: "24px", md: "24px", sm: "24px", xs: "12px" }
                                            }}
                                        >

                                            <Typography
                                                sx={{
                                                    color: "var(--white-color)",
                                                    fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "16px" },
                                                    lineHeight: "36px",
                                                    fontWeight: "400",
                                                    textTransform: "capitalize",
                                                    fontFamily: "var(--English-font)",

                                                }}
                                            >
                                                {t("contactUs.budgetSize")}
                                                <span
                                                    style={{
                                                        color: "var(--header-color)",
                                                        position: "relative",
                                                        left: selectLanguage === "en" ? "6px" : "-6px",
                                                        bottom: "9px"
                                                    }}
                                                >*</span>
                                            </Typography>
                                            <Box
                                                sx={{

                                                }}
                                            >
                                                <TextField
                                                    defaultValue="1000"
                                                    sx={{
                                                        backgroundColor: "var(--white-color)",
                                                        borderRadius: "16px",
                                                        "& .MuiOutlinedInput-notchedOutline": {
                                                            borderColor: "transparent !important",
                                                            borderRadius: "16px !important",
                                                        },
                                                        height: { lg: "80px", md: "80px", sm: "80px", xs: "60px" },
                                                        paddingTop: { lg: "12px", md: "12px", sm: "12px", xs: "3px" },



                                                    }}
                                                    select
                                                    fullWidth
                                                    name="budget"
                                                    value={budget}
                                                    onChange={handleBudgetChange}
                                                    required
                                                >

                                                    {currencies.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}

                                                </TextField>
                                            </Box>


                                        </Box>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: { lg: "24px", md: "24px", sm: "24px", xs: "12px" }
                                            }}
                                        >

                                            <Typography
                                                sx={{
                                                    color: "var(--white-color)",
                                                    fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "16px" },
                                                    lineHeight: "36px",
                                                    fontWeight: "400",
                                                    textTransform: "capitalize",
                                                    fontFamily: "var(--English-font)",

                                                }}
                                            >
                                                {t("contactUs.name")}
                                                <span
                                                    style={{
                                                        color: "var(--header-color)",
                                                        position: "relative",
                                                        left: selectLanguage === "en" ? "6px" : "-6px",
                                                        bottom: "9px"
                                                    }}
                                                >*</span>
                                            </Typography>
                                            <Box
                                                sx={{

                                                }}
                                            >
                                                <TextField
                                                    sx={{
                                                        backgroundColor: "var(--white-color)",
                                                        borderRadius: "16px",
                                                        "& .MuiOutlinedInput-notchedOutline": {
                                                            borderColor: "transparent !important",
                                                            borderRadius: "16px !important",
                                                        },
                                                        height: { lg: "80px", md: "80px", sm: "80px", xs: "60px" },
                                                        paddingTop: { lg: "12px", md: "12px", sm: "12px", xs: "3px" },
                                                        "& input:-webkit-autofill": {
                                                            WebkitBoxShadow: "0 0 0 1000px var(--white-color) inset",
                                                            transition: "background-color 5000s ease-in-out 0s",
                                                        },


                                                    }}
                                                    fullWidth

                                                    name="name"
                                                    value={name}
                                                    onChange={handleNameChange}
                                                    required
                                                ></TextField>
                                            </Box>


                                        </Box>


                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: { lg: "24px", md: "24px", sm: "24px", xs: "12px" }
                                            }}
                                        >

                                            <Typography
                                                sx={{
                                                    color: "var(--white-color)",
                                                    fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "16px" },
                                                    lineHeight: "36px",
                                                    fontWeight: "400",
                                                    textTransform: "capitalize",
                                                    fontFamily: "var(--English-font)",

                                                }}
                                            >
                                                {t("contactUs.Email")}
                                                <span
                                                    style={{
                                                        color: "var(--header-color)",
                                                        position: "relative",
                                                        left: selectLanguage === "en" ? "6px" : "-6px",
                                                        bottom: "9px"
                                                    }}
                                                >*</span>
                                            </Typography>
                                            <Box
                                                sx={{

                                                }}
                                            >
                                                <TextField
                                                    sx={{
                                                        backgroundColor: "var(--white-color)",
                                                        borderRadius: "16px",
                                                        "& .MuiOutlinedInput-notchedOutline": {
                                                            borderColor: "transparent !important",
                                                            borderRadius: "16px !important",
                                                        },
                                                        height: { lg: "80px", md: "80px", sm: "80px", xs: "60px" },
                                                        paddingTop: { lg: "12px", md: "12px", sm: "12px", xs: "3px" },
                                                        "& input:-webkit-autofill": {
                                                            WebkitBoxShadow: "0 0 0 1000px var(--white-color) inset",
                                                            transition: "background-color 5000s ease-in-out 0s",
                                                        },


                                                    }}
                                                    fullWidth
                                                    type="email"

                                                    name="email"
                                                    onChange={handleEmailChange}
                                                    required
                                                ></TextField>
                                            </Box>


                                        </Box>


                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: { lg: "24px", md: "24px", sm: "24px", xs: "12px" }
                                            }}
                                        >

                                            <Typography
                                                sx={{
                                                    color: "var(--white-color)",
                                                    fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "16px" },
                                                    lineHeight: "36px",
                                                    fontWeight: "400",
                                                    textTransform: "capitalize",
                                                    fontFamily: "var(--English-font)",

                                                }}
                                            >
                                                {t("contactUs.PhoneNum")}
                                                <span
                                                    style={{
                                                        color: "var(--header-color)",
                                                        position: "relative",
                                                        left: selectLanguage === "en" ? "6px" : "-6px",
                                                        bottom: "9px"
                                                    }}
                                                >*</span>
                                            </Typography>
                                            <Box
                                                sx={{

                                                }}
                                            >
                                                <TextField
                                                type="number"
                                                    sx={{
                                                        backgroundColor: "var(--white-color)",
                                                        borderRadius: "16px",
                                                        "& .MuiOutlinedInput-notchedOutline": {
                                                            borderColor: "transparent !important",
                                                            borderRadius: "16px !important",
                                                        },
                                                        height: { lg: "80px", md: "80px", sm: "80px", xs: "60px" },
                                                        paddingTop: { lg: "12px", md: "12px", sm: "12px", xs: "3px" },
                                                        "& input:-webkit-autofill": {
                                                            WebkitBoxShadow: "0 0 0 1000px var(--white-color) inset",
                                                            transition: "background-color 5000s ease-in-out 0s",
                                                        },

                                                    }}
                                                    fullWidth

                                                    name="phoneNum"
                                                    value={phoneNum}
                                                    onChange={handlePhoneChange}
                                                    required
                                                ></TextField>
                                            </Box>


                                        </Box>
                                        <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: selectLanguage === "en" ?
                                                { lg: "right", md: "right", sm: "right", xs: "center" }
                                                : { lg: "left", md: "left", sm: "left", xs: "center" },
                                        }}
                                        
                                        >
                                            <Button type="submit"
                                                disableRipple
                                                disableTouchRipple
                                                sx={{
                                                    '&:hover': {
      backgroundColor: 'inherit', // Set the background color to inherit to remove the hover effect
    },
                                                }}
                                                
                                            >
                                                <div className="frame">
                                                    <div className="text-wrapper"> {t("contactUs.SendRequest")} </div>
                                                    <img className="typcn-arrow-up" alt="Typcn arrow up" src={Arrow}
                                                        style={{
                                                            transform: selectLanguage === "ar" ? "rotate(180deg)" : "",

                                                        }}
                                                    />
                                                </div>
                                            </Button>
                                        </Box>

                                    </Box>
                                </form>
                            </Grid>
                            <Grid item lg={5.5} xs={12} justifyContent="center"
                                sx={{
                                    marginTop: { lg: "0px", md: "0px", sm: "50px", xs: "50px" }

                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: { lg: "40px", md: "40px", sm: "40px", xs: "24px" }
                                    }}
                                >

                                    <img
                                    className="contactImg"
                                        src={contactImg}>
                                    </img>



                                    <Typography
                                        sx={{
                                            textAlign: { lg: "center", md: "center", sm: "justify", xs: "justify" },
                                            color: "var(--white-color)",
                                            fontSize: { lg: "36px", md: "36px", sm: "36px", xs: "20px" },
                                            lineHeight: "normal",
                                            fontWeight: "700",
                                            fontFamily: "var(--English-font)",
                                            letterSpacing: selectLanguage === "en" && { lg: "1.44px", md: "1.44px", sm: "1.44px", xs: "0.8px" }
                                        }}
                                    >
                                        {t("contactUs.whatWeCanDo")}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            textAlign: "justify",
                                            margin: "0 auto",
                                            maxWidth: "447px",
                                            color: "var(--white-color)",
                                            fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "16px" },
                                            fontWeight: "400",
                                            lineHeight: { lg: "36px", md: "36px", sm: "36px", xs: "28px" },
                                            textTransform: "capitalize",
                                            fontFamily: "var(--English-font)",

                                        }}
                                    >
                                        {t("contactUs.contactDesc2")}

                                    </Typography>

                                </Box>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Footer />

                </Grid>

            </Grid>

        </>
    )
}
export default ContactUs