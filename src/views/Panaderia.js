import React from "react";
import { useTranslation } from "react-i18next";
import { Table } from "react-bootstrap";
import panmasamadre from "./Images/panmasamadre.jpg";
import panbarra from "./Images/panbarra.jpeg";
import panleche from "./Images/panleche.jpg";
import pansemilla from "./Images/pansemilla.jpg";
import panleña from "./Images/panleña.jpeg";
import panjamon from "./Images/panjamon.jpeg";
import panqueso from "./Images/panqueso.jpg";
import panmantequilla from "./Images/panmantequilla.jpg";
import panmatalauva from "./Images/panmatalauva.jpg";
import pancristal from "./Images/pancristal.jpg";
import "./Panaderia.css";

const Panaderia = () => {
    const { t, i18n } = useTranslation();

    const products = [
        { id: 1, name: { es: "Pan de masa madre", pt: "Pão de fermento natural" }, description: { es: "Pan artesanal de masa madre", pt: "Pão artesanal de fermento natural" }, image: panmasamadre, alt: { es: "Pan de masa madre", pt: "Pão de fermento natural" } },
        { id: 2, name: { es: "Pan Barra", pt: "Pão de forma" }, description: { es: "Pan estilo barra", pt: "pão estilo pão" }, image: panbarra, alt: { es: "Pan Barra", pt: "Pão de forma" } },
        { id: 3, name: { es: "Pan de leche", pt: "Pão de leite" }, description: { es: "Pan tradicional de leche", pt: "Pão de leite tradicional" }, image: panleche, alt: { es: "Pan de leche", pt: "Pão de leite" } },
        { id: 4, name: { es: "Pan de semillas", pt: "Pão de sementes" }, description: { es: "Pan aliñado con diferentes tipos de semilla que aportan un sabor unico", pt: "Pão temperado com diferentes tipos de sementes que proporcionam um sabor único" }, image: pansemilla, alt: { es: "Pan de semillas", pt: "Pão de sementes" } },
        { id: 5, name: { es: "Pan de leña", pt: "Pão de madeira" }, description: { es: "Pan Horneado a leña", pt: "Pão a lenha" }, image: panleña, alt: { es: "Pan de leña", pt: "Pão de madeira" } },
        { id: 6, name: { es: "Pan de jamon", pt: "Pão com presunto" }, description: { es: "Pan relleno horneado tipico navideño", pt: "Pão recheado típico de Natal" }, image: panjamon, alt: { es: "Pan de jamon", pt: "Pão com presunto" } },
        { id: 7, name: { es: "Pan de queso", pt: "Pão de queijo" }, description: { es: "Pan relleno de queso recien horneado", pt: "Pão recheado com queijo recém-assado" }, image: panqueso, alt: { es: "Pan de queso", pt: "Pão de queijo" } },
        { id: 8, name: { es: "Pan de mantequilla", pt: "Pão de manteiga" }, description: { es: "Pan elaborado con mantequilla tierno y jugoso", pt: "Pão feito com manteiga macia e suculenta" }, image: panmantequilla, alt: { es: "Pan de mantequilla", pt: "Pão de manteiga" } },
        { id: 9, name: { es: "Pan de matalauva", pt: "Pão Matalauva" }, description: { es: "Pan con semillas de matalauva tradicional", pt: "Pão com sementes de matalauva tradicional" }, image: panmatalauva, alt: { es: "Pan de matalauva", pt: "Pão Matalauva" } },
        { id: 10, name: { es: "Pan de cristal", pt: "pão de cristal" }, description: { es: "Una vez horneado, el pan de cristal adquiere una textura muy crujiente y fina", pt: "Depois de assado, o pão de vidro adquire uma textura bem crocante e fina." }, image: pancristal, alt: { es: "Pan de cristal", pt: "pão de cristal" } }
    ];

    return (
        <div style={{ maxWidth: "100%", textAlign: "center" }} className="container mt-4">
            <h1 className="text-center">{t("tituloPan")}</h1>

            <Table bordered hover responsive variant="warning" style={{ maxWidth: "50%", minWidth: "50%", margin: "auto" }}>
                <caption className="text-center" style={{fontWeight:"bold", fontSize:"18px"}}>{t("captionPanaderia")}</caption>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id} className="product-row">
                            <td className="text-center" style={{ paddingTop:"25px",fontWeight: "bold", fontSize: "20px" }}>{product.name[i18n.language]}</td>
                            <td className="text-center" style={{ paddingTop:"25px",fontWeight: "bold", fontSize: "18px" }}>{product.description[i18n.language]}</td>
                            <td className="text-center">
                                <img
                                    src={product.image}
                                    alt={product.alt[i18n.language]}
                                    className="product-image"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Panaderia;
