import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import { SettingsContext } from './App'

import IMG_WEEKENDER_TITLE from '../images/weekender.svg'
import IMG_WEEKENDER_TITLE_LEGACY from '../images/weekender_legacy.svg' // Easter egg.
import './Header.css'

const Header = (props) => (
  <header>
    <div className="header-title">
      <div className="header-white-line"></div>
      <h1><Link to="/">The Weekender</Link></h1>
      <SettingsContext.Consumer>
        {({ LOGO_LEGACY_TYPEFACE }) => (
          <Link to="/">
            <img
              className="header-image"
              src={LOGO_LEGACY_TYPEFACE ? IMG_WEEKENDER_TITLE_LEGACY : IMG_WEEKENDER_TITLE}
              alt="The Weekender"
            />
          </Link>
        )}
      </SettingsContext.Consumer>
    </div>
    <Nav />
  </header>
)

export default Header
