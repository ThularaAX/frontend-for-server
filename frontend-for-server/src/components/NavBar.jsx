import { Link } from "react-router-dom/cjs/react-router-dom.min"

export default function NavBar(){

    const style =   
        { color: 'white',
        backgroundColor: "gray" }
    return (
        <nav>
            <Link style={style} to="/">Home</Link>
            <Link style={style} to="/about">About</Link>
            <Link style={style} to="/contact">Contact</Link>
            <Link style={style} to="/showdata"> Card</Link>
        </nav>
    )

}