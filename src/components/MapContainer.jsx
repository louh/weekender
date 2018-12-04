import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { initMap } from '../map'
import LineDiagram from './LineDiagram'
import BoroughStatus from './BoroughStatus'

import '../../node_modules/leaflet/dist/leaflet.css'
import './MapContainer.css'

export default class MapContainer extends Component {
  state = {
    hasError: false,
    error: null
  }

  constructor (props) {
    super(props)

    this.mapEl = React.createRef()
  }

  static getDerivedStateFromError (error) {
    return {
      hasError: true,
      error
    }
  }

  componentDidMount () {
    if (!this.mapEl.current) return

    initMap()
  }

  render () {
    if (this.state.hasError) {
      return (
        <div className="map-container map-container-error">
          <h2>An error occurred <span className="heading-instructions">Try reloading the page</span></h2>
        </div>
      )
    }

    return (
      <div className="map-container">
        <Route path="/line/" exact component={LineDiagram} />
        <Route path="/line/:line_id" component={LineDiagram} />
        <Route path="/borough/" component={BoroughStatus} />
        <Route path="/borough/:borough_id" component={BoroughStatus} />
        <div id="map" ref={this.mapEl} />
      </div>
    )
  }
}
