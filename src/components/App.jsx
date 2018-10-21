import React from 'react'
import L from 'leaflet'
import Header from './Header'
import Footer from './Footer'
import SubwayBullet from './SubwayBullet'
import Icon from './Icon'
import SubwayLineSelector from './SubwayLineSelector';

export default class App extends React.Component {
  componentDidMount () {
    // Proof of concept Leaflet map tiles
    // Artificial wait because map might initialize while DOM layout is still doing stuff
    const mymap = L.map('map', {
      attributionControl: false,
      zoomControl: false,
      center:  {lat: 40.800766363190576, lng: -73.92056884244084},
      zoom: 15
    })

    L.tileLayer('./images/tiles/{z}/{x}/{y}.png', {
      attribution: false,
      maxZoom: 16,
      minZoom: 14
    }).addTo(mymap)
  }

  handleSelectSubwayLine = (event) => {
    console.log('clicked', event)
  }

  render () {
    return (
      <React.Fragment>
        <Header />
        <main>
          <div className="info-panel">
            <h2>Subway Lines <span className="heading-instructions">Select one for service details</span></h2>
            {/* <h2>All Stations <span className="heading-instructions">Select one for details</span></h2> */}
            
            <SubwayLineSelector onClick={this.handleSelectSubwayLine} />

            <hr />

            <section>
              <h3>DeKalb Av</h3>
              <span><SubwayBullet line="B" small /></span>
            </section>
            <section className="service-notice">
              <h3>Weekend Service Notice <span className="heading-instructions">Select one for details</span></h3>

              <ul>
                <li><a href="">TRACK MAINTENANCE 10:45 PM Fri, Oct 12 to 5 AM Mon, Oct 15 Norwood-bound <SubwayBullet line="D" small /> trains skip 25 St, Prospect Av, 4 Av-9 St, Union St and DeKalb Av in Brooklyn</a></li>
                <li><a href="">TRACK MAINTENANCE 9:30 PM Fri, Oct 12 to 5 AM Mon, Oct 15 <SubwayBullet line="Q" small /> Service between 96 St in Manhattan and Prospect Park in Brooklyn is replaced by <SubwayBullet line="M" small /><SubwayBullet line="N" small /><SubwayBullet line="R" small /> trains and <Icon type="bus" /> free shuttle buses</a></li>
              </ul>
            </section>

          </div>
          <div className="map-container">
            <div id="map"></div>
            {/*<!-- <div className="static-map">
              <img src="./images/station_view.png">
            </div> -->*/}
          </div>
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}
