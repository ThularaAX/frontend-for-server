import { Link } from "react-router-dom/cjs/react-router-dom.min"

export default function NavBar(){

    
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/showdata"> Card</Link>
        </nav>
    )

}