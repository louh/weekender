import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import './BoroughStatus.css'

class BoroughStatus extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  displayLabel (id) {
    switch (id) {
      case 'manhattan':
        return 'Manhattan'
      case 'queens':
        return 'Queens'
      case 'brooklyn':
        return 'Brooklyn'
      case 'bronx':
        return 'Bronx'
      case 'staten-island':
        return 'Staten Island'
      case 'all':
        return 'All boroughs'
      case undefined:
        return <em style={{ fontWeight: 'normal', color: '#666' }}>Please select a borough</em>
      default:
        return '404 Borough not found'
    }
  }

  render () {
    return (
      <div className="borough-status-container">
        <div className="info-panel">
          <h2>
            Planned service changes
            {this.props.match.params.borough_id && <span className="heading-instructions">Select one for details</span>}
          </h2>
          <hr />
          <h3>
            {this.displayLabel(this.props.match.params.borough_id)}
          </h3>
        </div>
        <div className="info-panel">
          <h2>Details</h2>
          <hr />
        </div>
      </div>
    )
  }
}

export default withRouter(BoroughStatus)
