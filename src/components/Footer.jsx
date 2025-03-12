import './footer.css';
import{Link} from 'react-router-dom';

export default function Footer(){
  return(

    <footer className="footer-container">
     

      <div className="lets-connect-container">
      <p className="connect-title">Let's Connect</p>
      <list >
        <ul><Link to="https://www.instagram.com/joshuauaua" className="connect-link">Instagram</Link></ul>
        <ul><Link to="https://www.instagram.com/joshuauaua" className="connect-link">Discord</Link></ul>
        <ul><Link to="https://www.instagram.com/joshuauaua" className="connect-link">Substack</Link></ul>
        <ul><Link to="https://www.instagram.com/joshuauaua" className="connect-link">LinkedIn</Link></ul>
        <ul><Link to="https://www.instagram.com/joshuauaua" className="connect-link">Github</Link></ul>
      </list>
      </div>

      <p className="footer-text" >Made with &#x2665;&#xfe0f; in Stockholm</p>
      <p className="footer-text">© Joshua Ng 2025</p>
    </footer>



  )
}