import React from "react";
import { useTranslation } from "react-i18next";
import { Table } from "react-bootstrap";
import empanada from "./Images/empanada.jpg";
import empanadacarne from "./Images/empanadacarne.jpeg";



const Empanadas = () => {
    const { t, i18n } = useTranslation();

    const products = [
        { id: 1, name: { es: "Empanada de queso", pt:"Empada de queijo"}, description:{es:"Masa de harina frita rellena de queso", pt:"Massa de farinha frita recheada com queijo"}, image:empanada},
        { id: 2, name: { es: "Empanada de carne mechada", pt:"empanada de carne desfiada"}, description:{es:"Masa de harina frita rellena de carne de res picada", pt:"Massa de farinha frita recheada com carne picada"}, image:empanadacarne},
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
export default Empanadas;