import React, { Suspense } from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Principal from "../views/Principal";
import Panaderia from "../views/Panaderia";
import PasteleriaBolleria from "../views/PasteleriaBolleria"
import Contacto from "../views/Contacto";
import Empanadas from "../views/Empanadas";
import Footer from "../components/Footer";
import HeaderNav from "../components/HeaderNav";
import Error from "../views/Error404";

const MisRutas = () =>{
    return(
        <div style={{marginLeft: '20px', marginRight: '20px'}}>
            <Suspense fallback="loading">
            <BrowserRouter>
                <HeaderNav/><hr/>
                <Routes>
                    <Route path="/" element={<Principal/>}/>
                    <Route path="/inicio" element={<Principal/>}/>
                    <Route path="/panaderia" element={<Panaderia/>}/>
                    <Route path="/pasteleriabolleria" element={<PasteleriaBolleria/>}/>
                    <Route path="/empanadas" element={<Empanadas/>}/>
                    <Route path="/contacto" element={<Contacto/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </BrowserRouter>
            </Suspense>
            <hr/>
            <Footer/>
        </div>
    )
}
export default MisRutas;