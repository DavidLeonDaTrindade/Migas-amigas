import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next} from "react-i18next";

const getCurrentHost = process.env.REACT_APP_MODE === 'development' ? 'http://localhost:5500' : 'LINK TO PROD'

console.log("react_app_mode: " + process.env.REACT_APP_MODE);
console.log("CurrentHost: " + getCurrentHost);
i18n 
    .use(initReactI18next)
    .use(i18nBackend)
    .init({
        lng: "es",
        fallbackLng: "es",
        interpolation:{
            escapeValue: false,
        },
        backend: {
            loadPath: `${getCurrentHost}/public/i18n/{{lng}}.json`,
            },
            
        resources:{
            pt:{
                translation:{
                    titleHeader:'Bem vindo ao Migas Amigas',
                    footer:'rodapé',
                    contacto:'Contate-nos',
                    empanadas:'Esta é a página das empanadas',
                    error:'página de erro',
                    panaderia:'Esta é a seção de padaria',
                    pasteleriabolleria:'Esta é a seção de pastelaria e pastelaria.',
                    inicio:'Página inicial',
                    inicio1:'Inicio',
                    TituloEmpanada:'Aproveite nossas Empanadas',
                    textoInicio:" Descubra o prazer do pão fresco e dos doces irresistíveis na nossa padaria. De croissants fresquinhos a deliciosos pastéis, cada mordida é cheia de amor e sabor. Junte-se à nossa família e faça de cada visita uma experiência deliciosa. Esperamos por você nas Migas Amigas!",
                    direccion:"Estamos localizados na Rua Hermano Pedro, 5.",
                    tituloPan:"Aproveite nossos pães",
                    titulodulces:"Aproveite nossos doces caseiros",
                    pieImagen:"Imagem de pães caseiros recém-assados",
                    nombreForm:"Nome",
                    emailForm:"E-mail",
                    mensajeForm:"Mensagem",
                    select:"Selecione uma opção",
                    opcion1:"Estou interessado em seus pães",
                    opcion2:"Estou interessado nos doces deles",
                    opcion3:"Estou interessado nas empanadas deles",
                    caption:"Esta é a secção das nossas empanadas, não hesite em fazer a sua encomenda.",
                    captionPanaderia:"Esta é a secção dos nossos pães, não hesite em fazer a sua encomenda.",
                    captionDulces:"Esta é a secção dos nossos doces, não hesite em fazer a sua encomenda."

                }
            },
        
            es:{
                translation:{
                    titleHeader:'Bienvenidos a Migas Amigas',
                    footer:'Pie de pagina',
                    contacto:'Contactanos',
                    empanadas:'Esta es la pagina de las empanadas',
                    error:'Pagina de error',
                    panaderia:'Esta es la seccion de panaderia',
                    pasteleriabolleria:'Esta es la seccion de la pasteleria y bolleria',
                    inicio:'Pagina de inicio',
                    inicio1:'Inicio',
                    TituloEmpanada:'Disfruta de nuestras Empanadas',
                    textoInicio:"Descubre el placer del pan fresco y los dulces irresistibles en nuestra panadería. Desde croissants recién horneados hasta pasteles deliciosos, cada bocado está lleno de amor y sabor. Únete a nuestra familia y haz de cada visita una experiencia deliciosa. ¡Te esperamos en Migas Amigas!",
                    direccion:"Nos encontramos en la calle Hermano Pedro nº5",
                    tituloPan:"Disfruta de nuestros panes",
                    titulodulces:"Disfruta de nuestros dulces caseros",
                    pieImagen:"Imagen de panes caseros recien horneados",
                    nombreForm:"Nombre",
                    emailForm:"Email",
                    mensajeForm:"Mensaje",
                    select:"Selecciona una opcion",
                    opcion1:"Me interesan tus panes",
                    opcion2:"Me interesas sus dulces",
                    opcion3:"Me interesan sus empanadas",
                    caption:"Esta es la seccion de nuestras empanadas no dudes en hacernos tu pedido.",
                    captionPanaderia:"Esta es la seccion de nuestros panes no dudes en hacernos tu pedido.",
                    captionDulces:"Esta es la seccion de nuestros dulces no dudes en hacernos tu pedido."
                }   
            }
        }
    });

export default i18n;
