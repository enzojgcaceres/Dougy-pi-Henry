import s from "./Landing.module.css"
import { useNavigate } from "react-router-dom"
import mainDog from "../../assets/perros-vivir-mas-anos-1669733501.jpg"

const Landing = () => {
    const navigate = useNavigate()


    const login = () => {
        navigate("/home")
    }
    return (<div className={s.componentContainer}>

        <div className={s.mainImage}>
            <img className={s.image} src={mainDog} alt="" />
            <div className={s.intro}>
                <h1 className={`${s.style}`} >Bienvenidos a Dogs!</h1>
                <h2 className={`${s.style}`} >Ingresa para conocer mejor a tus mascotas</h2>


                <button className={s.button} onClick={login}>INGRESAR A DOGS</button>
            </div>
        </div>



    </div >)
}

export default Landing 