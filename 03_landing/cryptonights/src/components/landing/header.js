import React from 'react'
import City from '../../static/img/city.png'

export const Header = (props) => {
    return (
        <header className="masthead">
        <div className="container masthead-container">
          <div className="header-content-inner">
            <h1 id="homeHeading">
              <span className="title-highlight">Criptonights</span> la primera ciudad digital para jugar casino y sorteos basados en
              <span className="title-highlight">blockchain</span>
            </h1>
          </div>
          <div className="row img-row">
            <div className="header-content-image">
              <img className="img-city" src={City}/>
            </div>
          </div>
        </div>
      </header>
    )
}