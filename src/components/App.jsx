import React, { Component, Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import InfoPanel from './InfoPanel'
import MapContainer from './MapContainer'
import './App.css'

export const SettingsContext = React.createContext()

export default class App extends Component {
  state = {
    settings: {
      LOGO_LEGACY_TYPEFACE: false,
      SUBWAY_BULLET_OFFICIAL_COLORS: false,
      FULL_UI: false
    }
  }

  render () {
    return (
      <SettingsContext.Provider value={this.state.settings}>
        <Header />
        <main>
          <InfoPanel />
          <MapContainer />
        </main>
        <Footer />
      </SettingsContext.Provider>
    )
  }
}
