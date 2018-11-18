import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './LineDiagram.css'

import IMG_LINE_DIAGRAM_1 from '../images/line_diagrams/1.png'
import IMG_LINE_DIAGRAM_2 from '../images/line_diagrams/2.png'
import IMG_LINE_DIAGRAM_3 from '../images/line_diagrams/3.png'
import IMG_LINE_DIAGRAM_4 from '../images/line_diagrams/4.png'
import IMG_LINE_DIAGRAM_5 from '../images/line_diagrams/5.png'
import IMG_LINE_DIAGRAM_6 from '../images/line_diagrams/6.png'
import IMG_LINE_DIAGRAM_7 from '../images/line_diagrams/7.png'
import IMG_LINE_DIAGRAM_A from '../images/line_diagrams/a.png'
import IMG_LINE_DIAGRAM_C from '../images/line_diagrams/c.png'
import IMG_LINE_DIAGRAM_E from '../images/line_diagrams/e.png'
import IMG_LINE_DIAGRAM_L from '../images/line_diagrams/l.png'
import IMG_LINE_DIAGRAM_S from '../images/line_diagrams/s.png'
import IMG_LINE_DIAGRAM_B from '../images/line_diagrams/b.png'
import IMG_LINE_DIAGRAM_D from '../images/line_diagrams/d.png'
import IMG_LINE_DIAGRAM_F from '../images/line_diagrams/f.png'
import IMG_LINE_DIAGRAM_M from '../images/line_diagrams/m.png'
import IMG_LINE_DIAGRAM_N from '../images/line_diagrams/n.png'
import IMG_LINE_DIAGRAM_Q from '../images/line_diagrams/q.png'
import IMG_LINE_DIAGRAM_R from '../images/line_diagrams/r.png'
import IMG_LINE_DIAGRAM_W from '../images/line_diagrams/w.png'
import IMG_LINE_DIAGRAM_J from '../images/line_diagrams/j.png'
import IMG_LINE_DIAGRAM_Z from '../images/line_diagrams/z.png'
import IMG_LINE_DIAGRAM_G from '../images/line_diagrams/g.png'
import IMG_LINE_DIAGRAM_SIR from '../images/line_diagrams/sir.png'

import IMG_DOT_BLACK from '../images/dot_black.svg'
import IMG_DOT_GRAY from '../images/dot_gray.svg'
import IMG_DOT_WHITE from '../images/dot_white.svg'
import IMG_DOT_FLASHING from '../images/dot_flashing.svg'

const paths = {
  '1': IMG_LINE_DIAGRAM_1,
  '2': IMG_LINE_DIAGRAM_2,
  '3': IMG_LINE_DIAGRAM_3,
  '4': IMG_LINE_DIAGRAM_4,
  '5': IMG_LINE_DIAGRAM_5,
  '6': IMG_LINE_DIAGRAM_6,
  '7': IMG_LINE_DIAGRAM_7,
  'A': IMG_LINE_DIAGRAM_A,
  'C': IMG_LINE_DIAGRAM_C,
  'E': IMG_LINE_DIAGRAM_E,
  'L': IMG_LINE_DIAGRAM_L,
  'S': IMG_LINE_DIAGRAM_S,
  'B': IMG_LINE_DIAGRAM_B,
  'D': IMG_LINE_DIAGRAM_D,
  'F': IMG_LINE_DIAGRAM_F,
  'M': IMG_LINE_DIAGRAM_M,
  'N': IMG_LINE_DIAGRAM_N,
  'Q': IMG_LINE_DIAGRAM_Q,
  'R': IMG_LINE_DIAGRAM_R,
  'W': IMG_LINE_DIAGRAM_W,
  'J': IMG_LINE_DIAGRAM_J,
  'Z': IMG_LINE_DIAGRAM_Z,
  'G': IMG_LINE_DIAGRAM_G,
  'SIR': IMG_LINE_DIAGRAM_SIR,
}

