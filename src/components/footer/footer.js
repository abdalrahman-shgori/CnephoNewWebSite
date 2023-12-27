// Footer.js
import React from 'react';
import { Typography, Container, Link, Grid, Divider, Box } from '@mui/material';
import Logo from "../../assets/images/LogoFooter.svg"
import "./footer.css"
import Phone from "../../assets/images/phone.svg"
import Loc from "../../assets/images/location.svg"
import mail from "../../assets/images/email.svg"
import face from "../../assets/images/facebook.svg"
import insta from "../../assets/images/insta.svg"
import twit from "../../assets/images/twitter.svg"
import { useTranslation } from "react-i18next";

const FooterTitleStyle = {
  fontSize: "24px",
  color: "var(--white-color)",
  textAlign: "justift",
  fontWeight: "700",
  letterSpacing: "0.96px",
  fontFamily: "var(--English-font)",

}
const FooterTexts = {
  color: "var(--white-color)",
  fontSize: "16px",
  fontWeight: "400",
  letterSpacing: "0.64px",
  marginTop: "8px",
  fontFamily: "var(--English-font)",
  cursor: "pointer"


}
const CopyrightandPolicy = {
  color: "var(--white-color)",
  fontWeight: "100",
  fontStyle: "normal",
  lineHeight: "normal",
  textDecoration: "none",
  fontFamily: "var(--English-font-Light)"

}





const socialMedia = [
  { name: "instagram", img: insta, href: "#" },
  { name: "facebook", img: face, href: "#" },
  { name: "twitter", img: twit, href: "#" },


]



