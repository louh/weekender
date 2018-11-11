import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import L from 'leaflet'
import Header from './Header'
import Footer from './Footer'
import StatusView from './StatusView'
import StationList from './StationList'
import Station from './Station'
import LineView from './LineView'
import Legend from './Legend'
import LandingView from './LandingView'

export default class App extends Component {
  componentDidMount () {
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
    return (
      <Fragment>
        <Header />
        <main>
          <div className="info-panel">
            <Route path="/status" exact component={StatusView} />
            <Route path="/station" exact component={StationList} />
            <Route path="/station/:station_id" component={Station} />
            <Route path="/line" exact component={LineView} />
            <Route path="/line/:line_id" component={LineView} />
            <Route path="/legend" exact component={Legend} />
            <Route path="/" exact component={LandingView} />
          </div>
          <div className="map-container">
            <div id="map"></div>
            {/*<!-- <div className="static-map">
              <img src="./images/station_view.png">
            </div> -->*/}
          </div>
        </main>
        <Footer />
      </Fragment>
    )
  }
}
