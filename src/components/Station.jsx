import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import SubwayBullet from './SubwayBullet'
import Icon from './Icon'
import STATIONS_LIST from '../stations'
import './Station.css'

function splitStatusText (text) {
  const split = text.split('$$')
  return {
    summary: split[0],
    details: split[1]
  }
}

/**
 * Given a string with bracket notation placeholders, e.g.
 *  "This is a {{string}}"
 * The bracket is replaced with a component and its contents are passed to the component
 * @param {string} string 
 */
function replaceStringWithReactComponent (string) {
  // Returns as-is if not a string
  if (typeof string !== 'string') return string

  const array = string.replace(/{{(.+?)}}/g, '|{{$1}}|').split('|')

  const thing = array.map((item, i) => {
    if (item.match(/^{{.+}}$/)) {
      const line = item.replace('{{', '').replace('}}', '')
      if (line === 'shuttle_bus') {
        return <Icon type="bus" key={i * 10} />
      } else if (line === 'isa') {
        return <Icon type="isa" key={i * 10} />
      } else {
        return <SubwayBullet line={line} small key={i * 10} />
      }
    } else if (item.match('<br>')) {
      return <br key={i * 10} />
    }

    return item
  })

  return thing
}

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function transformStatusSummary (text) {
  // Typography - should address variable whitespace
  // Also get rid of <br>
  const phase1 = text.trim().replace(/\s*&bull;\s*/g, ' • ').replace(/\s*-\s*/g, '\u200a–\u200a').replace(/<br>/g, '')

  // Replace image HTML with {{brackets}}
  const phase1b = phase1.replace(/<img src='images\/routes\/14px\//g, '{{').replace(/.(png|gif)' align='bottom' \/>/g, '}}')

  // Add newlines between things
  // Split on anything that is 2 or more spaces
  // Drop any new array items that are empty strings
  const phase2 = phase1b.split(/ {2,}/).filter(i => i !== '')
  // Then add <br /> tags in between each line in React
  for (let i = 0; i < phase2.length; i++) {
    if (i % 2 === 0 && i < phase2.length - 1) {
      phase2.splice(i + 1, 0, <br key={i + 1} />)
    }
  }

  // Turn title into bold text
  phase2[0] = <strong key={0}>{capitalizeFirstLetter(phase2[0].toLowerCase())}</strong>

  // Replace images with bullet components
  phase2[phase2.length - 1] = replaceStringWithReactComponent(phase2[phase2.length - 1])

  // Original appends "more" to the end
  // phase2.push(' ... more')

  return phase2
}

function transformStatusDetail (text) {
  // Typography - should address variable whitespace
  const phase1 = text.trim().replace(/\s*&bull;\s*/g, ' • ').replace(/\s*-\s*/g, '\u200a–\u200a')

  // Replace image HTML with {{brackets}}
  const phase1b = phase1.replace(/<img src='images\/routes\/14px\//g, '{{').replace(/.(png|gif)' align='bottom' \/>/g, '}}')

  // Replace accessibility symbol
  const phase1c = phase1b.replace(/<img src='images\/ADA_WhlChr_small.gif'\s*\/?>/g, '{{isa}}')

  // Special work with <br>
  // If string begins or ends with any amount of <br>, remove it
  // Otherwise surround it with | so it can be split on later
  const phase2 = phase1c.replace(/^(<br>)*/, '').replace(/(<br>)*$/, '').replace(/<br>/g, '|<br>|')

  // Replace images with bullet components
  const phase3 = replaceStringWithReactComponent(phase2)

  return phase3
}

class Station extends Component {
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
    return statuses.map(({ summary, details }, i) => (
      <a href="" onClick={(e) => this.handleClickStatus(e, i)} key={i}>
        <article className={(this.state.activeStatus === i) ? 'service-notice-active' : undefined} key={i}>
          <p>
            {transformStatusSummary(summary)}
          </p>

          <p className="service-notice-details">
            {transformStatusDetail(details)}
          </p>
        </article>
      </a>
    ))
  }

  renderStatusView = (statuses) => {
    if (statuses.length === 1) {
      const status = statuses[0]
      return (
        <Fragment>
          <h3>Weekend service notice</h3>

          <article className="service-notice-active">
            <p>
              {transformStatusSummary(status.summary)}
            </p>

            <p className="service-notice-details">
              {transformStatusDetail(status.details)}
            </p>
          </article>
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
        statuses.push(splitStatusText(statustext[statusId]))

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

export default withRouter(Station)
