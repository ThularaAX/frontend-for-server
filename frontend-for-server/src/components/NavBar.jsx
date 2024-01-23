import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

export default function NavBar(){

    const style =   
        { color: 'white',
        backgroundColor: "gray" }

    const active = {
        color: 'Red',
        backgroundColor: "Black"
    }

    return (
        <nav>
            <NavLink activeStyle= {active} style={style} to="/">Home</NavLink>
            <NavLink activeStyle= {active} style={style} to="/about">About</NavLink>
            <NavLink activeStyle= {active} style={style} to="/contact">Contact</NavLink>
            <NavLink activeStyle= {active} style={style} to="/showdata"> Card</NavLink>
        </nav>
    )

}