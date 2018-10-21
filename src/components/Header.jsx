import React, { Component } from 'react'

import IMG_WEEKENDER_TITLE from '../../images/weekender.svg'

export default class Header extends Component {
  render () {
    return (
      <header>
        <div className="banner-white-line"></div>
        <div className="header-container">
          <div className="header-right">
            <h1>The Weekender</h1>
            <img className="title" src={IMG_WEEKENDER_TITLE} alt="The Weekender" />
          </div>
          <div className="header-left">
            {/* Do not use images here like in the original, it facilitates localization */}
            <ul>
              <li><a href="">Service Status</a></li>
              <li><a href="">Service by Station</a></li>
              <li><a href="">Service by Line</a></li>
              <li><a href="">Service by Borough</a></li>
              <li><a href="http://tripplanner.mta.info/" target="_blank" rel="noopener noreferrer">Trip planner+</a></li>
              <li><a href="http://mta.info/lirr" target="_blank" rel="noopener noreferrer">LIRR</a> / <a href="http://www.mta.info/mnr" target="_blank" rel="noopener noreferrer">Metro-North</a></li>
              <li><a href="http://mta.info/nyct/" target="_blank" rel="noopener noreferrer">Buses</a></li>
              <li><a href="http://www.mta.info/bandt" target="_blank" rel="noopener noreferrer">Bridges & Tunnels</a></li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}
