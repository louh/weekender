import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import L from 'leaflet'
import 'leaflet-rastercoords'
import LineDiagram from './LineDiagram'
import BoroughStatus from './BoroughStatus'

import '../../node_modules/leaflet/dist/leaflet.css'
import './MapContainer.css'

import IMG_DOT_BLACK from '../images/dot_black.svg'
import IMG_DOT_GRAY from '../images/dot_gray.svg'
import IMG_DOT_WHITE from '../images/dot_white.svg'
import IMG_DOT_FLASHING from '../images/dot_flashing.svg'

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
    const img = [
      8192, // original width of image
      8192  // original height of image
    ]

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

    // Proof of concept markers
    // Use leaflet-rastercoords to convert pixel coordinates to map coordinates
    const rc = new L.RasterCoords(map, img)
    const testcoords = rc.unproject([429 * 2, 242 * 2])
    const circleMarker = L.circleMarker(testcoords, {
      radius: getMarkerRadiusForZoom(map.getZoom()),
      stroke: false,
      color: 'black',
      fillOpacity: 1,
      className: 'map-marker'
    }).addTo(map)

    // Returns 1 for zoom 2, 2 for zoom 3, 4 for zoom 4, 8 for zoom 5
    function getMarkerRadiusForZoom (zoom) {
      return Math.max(Math.pow(2, (zoom - 2)), 1)
    }

    map.on('zoomend', function() {
      const currentZoom = map.getZoom()

      // Resize the marker based on zoom level
      circleMarker.setRadius(getMarkerRadiusForZoom(currentZoom))

      // At low zooms, hide the dots
      if (currentZoom <= 1) {
        circleMarker.setStyle({ fillOpacity: 0 })
      } else {
        circleMarker.setStyle({ fillOpacity: 1 })
      }
    })

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
