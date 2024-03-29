import { NavLink } from "react-router-dom"
import s from "../../components/Nav/Nav.module.css"


const Nav = (props) => {
    return (<>
        <nav className={s.navContainer}>

            <div className={s.linksContainer}>
                <NavLink className={s.favorites} to="/home" >Home</NavLink>
                <NavLink className={s.favorites} to="/form" >Crear Perro</NavLink>
                <NavLink className={s.favorites} to="/" >Landing</NavLink>
                <NavLink className={s.favorites} to="/about" >About</NavLink>


            </div>
        </nav>

    </>)
}

export default Nav 