import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import SubwayLineSelector from './SubwayLineSelector'
import SubwayBullet from './SubwayBullet'
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
        <h2>All stations <span className="heading-instructions">Select one for details</span></h2>
        <SubwayLineSelector />
        <hr />
      </Fragment>
    )
  }

  render () {
    const lineId = this.props.match.params['line_id']

    if (typeof lineId === 'undefined') {
      return this.renderLanding()
    }

    return (
      <Fragment>
        <h2>All stations <span className="heading-instructions">Select one for details</span></h2>
        <SubwayLineSelector />
        <hr />
        <section className="line-heading">
          <h3>
            <SubwayBullet line={lineId} large />
          </h3>
        </section>
        <section className="service-notice">
          {/* {this.renderStatusView(statuses, details)} */}
          <h3>Weekend service notice</h3>
        </section>
      </Fragment>
    )
  }
}
