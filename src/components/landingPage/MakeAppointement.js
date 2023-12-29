import React, { useState } from "react";
import "./MakeAppointement.css"
import { Box, Grid, InputLabel, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import vector1 from "../../assets/images/FormVector.svg"
import vector2 from "../../assets/images/FormVector2.svg"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowWhite from "../../assets/images/arrowRight.svg"
function Makeappointement() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("")
  const { t, i18n } = useTranslation();
  const selectLanguage = i18n.language;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("abd", name, "email", email, "subject", subject, "message", message)
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };


  return (
    <>
      <Grid className="make-bg root-container" sx={{ zIndex: "2" }}>
        <Grid className="text-content"
          sx={{
            paddingLeft: { lg: "120px", md: "16px", sm: "16px", xs: "20px" },
            paddingRight: { lg: "120px", md: "16px", sm: "16px", xs: "20px" },
            marginTop: { lg: "48px", md: "48px", sm: "48px", xs: "34px" }
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "24px"
            }}
          >

            <Typography
              sx={{
                color: "var(--header-color)",
                fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "18px" },
                fontWeight: "400",
                lineHeight: "normal",
                letterSpacing: selectLanguage === "en" && { lg: "0.96px", md: "0.96px", sm: "0.96px", xs: "0.72px" },
                fontFamily: "var(--English-font)",

              }}
            >
              {t("Appointement.Makeanappointement")}
            </Typography>
            <Typography
              sx={{
                color: "var(--white-color)",
                fontSize: { lg: "48px", md: "48px", sm: "48px", xs: "32px" },
                fontWeight: "900",
                lineHeight: "normal",
                letterSpacing: selectLanguage === "en" && { lg: "1.92px", md: "1.92px", sm: "1.92px", xs: "1.28px" },
                fontFamily: "var(--English-font)",
                maxWidth: "488px"

              }}
            >
              {t("Appointement.talkToUs")}
            </Typography>
            <Typography
              sx={{
                color: "var(--white-color)",
                fontSize: { lg: "24px", md: "24px", sm: "24px", xs: "16px" },
                fontWeight: "400",
                lineHeight: "normal",
                letterSpacing: selectLanguage === "en" && { lg: "0.96px", md: "0.96px", sm: "0.96px", xs: "0.64px" },
                fontFamily: "var(--English-font)",
                textAlign: "justify"

              }}
            >
              {t("Appointement.desc")}
            </Typography>

          </Box>
          <Grid
            sx={{
              backgroundColor: "var(--btn-text-color)",
              borderRadius: "16px",
              marginTop: { lg: "48px", md: "48px", sm: "48px", xs: "51px" },
              maxWidth: "1088px",
              margin: "0 auto",
              position: "relative",
              marginBottom: { lg: "75px", md: "75px", sm: "75px", xs: "36px" },
              paddingBottom: { lg: "24px", md: "24px", sm: "24px", xs: "18px" },


            }}
          >
            <Box
              sx={{
                position: "absolute",
                right: "0"
              }}
            >
              <img width="100%" src={vector1}></img>
            </Box>
            <Box
              sx={{
                position: "absolute",
                left: "0",
                bottom: "0"
              }}
            >
              <img width="100%" src={vector2}></img>
            </Box>
            <Typography
              sx={{
                textAlign: "center",
                paddingTop: "24px",
                color: "var(--white-color)",
                fontSize: { lg: "36px", md: "36px", sm: "36px", xs: "24px" },
                fontFamily: "var(--English-font)",
                fontWeight: "700",
                lineHeight: "normal",
                letterSpacing: selectLanguage === "en" && { lg: "1.44px", md: "1.44px", sm: "1.44px", xs: "0.96px" },



              }}
            >
              {t("Appointement.Makeanappointement")}
            </Typography>
            <Box
              sx={{
                paddingLeft: { lg: "48px", md: "48px", sm: "48px", xs: "20px" },
                paddingRight: { lg: "48px", md: "48px", sm: "48px", xs: "20px" },
                marginTop: "24px",

              }}
            >

              <form onSubmit={handleSubmit}>
                <Grid container spacing="16px">
                  <Grid item xs={12} sm={6}>
                    <TextField
                      sx={{
                        backgroundColor: "var(--white-color)",
                        borderRadius: "8px",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent !important",
                          borderRadius: "16px !important",
                        },
                      }}
                      fullWidth
                      placeholder={t("Appointement.fullName")}
                      //   variant="outlined"
                      name="full name"
                      onChange={handleNameChange}
                      value={name}

                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      sx={{
                        backgroundColor: "var(--white-color)",
                        borderRadius: "8px",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent !important",
                          borderRadius: "16px !important",
                        },
                      }}
                      fullWidth
                      placeholder={t("Appointement.Email")}
                      //   label="Email"
                      //   variant="outlined"
                      type="email"
                      name="email"
                      onChange={handleEmailChange}
                      value={email}

                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      sx={{
                        backgroundColor: "var(--white-color)",
                        borderRadius: "8px",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent !important",
                          borderRadius: "16px !important",
                        },
                      }}
                      fullWidth
                      placeholder={t("Appointement.Subject")}
                      //   label="Subject"
                      //   variant="outlined"
                      name="subject"
                      onChange={handleSubjectChange}
                      value={subject}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      sx={{
                        backgroundColor: "var(--white-color)",
                        borderRadius: "8px",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent !important",
                          borderRadius: "16px !important",
                        },
                      }}
                      fullWidth
                      placeholder={t("Appointement.Message")}
                      //   label="Message"
                      //   variant="outlined"
                      multiline
                      rows={8}
                      name="message"
                      onChange={handleMessageChange}
                      value={message}
                      required
                    />
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: { lg: "40px", md: "40px", sm: "40px", xs: "29px" },

                  }}
                >
                  <Button
                    type="submit"
                    sx={{
                      backgroundColor: "transparent",
                      color: "var(--white-color)",
                      fontSize: { lg: "24px", md: "24px", sm: "16px", xs: "16px" },
                      lineHeight: "36px",
                      fontVariant: "small-caps",
                      fontWeight: "600",
                      fontFamily: "var(--English-font)",
                      border: "1px solid var(--white-color)",
                      borderRadius: "36px",
                      padding: "16px 24px",
                      height: "52px",
                      gap: "16px",


                    }}
                  >
                    {t("Appointement.sendrequest")}
                    <img className="typcn-arrow-up" alt="Typcn arrow up" src={ArrowWhite}
                      style={{
                        transform: selectLanguage === "ar" ? "rotate(180deg)" : "",

                      }}
                    />
                  </Button>

                </Box>

              </form>

            </Box>

          </Grid>

        </Grid>

      </Grid>

      {/* <Footer /> */}

    </>
  )
}

export default Makeappointement;