import React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/langs.ts";
import i18n from "../i18n.ts"; // Importar i18n
const Footer = () =>{
    const { i18n, t } = useTranslation();
    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
    };
    return (
        <div>
            <h1>{t("footer")}</h1>
        </div>
    )
}
export default Footer;