export default class LineDiagram extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      stationLabel: '',
      stationLabelStyle: {}
    }
  }

  showStationInfo = (event) => {
    const el = event.target
    const lineData = stationMapCoordinates[el.id.split('_')[0]]
    const stationName = lineData.split(',')[2]
    const imgxLeftPoint = Number.parseInt(el.style.left, 10)
    const imgyTopPoint = Number.parseInt(el.style.top, 10)

    // Label alignment
    const strID = el.id.substring(0, el.id.length - 1)
    const offsetData = stationRouteMapCoordinates[strID]
    const alignment = offsetData.split(',')[3]
    let textAlign = 'left'
    let width = '250px'
    let divLeftOffsetPoint, divTopOffSetPoint

    switch (alignment) {
      case 'L': // Left
        divLeftOffsetPoint = 350
        divTopOffSetPoint = -1
        break
      case 'T': // Top
        divLeftOffsetPoint = 347
        divTopOffSetPoint = 10
        break
      case 'B': // Bottom
        divLeftOffsetPoint = 328
        divTopOffSetPoint = -17
        break
      case 'R': // Right
        divLeftOffsetPoint = 70
        divTopOffSetPoint = -1
        textAlign = 'right'
        break
    }

    const xLeftPoint = imgxLeftPoint + divLeftOffsetPoint - 330 + 'px'
    const yTopPoint = imgyTopPoint + divTopOffSetPoint + 'px'

    // Exceptions: override x, y, and width
    if (alignment === 'E') {
      yTopPoint = '280px'
      xLeftPoint = '850px'
      width = '100px'
    }
    
    this.setState({
      stationLabel: stationName,
      stationLabelStyle: {
        top: yTopPoint,
        left: xLeftPoint,
        width: width,
        textAlign: textAlign
      }
    })
  }


  handleMouseOverDot = (event) => {
    event.target.src = IMG_DOT_WHITE
    this.showStationInfo(event)
  }

  handleMouseOutDot = (event) => {
    switch (event.target.name) {
      case 'flashing':
        event.target.src = IMG_DOT_FLASHING
        break
      case 'gray':
        event.target.src = IMG_DOT_GRAY
        break
      case 'normal':
      default:
        event.target.src = IMG_DOT_BLACK
        break
    }

    this.setState({
      stationLabel: '',
      stationLabelStyle: {}
    })
  }

  renderDots (lineId) {
    const route = lineId.toUpperCase()
    const lineArrayName = `line_${route}_Data`
    const lineStationData = window[lineArrayName]
    const dotEls = []

    for (let i = 0; i < lineStationData.length; i++) {
      if (lineStationData[i].split(',')[0] === 'X') continue

      const lineIndex = Number.parseInt(lineStationData[i].split(',')[0], 10)
      const stationrouteIndex = lineIndex + '_' + route

      if (!stationRouteMapCoordinates[stationrouteIndex]) continue

      const lineData = stationRouteMapCoordinates[stationrouteIndex]
      const xLeftPoint = Number.parseInt(lineData.split(',')[0] * (630 / 3410) - 4) + 'px'
      const yTopPoint = Number.parseInt(lineData.split(',')[1] * (630 / 3410) - 4) + 'px'
      const ctrlID = lineIndex + '_' + route + 'l'
      let iconCategory = lineData.split(',')[4]

      // Default values (iconCategory === 'B')
      let name = 'normal'
      let imgSrc = IMG_DOT_BLACK

      // If dot is gray
      if (iconCategory === 'LG') {
        name = 'gray'
        imgSrc = IMG_DOT_GRAY
      }

      // Look for blinking dots
      for (let j = 0; j < weekendstatus.length; j++) {
        const status = weekendstatus[j].split(',')
        const routeID = status[1]
        const specialFlag = status[5]

        // "special flag" is a station with a status message, but should not be blinking
        if (specialFlag === 'Y') continue

        const imgElementID = Number.parseInt(status[2], 10)
        if ((imgElementID === lineIndex) && (routeID === route)) {
          name = 'flashing'
          imgSrc = IMG_DOT_FLASHING
          break
        }
      }

      const statusIcon = (
        <li>
          <Link to={`/station/${lineIndex}`}>
            <img
              className="line-station-dot"
              src={imgSrc}
              style={{ top: yTopPoint, left: xLeftPoint }}
              // onClick={() => ShowStatusMessage(this)}
              onMouseOver={this.handleMouseOverDot}
              onMouseOut={this.handleMouseOutDot}
              alt=""
              id={ctrlID}
              key={ctrlID}
              name={name}
            />
          </Link>
        </li>
      )

      dotEls.push(statusIcon)
    }

    return (
      <ul className="line-diagram-dots">
        {dotEls}
      </ul>
    )
  }

  renderStationName () {
    if (!this.state.stationLabel) return null

    return (
      <span className="line-station-label" style={this.state.stationLabelStyle}>
        {this.state.stationLabel}
      </span>
    )
  }

  render () {
    const lineId = this.props.match.params['line_id']

    if (!lineId) return null

    return (
      <div className="line-diagram">
        {this.renderDots(lineId)}
        {this.renderStationName()}
        <img src={paths[lineId.toUpperCase()]} />
      </div>
    )
  }
}
