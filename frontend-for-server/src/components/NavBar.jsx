import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

export default function NavBar(){

    const style =   
        { color: 'black',
        backgroundColor: "white" }

    const active = {
        color: 'teal',
        backgroundColor: "Black"
    }

    return (
        <nav>
            <NavLink exact activeStyle= {active} style={style} to="/">Home</NavLink>
            <NavLink activeStyle= {active} style={style} to="/about">About</NavLink>
            <NavLink activeStyle= {active} style={style} to="/contact">Contact</NavLink>
            <NavLink activeStyle= {active} style={style} to="/showdata"> Card</NavLink>
            <NavLink activeStyle= {active} style={style} to="/cardpage"> Page</NavLink>
        </nav>
    )

}