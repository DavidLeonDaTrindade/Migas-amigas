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
                <img src={mapa} alt="Descripción de la imagen" />
            </div>
            <div>
                <h1 className="text-center">Telefono: 822-15-11-14</h1>
                <h2 className="text-center">{t("direccion")}</h2>
            </div>
            
        </div>
    )
}
export default Contacto;