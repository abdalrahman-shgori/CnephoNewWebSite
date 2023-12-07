import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Test = ({ children, headerShow }) => {
    const { t, i18n } = useTranslation();
    function handelClick(event) {
        i18n.changeLanguage(event.target.value);
    }

    const selectLanguage = i18n.language;
    console.log("lang", selectLanguage)

    return (
        <>
            <select
                className="selectpicker form-control"
                name=""
                id=""
                onChange={(e) => handelClick(e)}
                defaultValue={i18n.language}
                style={
                    selectLanguage === "ar"
                        ? { fontFamily: "Tajawal-Bold", cursor: "pointer" }
                        : { fontFamily: "ubuntuBold", cursor: "pointer" }
                }
            >
                <option
                    value="en"
                    style={
                        selectLanguage === "ar"
                            ? { fontFamily: "Tajawal-Bold" }
                            : { fontFamily: "ubuntuBold" }
                    }
                    hidden={
                        i18n.language.split("-")[0] === "en" ? true : false
                    }
                >
                    {" "}
                    {t("firstPage.english")}
                </option>
                <option
                    hidden={selectLanguage === "ar" ? true : false}
                    value="ar"
                    style={
                        selectLanguage === "ar"
                            ? { fontFamily: "Tajawal-Bold" }
                            : { fontFamily: "ubuntuBold" }
                    }
                >
                    {t("firstPage.arabic")}
                </option>
            </select>

            <div>
                {t('firstPage.abd1')}
            </div>

            {/* <Link to="test1">click</Link> */}

        </>
    )
};
export default Test;