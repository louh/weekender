import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends Component {
  render () {
    return (
      <nav className="nav-container">
        <div className="nav-left">
          {/* Do not use images here like in the original, it facilitates localization */}
          <ul>
            <li><Link to="/status">Service Status</Link></li>
            <li><Link to="/station">Service by Station</Link></li>
            <li><Link to="/line">Service by Line</Link></li>
            <li><Link to="/borough">Service by Borough</Link></li>
            <li><a href="http://tripplanner.mta.info/" target="_blank" rel="noopener noreferrer">Trip Planner+</a></li>
            <li><a href="http://mta.info/lirr" target="_blank" rel="noopener noreferrer">LIRR</a> / <a href="http://www.mta.info/mnr" target="_blank" rel="noopener noreferrer">Metro-North</a></li>
            <li><a href="http://mta.info/nyct/" target="_blank" rel="noopener noreferrer">Buses</a></li>
            <li><a href="http://www.mta.info/bandt" target="_blank" rel="noopener noreferrer">Bridges & Tunnels</a></li>
          </ul>
        </div>
        <div className="nav-right">
          <br /><br /><br />
          <ul>
            <li><a href="">Subway Diagram</a></li>
            <li className="float-right"><a href="http://www.mta.info/" target="_blank" rel="noopener noreferrer">MTA Home</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
