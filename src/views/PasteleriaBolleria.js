import React from "react";
import { useTranslation } from "react-i18next";
import { Table } from "react-bootstrap";

import croissant from "./Images/croissant.jpg";
import galleta from "./Images/galleta.jpg";
import palmera from "./Images/palmera.jpg";
import lazo from "./Images/lazo.jpeg";
import tarta from "./Images/tarta.jpg";
import napolitana from "./Images/napolitanajpeg.jpeg";
import tresleches from "./Images/tresleches.jpg";
import tartachoco from "./Images/tartachoco.jpg";
import "./Panaderia.css";

const Pasteleriabolleria = () => {
    const { t, i18n } = useTranslation();

    const products = [
        { id: 2, name: { es: "Croissant de chocolate", pt: "Croissant de chocolate" }, description: { es: "Croissant relleno de chocolate", pt: "Croissant recheado de chocolate" }, image: croissant, alt: { es: "Croissant de chocolate", pt: "Croissant de chocolate" } },
        { id: 3, name: { es: "Galleta rellena", pt: "Biscoito recheado" }, description: { es: "Galleta Rellena de diferentes sabores", pt: "Biscoito recheado com sabores diversos" }, image: galleta, alt: { es: "Galleta rellena", pt: "Biscoito recheado" } },
        { id: 4, name: { es: "Palmera de chocolate", pt: "Palma de chocolate" }, description: { es: "Palmera casera, bañada en chocolate", pt: "Palmeira caseira mergulhada em chocolate" }, image: palmera, alt: { es: "Palmera de chocolate", pt: "Palma de chocolate" } },
        { id: 5, name: { es: "Lazo de huevo", pt: "laço de ovo" }, description: { es: "lazo de hojaldre bañado en crema irlandesa", pt: "massa folhada mergulhada em creme irlandês" }, image: lazo, alt: { es: "Lazo de huevo", pt: "laço de ovo" } },
        { id: 6, name: { es: "Tarta de santiago", pt: "Bolo de Santiago" }, description: { es: "Tarta de almendras, nueces y azucar", pt: "bolo de amêndoa, nozes e açúcar" }, image: tarta, alt: { es: "Tarta de santiago", pt: "Bolo de Santiago" } },
        { id: 7, name: { es: "Napolitana de chocolate", pt: "chocolate napolitano" }, description: { es: "Masa de hojaldre relleno de chocolate", pt: "Massa folhada recheada com chocolate" }, image: napolitana, alt: { es: "Napolitana de chocolate", pt: "chocolate napolitano" } },
        { id: 8, name: { es: "Tarta tres leches", pt: "Bolo Três Leites" }, description: { es: "Bizcochon empapado en diferentes tipos de leches", pt: "Pão de ló embebido em diferentes tipos de leite" }, image: tresleches, alt: { es: "Tarta tres leches", pt: "Bolo Três Leites" } },
        { id: 9, name: { es: "Tarta de chocolate", pt: "Torta de chocolate" }, description: { es: "Tarta bañada en diferentes chocolates", pt: "Bolo mergulhado em chocolates diferentes" }, image: tartachoco, alt: { es: "Tarta de chocolate", pt: "Torta de chocolate" } }
    ];

    return (
        <div style={{ maxWidth: "100%", textAlign: "center" }} className="container mt-4">
            <h1>{t("titulodulces")}</h1>
            <Table striped bordered hover responsive variant="warning" style={{ maxWidth: "50%", minWidth: "50%", margin: "auto" }}>
                <caption className="text-center" style={{fontWeight:"bold", fontSize:"18px"}}>{t("captionDulces")}</caption>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id} className="product-row">
                            <td style={{ paddingTop:"25px",fontWeight: "bold", fontSize: "20px" }}>{product.name[i18n.language]}</td>
                            <td style={{ paddingTop:"25px",fontWeight: "bold", fontSize: "20px" }}>{product.description[i18n.language]}</td>
                            <td><img src={product.image} alt={product.alt[i18n.language]} style={{ maxWidth: "100px", maxHeight: "100px" }} className="product-image" /></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Pasteleriabolleria;
