import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from './SearchIcon'
import SubwayBullet from './SubwayBullet'
import STATIONS_LIST from '../stations'
import './StationList.css'

export default class StationList extends Component {
  constructor (props) {
    super(props)

    this.inputEl = React.createRef()

    this.state = {
      value: ''
    }
  }

  componentDidMount () {
    this.inputEl.current.focus()
  }

  handleInputChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  renderBullets = (bullets) => {
    return bullets.map((line) => <SubwayBullet line={line} small key={line} />)
  }

  renderStationList = () => {
    const render = []

    STATIONS_LIST.forEach((station, id) => {
      const { label, lines } = station
      
      // Display the whole list if there's no filter input
      // Otherwise filter the list based on input
      if (!this.state.value || label.toLowerCase().indexOf(this.state.value.toLowerCase()) > -1) {
        render.push(
          <li key={id}>
            <Link to={`/station/${id}`}>
              <span className="station-list-label">
                {label}
              </span>
              <span className="station-list-bullets">
                {this.renderBullets(lines)}
              </span>
            </Link>
          </li>
        )
      }
    })
    
    return render
  }

  /**
   * TODO: make results accessible, e.g. with react-autosuggest
   * TODO: optimize filter
   */
  render () {
    return (
      <Fragment>
        <h2>All Stations <span className="heading-instructions">Select one for details</span></h2>

        <div className="search-input">
          <label htmlFor="search-input" className="search-input-label">
            <SearchIcon className="search-icon" />
          </label>
          <input
            type="text"
            placeholder="Station name"
            id="search-input"
            ref={this.inputEl}
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </div>

        <ul className="station-list">
          {this.renderStationList()}
        </ul>
      </Fragment>
    )
  }
}
