import React from "react";
import { useTranslation } from "react-i18next";
import { Table } from "react-bootstrap";
import pan from "../imagen/pan.jpg";

const Principal = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="container mt-4" style={{ backgroundColor: "#e0e0e0", padding: "20px", borderRadius: "8px" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ flex: 1, marginRight: "20px", textAlign: "center" }}>
                    <img src={pan} alt={t("altText")} style={{ maxWidth: "100%", height: "auto" }} />
                    <figcaption style={{ fontFamily: "Arial, sans-serif",fontWeight:"bold", fontSize: "20px", color: "black", marginTop: "5px" }}>
                        {t("pieImagen")}
                    </figcaption>
                </div>
                <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "18px", color: "#333", lineHeight: "1.5", textAlign: "center" }}>
                        <strong>{t("textoInicio")}</strong><br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Principal;
