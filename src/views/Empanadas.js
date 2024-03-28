import React from "react";
import { useTranslation } from "react-i18next";
import { Table } from "react-bootstrap";
import empanada from "./Images/empanada.jpg";
import empanadacarne from "./Images/empanadacarne.jpeg";
import empanadapollo from "./Images/empanadapollo.jpeg";
import empanadablanco from "./Images/empanadablanco.jpg";
import "./Panaderia.css";

const Empanadas = () => {
    const { t, i18n } = useTranslation();

    const products = [
        { id: 1, name: { es: "Empanada de queso", pt:"Empada de queijo"}, description:{es:"Masa de harina frita rellena de queso", pt:"Massa de farinha frita recheada com queijo"}, image:empanada},
        { id: 2, name: { es: "Empanada de carne mechada", pt:"empanada de carne desfiada"}, description:{es:"Masa de harina frita rellena de carne de res picada", pt:"Massa de farinha frita recheada com carne picada"}, image:empanadacarne},
        { id: 3, name: { es: "Empanada de Pollo", pt:"Empanada de frango"}, description:{es:"Masa de harina frita rellena de pollo desmechado", pt:"Massa de farinha frita recheada com frango desfiado"}, image:empanadapollo},
        { id: 4, name: { es: "Empanada de queso blanco", pt:"Empanada de queijo branco"}, description:{es:"Masa de harina frita rellena de queso blanco", pt:"Massa de farinha frita recheada com queijo branco"}, image:empanadablanco},
    ];

    return (
        <div className="container mt-4">
            <h1 className="text-center">{t("TituloEmpanada")}</h1>
            <Table striped bordered hover responsive variant="warning" style={{ maxWidth: "50%", minWidth: "50%", margin: "auto" }}>
                <caption className="text-center" style={{fontWeight:"bold", fontSize:"18px"}}>{t("caption")}</caption>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id} className="product-row">
                            <td className="text-center" style={{ paddingTop:"25px",fontWeight: "bold", fontSize: "20px" }}>{product.name[i18n.language]}</td>
                            <td className="text-center" style={{ paddingTop:"25px",fontWeight: "bold", fontSize: "20px" }}>{product.description[i18n.language]}</td>
                            <td className="text-center"><img src={product.image} alt={product.name} style={{ maxWidth: "100px", maxHeight: "100px" }}  className="product-image"/></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Empanadas;
