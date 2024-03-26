import React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/langs.ts";
import i18n from "../i18n.ts"; // Importar i18n
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    const { i18n, t } = useTranslation();

    return (
        <div style={{ backgroundColor: "#e0e0e0", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px", padding: "20px", borderRadius: "8px", width: "100%" }}>
            <h1>{t("footer")}</h1>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                <FontAwesomeIcon icon={faTwitter} size="2x" style={{ marginRight: "10px" }} />
                <FontAwesomeIcon icon={faFacebook} size="2x" style={{ marginRight: "10px" }} />
                <FontAwesomeIcon icon={faInstagram} size="2x" style={{ marginRight: "10px" }} />
            </div>
        </div>
    );
};

export default Footer;
