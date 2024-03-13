import React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/langs.ts";
import { Table } from "react-bootstrap";
import panmasamadre from "../views/Images/panmasamadre.jpg";
import panbarra from "../views/Images/panbarra.jpeg";

const Panaderia = () => {
    const { t, i18n } = useTranslation();

    const products = [
        { id: 1, name: { es: "Pan de masa madre", pt: "Pão de fermento natural" }, description: { es: "Pan artesanal de masa madre", pt: "Pão artesanal de fermento natural" }, image: panmasamadre },
        { id: 2, name:{ es: "Pan Barra", pt:"pão de forma"}, description:{es:"Pan estilo barra", pt:"pão estilo pão"},image:panbarra},
    ];
    return(
        <div className="container mt-4">
            <h1 className="text-center">{t("TituloEmpanada")}</h1>
            
        <Table striped bordered hover responsive variant="warning">
            
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td className="text-center">{product.name[i18n.language]}</td>
                        <td className="text-center">{product.description[i18n.language]}</td>
                        <td className="text-center"><img src={product.image} alt={product.name} style={{ maxWidth: "100px", maxHeight: "100px" }} /></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    
        </div>
    );
};
export default Panaderia;
