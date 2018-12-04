import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import L from 'leaflet'
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

    const TILES = '/tiles/{z}/{x}/{y}.png'
    const TILES_RETINA = '/tiles/{z}/{x}/{y}@2x.png'

    // Proof of concept Leaflet map tiles
    const map = L.map('map', {
      attributionControl: false,
      zoomControl: false,
      center: { lat: 31.2034, lng: -112.3242 },
      zoom: 3,
      maxBounds: L.latLngBounds(L.latLng(85.03100, -179.756927), L.latLng(-75.758940, 119.53125)),
      maxBoundsViscosity: 0.5
    })

    L.tileLayer(window.devicePixelRatio > 1 ? TILES_RETINA : TILES, {
      attribution: false,
      maxZoom: 5,
      minZoom: 1,
      noWrap: true
    }).addTo(map)

    map.on('click', (event) => {
      console.log(event.latlng)
    })
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
        {/*<!-- <div className="static-map">
          <img src="./images/station_view.png">
        </div> -->*/}
      </div>
    )
  }
}
