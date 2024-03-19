import React from "react";
import { useTranslation } from "react-i18next";
import { Table } from "react-bootstrap";

import pan from "../imagen/pan.jpg";

const Principal = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="container mt-4">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ flex: 1, marginRight: "20px" }}>
                    <img src={pan} alt="Imagen" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
                <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "18px", color: "#333", lineHeight: "1.5" }}>
                        <strong>{t("textoInicio")}</strong><br />
                        
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Principal;
