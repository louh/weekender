import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import SubwayLineSelector from './SubwayLineSelector'
import ServiceNotice from './ServiceNotice'
import SubwayBullet from './SubwayBullet'
import { splitStatusText } from '../utils/parser'
import './LineView.css'

export default class LineView extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  renderLanding () {
    return (
      <Fragment>
        <h2>Subway lines <span className="heading-instructions">Select one for service details</span></h2>
        <SubwayLineSelector />
        <hr />
      </Fragment>
    )
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
            No scheduled work affecting service on this line.
          </p>
        </Fragment>
      )
    }
  }

  renderError () {
    return (
      <Fragment>
        {this.renderLanding()}
        <section>
          <h3>Invalid line</h3>
        </section>
      </Fragment>
    )
  }

  render () {
    const lineId = this.props.match.params['line_id']

    if (typeof lineId === 'undefined') {
      return this.renderLanding()
    }

    // If line isn't found, bail and render error
    // (TODO) we need a different check for this
    // if (typeof lineId === 'undefined') {
    //   return this.renderError()
    // }

    /* global weekendroutestatus */
    const statuses = []
    for (let i = 0; i < weekendroutestatus.length; i++) {
      const [ line, unused, statusText ] = weekendroutestatus[i].split('||')
      if (line.toUpperCase() === lineId.toUpperCase()) {
        const text = splitStatusText(statusText)
        statuses.push({ id: i, ...text })
      }
    }

    return (
      <Fragment>
        {this.renderLanding()}
        <section className="line-heading">
          <h3>
            <SubwayBullet line={lineId} large />
          </h3>
        </section>
        <section className="service-notice-container">
          {this.renderStatusView(statuses)}
        </section>
      </Fragment>
    )
  }
}
