import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

export default function NavBar(){

    const style =   
        { color: 'white',
        backgroundColor: "gray" }
    return (
        <nav>
            <NavLink style={style} to="/">Home</NavLink>
            <NavLink style={style} to="/about">About</NavLink>
            <NavLink style={style} to="/contact">Contact</NavLink>
            <NavLink style={style} to="/showdata"> Card</NavLink>
        </nav>
    )

}