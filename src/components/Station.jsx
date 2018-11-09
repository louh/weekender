import React, { Component, Fragment } from 'react'
import PropTypes from "prop-types"
import { Link, withRouter } from 'react-router-dom'
import SubwayBullet from './SubwayBullet'
import Icon from './Icon'
import STATIONS_LIST from '../stations'
import './Station.css'

function splitStatusText (text) {
  return text.split('<br>$$<br>')
}

/**
 * Given a string with bracket notation placeholders, e.g.
 *  "This is a {{string}}"
 * The bracket is replaced with a component and its contents are passed to the component
 * @param {string} string 
 */
function replaceStringWithReactComponent (string) {
  const array = string.replace(/{{(.+?)}}/g, '|{{$1}}|').split('|')

  const thing = array.map((item) => {
    if (item.match(/^{{.+}}$/)) {
      const line = item.replace('{{', '').replace('}}', '')
      if (line === 'shuttle_bus') {
        return <Icon type="bus" />
      } else {
        return <SubwayBullet line={line} small />
      }
    }
    return item
  })

  return thing
}

function transformStatusTitle (text) {
  // Typography - should address variable whitespace
  const phase1 = text.replace(/\s*&bull;\s*/g, ' • ').replace(/\s*-\s*/g, '\u200a–\u200a')

  // Replace image HTML with {{brackets}}
  const phase1b = phase1.replace(/<img src='images\/routes\/14px\//g, '{{').replace(/.(png|gif)' align='bottom' \/>/g, '}}')

  // Add newlines between things
  // Split on anything that is 2 or more spaces
  // Drop any new array items that are empty strings
  const phase2 = phase1b.split(/ {2,}/).filter(i => i !== '')
  // Then add <br /> tags in between each line in React
  for (let i = 0; i < phase2.length; i++) {
    if (i % 2 === 0 && i < phase2.length - 1) {
      phase2.splice(i + 1, 0, <br />)
    }
  }

  // Turn title into bold text
  phase2[0] = <strong>{phase2[0]}</strong>

  // Replace images with bullet components
  // phase2[5] = phase2[5].replace(/<img src='images\/routes\/14px\/([A-Z0-9]|SIR).(png|gif)' align='bottom' \/>/g, <SubwayBullet line="Q" small />)
  phase2[phase2.length - 1] = replaceStringWithReactComponent(phase2[phase2.length - 1])

  // Original appends "more" to the end
  // phase2.push(' ... more')

  return phase2
}

class Station extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  renderBullets = (bullets) => {
    return bullets.map((line) => <SubwayBullet line={line} small key={line} />)
  }
  
  renderStatusTitles = (statuses) => {
    return statuses.map((text) => <li><a href="">{transformStatusTitle(text)}</a></li>)
  }

  render () {
    const stationId = Number.parseInt(this.props.match.params.station_id, 10)
    const station = STATIONS_LIST.get(stationId)

    /* global weekendstatus */
    const statuses = []
    const details = []
    for (let i = 0; i < weekendstatus.length; i++) {
      const status = weekendstatus[i].split(",")
      if (status[2] == stationId) {
        if (!status[0]) continue

        const statusID = status[0]
        const text = splitStatusText(statustext[statusID])
        statuses.push(text[0])
        details.push(text[1])

        // var detail = GetStatusDetailText(statustext[statusID]);
        // detail = detail.replace(/<img/g, "<img style='position:relative; top:2px;' ")
        // console.log(title)
        // sCount++;
        // statusMsg += '<div class="statusHeaderText" onmouseover="AllStationMouseOver(this);" onmouseout="AllStationMouseOut(this);" onclick="ShowHide(' + divID + ');">' + title + '</div><br>';
        // //statusMsg += '<div id=' + divID + ' style=display:none;top:5px;>' + detail + '</div>';
        // statusMsg += '<div id=' + divID + ' style=display:none;top:5px;>' + detail ;
        // statusMsg += '<a href="http://tripplanner.mta.info/MyTrip/ui_web/customplanner/tripplanner.aspx" border=0 target=_blank><img border=0 src=images/TPLink.jpg></a>' + '</div>';
      }
    }

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
          <h3>
            Weekend Service Notice
            {(statuses.length > 0) && <span className="heading-instructions">Select one for details</span>}
          </h3>

          {(statuses.length > 0) && (
            <ul>
              {this.renderStatusTitles(statuses)}
            </ul>
          )}
          {(statuses.length === 0) && (
            <p>
              No scheduled work affecting service at this station.
            </p>
          )}
        </section>
      </Fragment>
    )
  }
}

export default withRouter(Station)
