import React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/langs.ts";
import i18n from "../i18n.ts"; // Importar i18n
import { Navbar, Nav, NavDropdown } from "react-bootstrap";


const HeaderNav = () => {
    const { i18n, t } = useTranslation();

    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    };

    return (
        <div>
           <h1 className="text-center" style={{ backgroundColor: '#f2dede' }}>{t("titleHeader")}</h1>


            <select style={{ float: 'right' }} defaultValue={i18n.language} onChange={onChangeLang}>
                {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code}>{label}</option>
                    ))}
                </select>

                    
            <Navbar  bg="light" expand="lg">
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">{t("inicio1")}</Nav.Link>
                        <Nav.Link href="http://localhost:3000/contacto">Contacto</Nav.Link>
                        <Nav.Link href="http://localhost:3000/panaderia">Panaderia</Nav.Link>
                        <Nav.Link href="http://localhost:3000/pasteleriabolleria">Bolleria Pasteleria</Nav.Link>
                        <Nav.Link href="http://localhost:3000/empanadas">Empanadas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderNav;
