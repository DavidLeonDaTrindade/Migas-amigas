import React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/langs.ts";
import mapa from "../imagen/maps.png";




const Contacto = () => {
const { i18n, t } = useTranslation();

    return(
        <div>
            <h1 className="text-center">{t("contacto")}</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <a href="https://www.google.com/maps/d/viewer?mid=1VSqlLPz_3L5j6WEm4pCpgdLgsMU&hl=es&ll=28.070911018283965%2C-16.557322109202985&z=21" target="_blank">
                    <img style={{ border: "2px solid black" }} src={mapa} alt="Descripción de la imagen" />
                </a>
            </div>
            <div>
                <h1 className="text-center">Telefono: 822-15-11-14</h1>
                <h2 className="text-center">{t("direccion")}</h2>
            </div>
            
        </div>
    )
}
export default Contacto;