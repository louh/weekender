import React, { Component, Fragment } from 'react'
import PropTypes from "prop-types"
import { Link, withRouter } from 'react-router-dom'
import SubwayBullet from './SubwayBullet'
import Icon from './Icon'
import STATIONS_LIST from '../stations'
import './Station.css'

class Station extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  renderBullets = (bullets) => {
    return bullets.map((line) => <SubwayBullet line={line} small key={line} />)
  }

  render () {
    const id = Number.parseInt(this.props.match.params.station_id, 10)
    const station = STATIONS_LIST.get(id)

    return (
      <Fragment>
        <h2>
          <Link to="/station">All Stations</Link>
        </h2>
        <hr />
        <section>
          <h3>{station.label}</h3>
          <span className="station-bullets">{this.renderBullets(station.lines)}</span>
        </section>
        <section className="service-notice">
          <h3>Weekend Service Notice <span className="heading-instructions">Select one for details</span></h3>

          <ul>
            <li><a href="">TRACK MAINTENANCE 10:45 PM Fri, Oct 12 to 5 AM Mon, Oct 15 Norwood-bound <SubwayBullet line="D" small /> trains skip 25 St, Prospect Av, 4 Av-9 St, Union St and DeKalb Av in Brooklyn</a></li>
            <li><a href="">TRACK MAINTENANCE 9:30 PM Fri, Oct 12 to 5 AM Mon, Oct 15 <SubwayBullet line="Q" small /> Service between 96 St in Manhattan and Prospect Park in Brooklyn is replaced by <SubwayBullet line="M" small /><SubwayBullet line="N" small /><SubwayBullet line="R" small /> trains and <Icon type="bus" /> free shuttle buses</a></li>
          </ul>
        </section>
      </Fragment>
    )
  }
}

export default withRouter(Station)
