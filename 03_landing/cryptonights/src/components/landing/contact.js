import React from 'react'

export const Contact = (props) => {
    return  (
<section id="contact" className="bg-secondary">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h2 className="section-heading">Contacto</h2>
          <p>Ponte en contacto con nosotros. Estaremos encantados de ayudarte a resolver todas tus dudas.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 ml-auto text-center">
          <i className="fa fa-phone fa-3x sr-contact"></i>
          <p>123-456-6789</p>
        </div>
        <div className="col-lg-4 mr-auto text-center">
          <i className="fa fa-envelope-o fa-3x sr-contact"></i>
          <p>
            <a href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</a>
          </p>
        </div>
      </div>
    </div>
  </section>
    )
}