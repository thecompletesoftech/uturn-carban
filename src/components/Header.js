import React from 'react'


const Header = () =>{
    <header id="site-header" className="fixed-top">
    <section className="w3l-header-4">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <h1>
            <a className="navbar-brand" href="index.html">
              <span className="fa fa-clone" /> Excellence
            </a>
          </h1>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa icon-expand fa-bars" />
            <span className="fa icon-close fa-times" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">
                  Home{" "}
                </a>
              </li>
              <li className="nav-item @@about__active">
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item @@services__active">
                <a className="nav-link" href="services.html">
                  Our Services
                </a>
              </li>
              <li className="nav-item @@contact__active">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
            
            {/* //toggle switch for light and dark theme */}
            {/* search popup */}
           
            {/* /search popup */}
          </div>
          {/* toggle switch for light and dark theme */}
         
        </nav>
      </div>
    </section>
  </header>
  
}

export default Header