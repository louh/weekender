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
import Temp from './Temp'

export default class App extends Component {
  componentDidMount () {
    // Proof of concept Leaflet map tiles
    // Artificial wait because map might initialize while DOM layout is still doing stuff
    const mymap = L.map('map', {
      attributionControl: false,
      zoomControl: false,
      center:  {lat: 40.800766363190576, lng: -73.92056884244084},
      zoom: 15
    })

    L.tileLayer('/images/tiles/{z}/{x}/{y}.png', {
      attribution: false,
      maxZoom: 16,
      minZoom: 14
    }).addTo(mymap)
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
            <Route path="/legend" exact component={Legend} />
            <Route path="/" exact component={Temp} />
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
