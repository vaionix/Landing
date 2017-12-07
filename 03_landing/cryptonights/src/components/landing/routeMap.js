import React from 'react'

export const RouteMap = (props) => {

    return (
        <section className="bg-secondary route-map full-screen" id="mapa">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="section-heading">MAPA DE RUTA</h2>
              <p className="text-faded">Estamos construyendo un ecosistema completo donde puedas divertirte y ganar sin preocuparte por nada.</p>
            </div>
          </div>
          
          <div className="row info-cards-row">
            <div className="col-lg-4 col-md-6 text-center separator">
              <div className="map_route-card">
                <div className="circle">
                  <div className="inner-circle">
                    <h3>01</h3>
                    <p>$1.5M</p>
                  </div>
                </div>
                <div className="separator">
                </div>
                <div className="content">
                  <h3>Plataforma y app</h3>
                  <p>Desarrollo de la aplicación web y móvil con juegos de tragaperras, bingo, ruleta, sorteos, juegos de cartas
                    y apuestas.</p>
                </div>
                <div className="footer">
                </div>
              </div>
            </div>
    
            <div className="col-lg-4 col-md-6 text-center separator">
              <div className="map_route-card">
                <div className="circle">
                  <div className="inner-circle">
                    <h3>02</h3>
                    <p>$3M</p>
                  </div>
                </div>
                <div className="separator">
                </div>
                <div className="content">
                  <h3>Torneos en línea</h3>
                  <p>Sistema para crear torneos en linea, sistema de ligas, puntuaciones, etc.</p>
                </div>
                <div className="footer">
                </div>
              </div>
            </div>
    
            <div className="col-lg-4 col-md-6 text-center separator">
              <div className="map_route-card">
                <div className="circle">
                  <div className="inner-circle">
                    <h3>03</h3>
                    <p>$5M</p>
                  </div>
                </div>
                <div className="separator">
                </div>
                <div className="content">
                  <h3>Casino VR</h3>
                  <p>Toda la experiencia de un casino agregado a la realidad virtual, tarjetas de debito para retirar ganancias.</p>
                </div>
                <div className="footer">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}