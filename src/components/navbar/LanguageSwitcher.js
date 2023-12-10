import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import '../navbar/LanguageSwitcher.css'
import { Box } from "@mui/material";
import Button from '@mui/material/Button';

import arrowDown from "../../assets/images/navArrow.svg"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedValue, setSelectedValue] = useState('en');
    const selectLanguage = i18n.language;
    const handleMenuItemClick = (language) => {
        handleClose();
        setSelectedValue(language)
        i18n.changeLanguage(language);
    };
    const handleBoxClick = (event) => {
        if (anchorEl) {
            handleClose();
        } else {
            setAnchorEl(event.currentTarget);
        }
    };
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box sx={{ display: "flex", alignItems: "center" }}>

                <Box
                    sx={{
                        borderRadius: '36px',
                        border: '1px solid #FFF',
                        color: '#FFFFFF',
                        padding: { lg: "8px 24px", sm: "", xs: "6px 11.5px" },
                        gap: { lg: "16px", sm: "6px", xs: "6px" },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center",
                        width: "100%",
                        position: 'relative',
                        cursor: "pointer"
                    }}
                    onClick={handleBoxClick}
                >
                    <Button
                        sx={{
                            color: "#FFFFFF",
                            padding: "6px 0px",
                            display: { lg: "block", sm: "none", xs: "none" },
                        }}
                        disableRipple
                    >
                        {selectLanguage === 'en' ? 'English' : selectLanguage==="ar" ? "عربي" : "English"}
                    </Button>
                    <Button
                        sx={{
                            color: "#FFFFFF",
                            padding: "6px 0px",
                            display: { lg: "none", sm: "flex", xs: "flex" },
                            width: "100%",
                            minWidth: "40px",
                            height: { lg: "", xs: "0px" },
                            textTransform: "unset"
                        }}
                        disableRipple
                    >
                        {selectLanguage === 'en' ? 'English' : selectLanguage==="ar" ? "عربي" : "English"}
                    </Button>
                    <img
                        src={arrowDown}
                        alt="Arrow"
                        onClick={handleOpen}
                        style={{
                            transform: anchorEl ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer',
                        }}
                    />
                    <Menu
                        sx={{
                            cursor: "pointer"
                        }}
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}

                    >
                        {selectLanguage === "en" &&
                            <MenuItem sx={{ minHeight: "0px" }} onClick={() => handleMenuItemClick('ar')}>AR</MenuItem>
                    }
                    {selectLanguage === "ar" ?
                                                <MenuItem sx={{ minHeight: "0px" }} onClick={() => handleMenuItemClick('en')}>EN</MenuItem>

                    :   
                                                                  <MenuItem sx={{ minHeight: "0px" }} onClick={() => handleMenuItemClick('ar')}>AR</MenuItem>
                }
                    
                        
                    </Menu>
                </Box>
            </Box>
        </>
    )
};
export default LanguageSwitcher;