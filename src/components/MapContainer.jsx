import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import L from 'leaflet'
import LineDiagram from './LineDiagram'
import BoroughStatus from './BoroughStatus'
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

    // Proof of concept Leaflet map tiles
    const map = L.map('map', {
      attributionControl: false,
      zoomControl: false,
      center: { lat: 40.80077, lng: -73.92057 },
      zoom: 15,
      maxBounds: L.latLngBounds(L.latLng(40.88031, -73.981899), L.latLng(40.769620, -73.835736)),
      maxBoundsViscosity: 0.5
    })

    L.tileLayer('/tiles/{z}/{x}/{y}.png', {
      attribution: false,
      maxZoom: 16,
      minZoom: 15
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
