import React from 'react';

export const Navbar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <img src="./img/logo.svg" width="55" height="38" className="d-inline-block align-top" alt=""/> Criptonights
          </a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#mapa">Mapa de ruta</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#proyecto">Proyecto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#ICO">ICO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#documentos">Documento</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>    
    )
}