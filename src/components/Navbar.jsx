import {Link} from 'react-router-dom';
import {useState} from 'react';


export default function Navbar(){

    const [isNavOpen, setIsNavOpen] = useState(false);

  return(
    <header>
        <Link to="/" className="logo">
            <h2 id="logo">Joshua Ng</h2>
        </Link>
        <nav>
            <ul className={isNavOpen ? "open" : ""}>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/projects">PROJECTS</Link></li>
                <li><Link to="/cv">CV</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
        <p className="toggle-input" onClick={()=> setIsNavOpen(!isNavOpen)}  >MENU GOES HERE</p>
    </header>
    
            )
}