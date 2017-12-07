import React from 'react'

export const Documents = (props) => {

    return (
        <section className="documents" id="documentos">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">DOCUMENTOS</h2>
              <p className="text-faded">Toda la información que necesitas saber</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 text-center margin-top separator">
              <i className="fa fa-file-text fa-5x" aria-hidden="true"></i>
              <h3>Token</h3>
            </div>
            <div className="col-lg-4 col-md-6 text-center margin-top separator">
              <i className="fa fa-file-text fa-5x" aria-hidden="true"></i>
              <h3>White Paper</h3>
            </div>
            <div className="col-lg-4 col-md-6 text-center margin-top separator">
              <i className="fa fa-file-text fa-5x" aria-hidden="true"></i>
              <h3>Términos y Condiciones</h3>
            </div>
          </div>
        </div>
      </section>
    )
}