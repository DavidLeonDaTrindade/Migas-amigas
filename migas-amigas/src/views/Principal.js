import React from "react";
import { useTranslation } from "react-i18next";
import { Table } from "react-bootstrap";
import panmasamadre from "../views/Images/panmasamadre.jpg";
import croissant from "../views/Images/croissant.jpg";
import galleta from "../views/Images/galleta.jpg";
import palmera from "../views/Images/palmera.jpg";
import lazo from "../views/Images/lazo.jpeg";
import tarta from "../views/Images/tarta.jpg";
import napolitana from "../views/Images/napolitanajpeg.jpeg";
import empanada from "../views/Images/empanada.jpg";
import empanadacarne from "../views/Images/empanadacarne.jpeg";
import panbarra from "../views/Images/panbarra.jpeg";
const Principal = () => {
    const { t, i18n } = useTranslation();

    const products = [
        { id: 1, name: { es: "Pan de masa madre", pt: "Pão de fermento natural" }, description: { es: "Pan artesanal de masa madre", pt: "Pão artesanal de fermento natural" }, image: panmasamadre },
        { id: 2, name: { es: "Croissant de chocolate", pt: "Croissant de chocolate" }, description: { es: "Croissant relleno de chocolate", pt: "Croissant recheado de chocolate" }, image: croissant },
        { id: 3, name: { es: "Galleta rellena", pt:"Biscoito recheado" }, description: { es:"Galleta Rellena de diferentes sabores", pt:"Biscoito recheado com sabores diversos"}, image:galleta}, 
        { id: 4, name: { es: "Palmera de chocolate", pt:"Palma de chocolate"},description: { es:"Palmera casera, bañada en chocolate", pt:"Palmeira caseira mergulhada em chocolate"}, image:palmera},
        { id: 5, name: { es: "Lazo de huevo",pt:"laço de ovo"}, description:{es:"lazo de hojaldre bañado en crema irlandesa", pt:"massa folhada mergulhada em creme irlandês"}, image:lazo},
        { id: 6, name: { es: "Tarta de santiago", pt:"Bolo de Santiago"}, description:{es:"Tarta de almendras, nueces y azucar", pt:"bolo de amêndoa, nozes e açúcar"}, image:tarta},
        { id: 7, name: { es: "Napolitana de chocolate", pt:"chocolate napolitano"}, description:{es:"Masa de hojaldre relleno de chocolate", pt:"Massa folhada recheada com chocolate"}, image:napolitana},
        { id: 8, name: { es: "Empanada de queso", pt:"Empada de queijo"}, description:{es:"Masa de harina frita rellena de queso", pt:"Massa de farinha frita recheada com queijo"}, image:empanada},
        { id: 9, name: { es: "Empanada de carne mechada", pt:"empanada de carne desfiada"}, description:{es:"Masa de harina frita rellena de carne de res picada", pt:"Massa de farinha frita recheada com carne picada"}, image:empanadacarne},
        { id: 10, name:{ es: "Pan Barra", pt:"pão de forma"}, description:{es:"Pan estilo barra", pt:"pão estilo pão"},image:panbarra},

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
};

export default Principal;
