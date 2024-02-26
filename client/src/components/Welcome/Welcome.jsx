
import s from "./Welcome.module.css"
import perroWelcome from "../../../src/assets/shar-pei-cachorros.jpg"

const Welcome = () => {

    return (
        <div className={s.welcomeContainer}>
            <figure className={s.welcomeImgContainer}>
                <img src={perroWelcome} alt="" />
            </figure>

            <div className={s.welcomeGreetingContainter}>
                <p>¡Bienvenido a nuestra aplicación de perros! Aquí podrás buscar,
                    filtrar entre varios items y crear perfiles para estos entrañables peludos. También podrás
                    ver sus características y temperamentos para encontrar el que mejor se adapte a ti. ¡Diviértete explorando el mundo de los perros con nuestra aplicación!</p>
            </div>
        </div>
    )
}

export default Welcome