import React, { Component } from 'react'

import IMG_WEEKENDER_TITLE from '../../images/weekender.svg'
import './Header.css'

export default class Header extends Component {
  render () {
    return (
      <header>
        <div className="header-title">
          <div className="header-white-line"></div>
          <h1>The Weekender</h1>
          <img className="header-image" src={IMG_WEEKENDER_TITLE} alt="The Weekender" />
        </div>
        <div className="header-container">
          <div className="header-left">
            {/* Do not use images here like in the original, it facilitates localization */}
            <ul>
              <li><a href="">Service Status</a></li>
              <li><a href="">Service by Station</a></li>
              <li><a href="">Service by Line</a></li>
              <li><a href="">Service by Borough</a></li>
              <li><a href="http://tripplanner.mta.info/" target="_blank" rel="noopener noreferrer">Trip Planner+</a></li>
              <li><a href="http://mta.info/lirr" target="_blank" rel="noopener noreferrer">LIRR</a> / <a href="http://www.mta.info/mnr" target="_blank" rel="noopener noreferrer">Metro-North</a></li>
              <li><a href="http://mta.info/nyct/" target="_blank" rel="noopener noreferrer">Buses</a></li>
              <li><a href="http://www.mta.info/bandt" target="_blank" rel="noopener noreferrer">Bridges & Tunnels</a></li>
            </ul>
          </div>
          <div className="header-right">
            <br /><br /><br />
            <ul>
              <li><a href="">Subway Diagram</a></li>
              <li className="float-right"><a href="http://www.mta.info/" target="_blank" rel="noopener noreferrer">MTA Home</a></li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}
