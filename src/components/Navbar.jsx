import {Link} from 'react-router-dom';
import {useState} from 'react';


export default function Navbar(){

    const [isNavOpen, setIsNavOpen] = useState(false);

  return(
    <header>
        <Link to="/" className="logo">
            <h2>Joshua<span> Ng</span></h2>
        </Link>
        <nav>
            <ul className={isNavOpen ? "open" : ""}>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/cv">CV</Link></li>
                <li><Link to="/contact">Get in Touch!</Link></li>
            </ul>
        </nav>
        <p className="toggle-input" onClick={()=> setIsNavOpen(!isNavOpen)}  >MENU GOES HERE</p>
    </header>
    
            )
}