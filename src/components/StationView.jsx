import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import ServiceNotice from './ServiceNotice'
import SubwayBullet from './SubwayBullet'
import STATIONS_LIST from '../stations'
import './StationView.css'

function splitStatusText (text) {
  const split = text.split('$$')
  return {
    summary: split[0],
    details: split[1]
  }
}

class StationView extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      activeStatus: null
    }
  }

  handleClickStatus = (event, id) => {
    event.preventDefault()

    // Toggles active state
    if (id === this.state.activeStatus) {
      this.setState({
        activeStatus: null
      })
    } else {
      this.setState({
        activeStatus: id
      })
    }
  }

  renderBullets = (bullets) => {
    return bullets.map((line) => <SubwayBullet line={line} small key={line} />)
  }

  renderInteractiveStatus = (statuses) => {
    return statuses.map(({ id, ...status }, i) => (
      <a href="" onClick={(e) => this.handleClickStatus(e, i)} key={id}>
        <ServiceNotice status={status} active={(this.state.activeStatus === i)} />
      </a>
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
    const station = STATIONS_LIST.get(stationId)

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
        statuses.push({ id: statusId, ...status })

        // statusMsg += '<a href="http://tripplanner.mta.info/MyTrip/ui_web/customplanner/tripplanner.aspx" border=0 target=_blank><img border=0 src=images/TPLink.jpg></a>' + '</div>';
      }
    }

    return (
      <Fragment>
        <h2>
          <Link to="/station">All stations</Link>
        </h2>

        <hr />

        <section>
          <h3>{station.label}</h3>
          <span className="station-bullets">{this.renderBullets(station.lines)}</span>
        </section>

        <section className="service-notice">
          {this.renderStatusView(statuses)}
        </section>
      </Fragment>
    )
  }
}

export default withRouter(StationView)
