import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { setMapViewToRasterCoords } from '../map'
import ServiceNotice from './ServiceNotice'
import SubwayBullet from './SubwayBullet'
import STATIONS_LIST from '../stations'
import { splitStatusText } from '../utils/parser'
import './StationView.css'

class StationView extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  componentDidMount () {
    /* global stationMapCoordinates */
    const stationId = Number.parseInt(this.props.match.params.station_id, 10)
    const coordData = stationMapCoordinates[stationId].split(',')
    const x = Number.parseInt(coordData[0], 10)
    const y = Number.parseInt(coordData[1], 10)
    setMapViewToRasterCoords(x, y, 5)
  }

  renderBullets = (bullets) => {
    return bullets.map((line) => <SubwayBullet line={line} small key={line} />)
  }

  renderInteractiveStatus = (statuses) => {
    return statuses.map(({ id, ...status }, i) => (
      <ServiceNotice key={id} status={status} active={false} togglable={true} />
    ))
  }

  renderStatusView = (statuses) => {
    if (statuses.length === 1) {
      const status = statuses[0]
      return (
        <Fragment>
          <h3>Weekend service notice</h3>

          <ServiceNotice status={status} active />
        </Fragment>
      )
    } else if (statuses.length >= 1) {
      return (
        <Fragment>
          <h3>
            Weekend service notice
            <span className="heading-instructions">Select one for details</span>
          </h3>

          {this.renderInteractiveStatus(statuses)}
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <h3>Weekend service notice</h3>

          <p>
            No scheduled work affecting service at this station.
          </p>
        </Fragment>
      )
    }
  }

  renderError () {
    return (
      <Fragment>
        <h2>
          <Link to="/station">All stations</Link>
        </h2>

        <hr />

        <section>
          <h3>Invalid station</h3>
        </section>
      </Fragment>
    )
  }

  render () {
    const stationId = Number.parseInt(this.props.match.params.station_id, 10)
    const station = STATIONS_LIST.filter((station) => station.id === stationId)[0]

    // If station isn't found, bail and render error
    if (typeof station === 'undefined') {
      return this.renderError()
    }

    /* global weekendstatus, statustext */
    const statuses = []
    for (let i = 0; i < weekendstatus.length; i++) {
      const [ statusId , unused, station ] = weekendstatus[i].split(',')
      if (station == stationId) {
        if (!statusId) continue

        const status = splitStatusText(statustext[statusId])
        statuses.push({ id: Number.parseInt(statusId, 10), ...status })
      }
    }

    return (
      <Fragment>
        <h2>
          <Link to="/station">All stations</Link>
        </h2>

        <hr />

        <section>
          <h3 className="station-label">{station.label}</h3>
          <span className="station-bullets">{this.renderBullets(station.lines)}</span>
        </section>

        <section className="service-notice-container">
          {this.renderStatusView(statuses)}
        </section>
      </Fragment>
    )
  }
}

export default withRouter(StationView)
