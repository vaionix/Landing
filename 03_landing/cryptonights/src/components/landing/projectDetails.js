import React from 'react'
import Icon1 from '../../static/img/project_detail_icons/icon-01.svg'
import Icon2 from '../../static/img/project_detail_icons/icon-02.svg'
import Icon3 from '../../static/img/project_detail_icons/icon-04.svg'
import Icon4 from '../../static/img/project_detail_icons/icon-05.svg'
import Icon5 from '../../static/img/project_detail_icons/icon-03.svg'

export const ProjectDetails = (props) => {

    return (
        <section className="project-details full-screen" id="proyecto">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">DETALLE DEL PROYECTO</h2>
              <p className="text-faded">Transformando la forma de ganar en un casino, los sorteos y las apuestas en linea.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 text-center">
              <div className="service-box">
                <img src={Icon1}/>
                <div className="content">
                  <h3>Variedad de juegos</h3>
                  <p className="text-muted">Disfruta de una gran variedad de juegos, toda la experiencia de ir a un casino al alcance de un clic.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 text-center">
              <div className="service-box">
                <img src={Icon2}/>
                <div className="content">
                  <h3>Torneos y ligas</h3>
                  <p className="text-muted">Disfruta de una gran variedad de juegos, toda la experiencia de ir a un casino al alcance de un clic.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 text-center">
              <div className="service-box">
                <img src={Icon3}/>
                <div className="content">
                  <h3>Pago inmediato</h3>
                  <p className="text-muted">De manera sencilla e inmediata, recibe tus ganancias y cobralas facilmente.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 text-center">
              <div className="service-box">
                <img src={Icon4}/>
                <div className="content">
                  <h3>Casino VR</h3>
                  <p className="text-muted">Jamás una plataforma brindo una experiencia como esta, la realidad virtual llego a la plataforma de casinos.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 text-center">
              <div className="service-box">
                <img src={Icon5}/>
                <div className="content">
                  <h3>Usuarios Premium</h3>
                  <p className="text-muted">Disfruta de acceso a salas especiales, aprovecha los grandes beneficios y promociones que tiene ser un usuario
                    premium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}