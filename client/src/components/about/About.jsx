import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../about/about.module.css"

export default function About(){
    const navigate = useNavigate()

    const goBack = () => {
        navigate("/home")
    }

    return(<>
        <div className={style.aboutContainer}>
             <div>
                <button onClick={goBack}>Regresar</button>
            </div>
            <h1>Desarrollado por</h1>
            <h2> Enzo J. G. Cáceres </h2>
            <h2>Desarrollador Full Stack en formación | Bootcamp en SoyHenry | Apasionado por la creación de soluciones tecnológicas.</h2>
            <p>Visita mi
            <a 
                href="https://github.com/enzojgcaceres"
                target="_blank"
                >GitHub </a>
            </p>
            <p>Visita mi 
                <a href="https://www.linkedin.com/in/enzo-caceres-5aa944269/"
                target="_blank"
                >Linkedin </a>
            </p>
        </div>
        </>
    )
}