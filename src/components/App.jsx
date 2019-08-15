import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import InfoPanel from './InfoPanel'
import MapContainer from './MapContainer'
import './App.css'

export const SettingsContext = React.createContext()

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      LOGO_LEGACY_TYPEFACE: false,
      SUBWAY_BULLET_OFFICIAL_COLORS: false,
      FULL_UI: false,
      settingsVisible: false,
      toggleSettingsScreen: this.toggleSettingsScreen,
      setSetting: this.setSetting
    }
  }

  toggleSettingsScreen = () => {
    const bool = !this.state.settingsVisible
    if (bool === true) {
      // Diablo reference
      console.log('Gem Activated')
      this.setState({ settingsVisible: true })
    } else {
      console.log('Gem Deactivated')
      this.setState({ settingsVisible: false })
    }
  }

  setSetting = (id, bool) => {
    this.setState({
      [id]: bool
    })
  }

  render () {
    return (
      <SettingsContext.Provider value={this.state}>
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
