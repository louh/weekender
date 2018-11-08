import React, { Component } from 'react'
import Nav from './Nav'

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
        <Nav />
      </header>
    )
  }
}
