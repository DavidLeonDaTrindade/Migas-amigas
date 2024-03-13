import React from "react";
import { useTranslation } from "react-i18next";
import { Table } from "react-bootstrap";

import panbarra from "./Images/panbarra.jpeg";
const Principal = () => {
    const { t, i18n } = useTranslation();

    

    return (
        <div className="container mt-4">
        <Table striped bordered hover responsive variant="info">
            
            <tbody>
                
            </tbody>
        </Table>
    </div>
    );
};

export default Principal;
