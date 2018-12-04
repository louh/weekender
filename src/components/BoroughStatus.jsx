import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import ServiceNotice from './ServiceNotice'
import { splitStatusText } from '../utils/parser'
import './BoroughStatus.css'

class BoroughStatus extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      borough: props.match.params.borough_id,
      active: null
    }
  }

  static getDerivedStateFromProps (props, state) {
    // Resets active selection when borough changes
    if (props.match.params.borough_id !== state.borough) {
      return {
        borough: props.match.params.borough_id,
        active: null
      }
    }

    return null
  }

  parseData (data) {
    return data.map(item => item.split('||')).map(item => ({ borough: item[0], summary: item[2], details: item[3] }))
  }

  getStatusesForBorough (borough, data) {
    if (borough === 'all') return data

    return data.filter(item => item.borough.toLowerCase() === borough)
  }

  displayLabel (id, forSentence = false) {
    switch (id) {
      case 'manhattan':
        return 'Manhattan'
      case 'queens':
        return 'Queens'
      case 'brooklyn':
        return 'Brooklyn'
      case 'bronx':
        if (forSentence) return 'the Bronx'
        return 'Bronx'
      case 'staten-island':
        return 'Staten Island'
      case 'all':
        if (forSentence) return 'all boroughs'
        return 'All boroughs'
      case undefined:
        if (forSentence) return ''
        return <em style={{ fontWeight: 'normal', color: '#666' }}>Please select a borough</em>
      default:
        if (forSentence) return ''
        return '404 Borough not found'
    }
  }

  renderStatusSummaries (borough, statuses) {
    if (borough && statuses.length === 0) {
      return <p>No scheduled work affecting service in {this.displayLabel(borough, true)}.</p>
    }

    return statuses
      .map((item) => splitStatusText(item.details))
      .map((status, i) => (
        <ServiceNotice
          key={i}
          status={status}
          active={JSON.stringify(this.state.active) === JSON.stringify(status)}
          togglable={false}
          onClick={(event) => {
            this.setState({
              active: status
            })
          }}
        />
      ))
  }

  render () {
    const { borough } = this.state
    /* global weekendboroughstatus */
    const data = this.parseData(weekendboroughstatus)
    const statuses = this.getStatusesForBorough(borough, data)

    return (  
      <div className="borough-status-container">
        <div className="info-panel borough-status-selector">
          <h2>
            Planned service changes
            {/* {borough && <span className="heading-instructions">Select one for details</span>} */}
          </h2>
          <hr />
          <h3>
            {this.displayLabel(borough)}
          </h3>
          <section className="service-notice-container">
            {this.renderStatusSummaries(borough, statuses)}
          </section>
        </div>
        <div className="info-panel borough-status-details" key={borough}>
          <h2>Details</h2>
          <hr />
          {borough && (this.state.active && (
            <ServiceNotice
              status={this.state.active}
              active={true}
              togglable={false}
            />
          ) || (
            (statuses.length > 0) && <em style={{ fontWeight: 'normal', color: '#666' }}>Please select a status</em>
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(BoroughStatus)