const Footer = () => {
  const { t, i18n } = useTranslation();
  const selectLanguage = i18n.language;



  const UsefulLink = [
    { name: t("footer.ABOUTUS"), href: "/AboutUs" },
    { name: t("footer.News"), href: "#" },
    { name: t("footer.CONTACTUS"), href: "/Contact-Us" },
    { name: t("footer.CaseStudy"), href: "/Portolios" },
    { name: t("footer.Link1"), href: "#" },
    { name: t("footer.Link2"), href: "#" },
  ]
  const Services = [
    { name: t("footer.UIUX"), href: "#" },
    { name: t("footer.Branding"), href: "#" },
    { name: t("footer.WebDevelopment"), href: "#" },
    { name: t("footer.ApplicationDevelopment"), href: "#" },
    { name: t("footer.Service1"), href: "#" },
    { name: t("footer.Service2"), href: "#" },
  ]
  const Info = [
    { name: t("footer.Phone"), img: Phone, href: "#" },
    { name: t("footer.Location"), img: Loc, href: "#" },
    { name: "cNepho@Example.com", img: mail, href: "#" },
  ]
  return (
    <Grid className='root-container' sx={{
      padding: selectLanguage === "en" ? { lg: "0px 120px 0px 120px", xs: "20px 21px 0px 16px" } : { lg: "20px 120px 0px 120px", xs: "20px 16px 0px 21px" },
      marginTop:{lg:"48px",md:"48px",sm:"40px",xs:"40px"}

    }}>
      <Grid container spacing={{ lg: "0px", sm: "0px" }}>
        {/* Logo and Description Section */}
        <Grid item xs={12} sm={8} md={4.6}>
          <Box
            sx={{
              marginBottom: { lg: "26px", md: "15px", xs: "15px" },

            }}
          >
            <img className='footerLogo' src={Logo}
            ></img>
          </Box>

          <Typography variant="body2"
            sx={{
              color: "var(--white-color)",
              fontSize: { lg: "16px", md: "14px", xs: "12px" },
              fontWeight: "400",
              letterSpacing: { lg: "0.64px", sm: "0.48" },
              textAlign: "justify",
              marginBottom: { lg: "0px", xs: "40px" },
              fontFamily: "var(--English-font)",
              width: { lg: "387px", md: "90%", sm: "353px", xs: "100%" },
            }}
          >
            {t("footer.Description")}
          </Typography>
        </Grid>

        {/* Useful Links Section */}
        <Grid item xs={12} sm={4} md={2.2}
          sx={{
            marginBottom: { lg: "0px", xs: "32px" },
            marginTop: { lg: "55px", md: "0px" },
          }}
        >

          <Typography variant="h6"
            sx={{ ...FooterTitleStyle, whiteSpace: "nowrap", marginBottom: { lg: "16px", xs: "16px" } }}
          >{t("footer.UsefulLinks")}</Typography>

          {UsefulLink.map((item, index) => (
            <Box key={index}>
              <Typography
                sx={{
                  ...FooterTexts,
                }}
              >
                {item.name}
              </Typography>
            </Box>

          ))}
        </Grid>

        {/* Services Section */}
        <Grid item xs={12} sm={8} md={2.6}
          sx={{
            marginBottom: { lg: "0px", xs: "32px" },
            marginTop: { lg: "55px", md: "0px" }

          }}
        >
          <Typography variant="h6"
            sx={{ ...FooterTitleStyle, marginBottom: { lg: "16px", xs: "16px" } }}

          >{t("footer.Services")}</Typography>
          {Services.map((item, index) => (
            <Box key={index}>
              <Typography
                sx={{
                  ...FooterTexts,
                  whiteSpace: { lg: "nowrap", md: "pre-" }

                }}
              >
                {item.name}
              </Typography>
            </Box>

          ))}
          {/* Add your service links here */}
        </Grid>

        {/* Info Section */}
        <Grid item xs={12} sm={4} md={2.6}
          sx={{
            marginTop: { lg: "55px", md: "0px" }

          }}
        >
          <Typography variant="h6"
            sx={{ ...FooterTitleStyle, marginBottom: { lg: "16px", xs: "16px" } }}

          >{t("footer.Information")}</Typography>
          {Info.map((item, index) => (
            <Box key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >

              <img style={{ marginTop: "8px" }} src={item.img}></img>
              <Typography
                sx={{
                  ...FooterTexts,
                  whiteSpace: "nowrap"

                }}
              >
                {item.name}
              </Typography>

            </Box>

          ))}
          <Box
            sx={{
              marginTop: "14px",
              display: "flex",
              gap: { lg: "18px", xs: "16px" }
            }}
          >
            {socialMedia.map((item, index) => (
              <img key={index} src={item.img}></img>
            ))}
          </Box>
        </Grid>

      </Grid>

      {/* Divider Line */}
      <Divider sx={{
        marginTop: { lg: "48px", xs: "44px" },
        marginBottom: { lg: "24px", xs: "20px" },
        backgroundColor: "var(--white-color)"

      }} />

      {/* Copyright and Policy Section */}

      <Typography
        variant="body2"
        align="center"
        sx={{ display: 'flex',justifyContent: { lg: 'space-between',md:"space-between", sm: "space-between", xs: 'center' }, flexWrap: 'wrap' }}
      >
        <Typography
          sx={{
            ...CopyrightandPolicy,
            fontSize: { lg: "16px", md: "14px", xs: "12px" },
            marginBottom: { lg: "0px", xs: "20px" },
            display:"flex",
            alignItems:"center"
          }}
        >{t("footer.copyrightNotice")}</Typography>
        <Typography
          sx={{
            ...CopyrightandPolicy,
            fontSize: { lg: "16px", md: "14px", xs: "12px" },
            marginBottom: "22px",
            display: "flex",
            gap: {lg:"36px",md:"36px",sm:"24px",xs:"24px"},
            alignItems:"center"
          }}
        >
          <Link sx={{ textDecoration: "none" }} color="inherit" href="#">
            {t("footer.PrivacyPolicy")}
          </Link>{' '}
           <Typography sx={{display:{lg:"flex",md:"flex",sm:"flex",xs:"none"}}}>|</Typography>{' '}
          <Link sx={{ textDecoration: "none" }} color="inherit" href="#">
            {t("footer.Term")}
          </Link>
        </Typography>
      </Typography>
    </Grid>
  );
};

export default Footer;
