import { Link } from "react-router-dom";
import Sidebar from './Sidebar'
function Navbar() {
  return (
    <div id='section-1'>

      <nav className="navbar">
        <div className="container-fluid">
          <Sidebar />
          <Link to={"/"} >
            <a className="navbar-brand A1 brand-name" href="#">AURA</a>
          </Link>

          
          
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon A1 lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
          
        </div>
      </nav>

      {/* Second Navbar */}
      <nav className="navbar-info">
        <div className="container-fluid">
          <p className="info-text">Want to add a PDF that isn't here? Contact us today on {" "}
          <a
              href="https://wa.me/2348112738759"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
               WhatsApp
            </a>
                </p>
        </div>
      </nav>
      
    </div>


  );
}

export default Navbar;
