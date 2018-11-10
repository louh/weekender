import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

import IMG_WEEKENDER_TITLE from '../images/weekender.svg'
import IMG_WEEKENDER_TITLE_LEGACY from '../images/weekender_legacy.svg' // Easter egg.
import './Header.css'

export default class Header extends Component {
  render () {
    return (
      <header>
        <div className="header-title">
          <div className="header-white-line"></div>
          <h1><Link to="/">The Weekender</Link></h1>
          <Link to="/"><img className="header-image" src={IMG_WEEKENDER_TITLE} alt="The Weekender" /></Link>
        </div>
        <Nav />
      </header>
    )
  }
}
