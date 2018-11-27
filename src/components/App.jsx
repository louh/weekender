import React, { Component, Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import InfoPanel from './InfoPanel'
import MapContainer from './MapContainer'

export default class App extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        <main>
          <InfoPanel />
          <MapContainer />
        </main>
        <Footer />
      </Fragment>
    )
  }
}
