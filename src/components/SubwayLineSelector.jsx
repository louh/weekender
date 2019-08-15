import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SubwayBullet from './SubwayBullet'
import './SubwayLineSelector.css'

const SUBWAY_LINES = ['1', '2', '3', '4', '5', '6', '7', 'A', 'C', 'E', 'L', 'S', 'B', 'D', 'F', 'M', 'N', 'Q', 'R', 'W', 'J', 'Z', 'G', 'SIR']

export default class SubwayLineSelector extends Component {
  renderBullets () {
    return SUBWAY_LINES.map((line) => (
      <li key={line}>
        <Link to={`/line/${line.toLowerCase()}`}>
          <SubwayBullet line={line} />
        </Link>
      </li>
    ))
  }

  render () {
    return (
      <React.Fragment>
        <ul className="subway-lines">
          {this.renderBullets()}
        </ul>
        <div style={{ clear: 'both' }} />
      </React.Fragment>
    )
  }
}
