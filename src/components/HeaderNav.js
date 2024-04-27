import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/langs.ts";
import i18n from "../i18n.ts"; // Importar i18n
import logo from "../imagen/Migas-Amigas.png"; // Ruta a tu logo

const HeaderNav = () => {
    const { i18n, t } = useTranslation();

    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    };

    return (
        <div>
            <h1 style={{ fontWeight: "bold", marginTop: "20px" }} className="text-center">{t("titleHeader")}</h1>

            {/* Etiqueta label agregada para describir el propósito del elemento select */}
            <label htmlFor="languageSelect">{t("Idioma")}</label>
            <select id="languageSelect" defaultValue={i18n.language} onChange={onChangeLang}>
                {LANGUAGES.map(({ code, label }) => (
                    <option key={code} value={code}>{label}</option>
                ))}
            </select>

            <Navbar style={{ fontWeight: "bold", fontSize: "20px" }} bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">{t("inicio1")}</Nav.Link>
                        <Nav.Link href="/contacto">{t("contacto")}</Nav.Link>
                        <Nav.Link href="/panaderia">{t("panaderia")}</Nav.Link>
                        <Nav.Link href="/pasteleriabolleria">{t("pasteleriaBolleria")}</Nav.Link>
                        <Nav.Link href="/empanadas">{t("empanadas")}</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
                <Navbar.Brand href="/" className="ml-auto"> {/* Alineado a la derecha */}
                        <img src={logo} alt="Logo" style={{ maxWidth: "200px" }} /> {/* Ajustando el tamaño del logo */}
                    </Navbar.Brand>
            </Navbar>
        </div>
    );
};

export default HeaderNav;
