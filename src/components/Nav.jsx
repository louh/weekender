import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.css'

export default class Nav extends Component {
  render () {
    return (
      <nav className="nav-container">
        <div className="nav-left">
          {/* Do not use images here like in the original, it facilitates localization */}
          <ul>
            <li className="hidden"><Link to="/status">Service Status</Link></li>
            <li><NavLink to="/station" activeClassName="nav-active">Service by Station</NavLink></li>
            <li><NavLink to="/line" activeClassName="nav-active">Service by Line</NavLink></li>
            <li><NavLink to="/borough" activeClassName="nav-active">Service by Borough</NavLink></li>
            <li className="hidden"><a href="http://tripplanner.mta.info/" target="_blank" rel="noopener noreferrer">Trip Planner+</a></li>
            <li className="hidden"><a href="http://mta.info/lirr" target="_blank" rel="noopener noreferrer">LIRR</a> / <a href="http://www.mta.info/mnr" target="_blank" rel="noopener noreferrer">Metro-North</a></li>
            <li className="hidden"><a href="http://mta.info/nyct/" target="_blank" rel="noopener noreferrer">Buses</a></li>
            <li className="hidden"><a href="http://www.mta.info/bandt" target="_blank" rel="noopener noreferrer">Bridges & Tunnels</a></li>
          </ul>
        </div>
        <div className="nav-right hidden">
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
