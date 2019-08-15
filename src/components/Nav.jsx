import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SettingsContext } from './App'
import './Nav.css'

export default class Nav extends Component {
  render () {
    return (
      <SettingsContext.Consumer>
        {({ FULL_UI }) => (
          <nav className="nav-container">
            <div className={`nav-left ${FULL_UI && 'nav-left-columns'}`}>
              {/* Do not use images here like in the original. Text facilitates localization */}
              <ul>
                <li className={FULL_UI ? '' : 'hidden'}><Link to="/status">Service Status</Link></li>
                <li><NavLink to="/station" activeClassName="nav-active">Service by Station</NavLink></li>
                <li><NavLink to="/line" activeClassName="nav-active">Service by Line</NavLink></li>
                <li><NavLink to="/borough" activeClassName="nav-active">Service by Borough</NavLink></li>
                <li className={FULL_UI ? '' : 'hidden'}><a href="http://tripplanner.mta.info/" target="_blank" rel="noopener noreferrer">Trip Planner+</a></li>
                <li className={FULL_UI ? '' : 'hidden'}><a href="http://mta.info/lirr" target="_blank" rel="noopener noreferrer">LIRR</a> / <a href="http://www.mta.info/mnr" target="_blank" rel="noopener noreferrer">Metro-North</a></li>
                <li className={FULL_UI ? '' : 'hidden'}><a href="http://mta.info/nyct/" target="_blank" rel="noopener noreferrer">Buses</a></li>
                <li className={FULL_UI ? '' : 'hidden'}><a href="http://www.mta.info/bandt" target="_blank" rel="noopener noreferrer">Bridges & Tunnels</a></li>
              </ul>
            </div>
            <div className={`nav-right ${FULL_UI ? '' : 'hidden'}`}>
              <br /><br /><br />
              <ul>
                <li><a href="">Subway Diagram</a></li>
                <li className="float-right"><a href="http://www.mta.info/" target="_blank" rel="noopener noreferrer">MTA Home</a></li>
              </ul>
            </div>
          </nav>
        )}
      </SettingsContext.Consumer>
    )
  }
}
