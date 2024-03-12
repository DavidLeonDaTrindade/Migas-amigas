import i18n from "i18next";
import { initReactI18next} from "react-i18next";

i18n 
    .use(initReactI18next)
    .init({
        lng: "es",
        fallbackLng: "es",
        interpolation:{
            escapeValue: false,
        },
        resources:{
            pt:{
                translation:{
                    titleHeader:'Bem vindo ao Migas Amigas',
                    footer:'rodapé',
                    contacto:'Esta é a página de contato',
                    empanadas:'Esta é a página das empanadas',
                    error:'página de erro',
                    panaderia:'Esta é a seção de padaria',
                    pasteleriabolleria:'Esta é a seção de pastelaria e pastelaria.',
                    inicio:'Página inicial',
                    inicio1:'Inicio',
                    pan:'pão de massa fermentada'
                }
            },
        
            es:{
                translation:{
                    titleHeader:'Bienvenidos a Migas Amigas',
                    footer:'Pie de pagina',
                    contacto:'Esta es la pagina de contacto',
                    empanadas:'Esta es la pagina de las empanadas',
                    error:'Pagina de error',
                    panaderia:'Esta es la seccion de panaderia',
                    pasteleriabolleria:'Esta es la seccion de la pasteleria y bolleria',
                    inicio:'Pagina de inicio',
                    inicio1:'Inicio',
                    pan:'Pan de masa madre'
                }
            }
        }
    });

export default i18n;
