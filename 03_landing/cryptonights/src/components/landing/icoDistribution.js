import React from 'react'


const ICODistribution = (props) => {
    return(
        <section className="ico-distribution" id="ICO">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">DISTRIBUCIÓN ICO</h2>
              <p className="text-faded">Distribución de los tokens.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="user-distribution">
                  <div className="bar"></div>
                  <div className="info-bar">
                    <div className="arrow"></div>
                    <div className="info">
                      <p>85%</p>
                      <p>Distribución Usuarios</p>
                    </div>
                  </div>
                </div>
                <div className="founders-distribution">
                  <div className="info-bar-inverted">
                    <div className="arrow"></div>
                    <div className="info">
                      <p>12%</p>
                      <p>Fundadores</p>
                    </div>
                  </div>
                  <div className="bar">
        
                  </div>
                  <div className="info-bar">
                    <div className="arrow"></div>
                    <div className="info">
                      <p>12%</p>
                      <p>Fundadores</p>
                    </div>
                  </div>
                </div>
                <div className="rewards-distribution">
                  <div className="bar">
        
                  </div>
                  <div className="info-bar">
                    <div className="arrow"></div>
                    <div className="info">
                      <p>3%</p>
                      <p>Recompensas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
    )
}