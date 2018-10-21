import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SubwayBullet from './SubwayBullet'

const SUBWAY_LINES = ['1', '2', '3', '4', '5', '6', '7', 'A', 'C', 'E', 'L', 'S', 'B', 'D', 'F', 'M', 'N', 'Q', 'R', 'W', 'J', 'Z', 'G', 'SIR']

export default class SubwayLineSelector extends Component {
  static propTypes = {
    onClick: PropTypes.func
  }

  constructor (props) {
    super(props)

    this.state = {
      selected: null
    }
  }

  handleClick = (event, line) => {
    event.preventDefault()

    this.setState({
      selected: line
    })

    this.props.onClick(line)
  }

  renderBullets () {
    return SUBWAY_LINES.map((line) => (
      <li key={line}>
        <a href="" onClick={(event) => this.handleClick(event, line)}>
          <SubwayBullet line={line} />
        </a>
      </li>
    ))
  }

  render () {
    return (
      <React.Fragment>
        <ul className="subway-lines">
          {this.renderBullets()}
        </ul>
        <div style={{ clear: 'both' }}></div>
      </React.Fragment>
    )
  }
}
