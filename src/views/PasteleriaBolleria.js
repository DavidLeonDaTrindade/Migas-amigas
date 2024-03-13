import React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/langs.ts";
import { Table } from "react-bootstrap";

import croissant from "./Images/croissant.jpg";
import galleta from "./Images/galleta.jpg";
import palmera from "./Images/palmera.jpg";
import lazo from "./Images/lazo.jpeg";
import tarta from "./Images/tarta.jpg";
import napolitana from "./Images/napolitanajpeg.jpeg";

const Pasteleriabolleria = () => {
    const { t, i18n } = useTranslation();

    const products = [
        
        { id: 2, name: { es: "Croissant de chocolate", pt: "Croissant de chocolate" }, description: { es: "Croissant relleno de chocolate", pt: "Croissant recheado de chocolate" }, image: croissant },
        { id: 3, name: { es: "Galleta rellena", pt:"Biscoito recheado" }, description: { es:"Galleta Rellena de diferentes sabores", pt:"Biscoito recheado com sabores diversos"}, image:galleta}, 
        { id: 4, name: { es: "Palmera de chocolate", pt:"Palma de chocolate"},description: { es:"Palmera casera, bañada en chocolate", pt:"Palmeira caseira mergulhada em chocolate"}, image:palmera},
        { id: 5, name: { es: "Lazo de huevo",pt:"laço de ovo"}, description:{es:"lazo de hojaldre bañado en crema irlandesa", pt:"massa folhada mergulhada em creme irlandês"}, image:lazo},
        { id: 6, name: { es: "Tarta de santiago", pt:"Bolo de Santiago"}, description:{es:"Tarta de almendras, nueces y azucar", pt:"bolo de amêndoa, nozes e açúcar"}, image:tarta},
        { id: 7, name: { es: "Napolitana de chocolate", pt:"chocolate napolitano"}, description:{es:"Masa de hojaldre relleno de chocolate", pt:"Massa folhada recheada com chocolate"}, image:napolitana},
        

    ];

    return (
        <div className="container mt-4">
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
}
export default Pasteleriabolleria;