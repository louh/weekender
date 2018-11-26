import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import Downshift from 'downshift'
import SearchIcon from './SearchIcon'
import SubwayBullet from './SubwayBullet'
import STATIONS_LIST from '../stations'
import './StationList.css'

export class StationList extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)

    this.inputEl = React.createRef()
  }

  componentDidMount () {
    this.inputEl.current.focus()
  }

  renderBullets = (bullets) => {
    return bullets.map((line) => <SubwayBullet line={line} small key={line} />)
  }

  renderStationList = (getMenuProps, getItemProps, highlightedIndex, selectedItem, inputValue) => {
    // Display the whole list if there's no filter input
    // Otherwise filter the list based on input
    const list = STATIONS_LIST
      .filter((station) => !inputValue || station.label.toLowerCase().includes(inputValue))
      .map((station, index) => (
        <li {...getItemProps({
          key: station.id,
          index,
          item: station,
          className: (highlightedIndex === index || selectedItem === station) ? 'is-highlighted' : ''
        })}>
          <Link to={`/station/${station.id}`}>
            <span className="station-list-label">
              {station.label}
            </span>
            <span className="station-list-bullets">
              {this.renderBullets(station.lines)}
            </span>
          </Link>
        </li>
      ))

    if (list.length > 0) return (
      <ul className="station-list" {...getMenuProps()}>
        {list}
      </ul>
    )

    return <p className="station-list-empty"><strong>No stations found.</strong></p>
  }

  /**
   * TODO: optimize filter
   */
  render () {
    return (
      <Fragment>
        <h2>All stations <span className="heading-instructions">Select one for details</span></h2>

        <Downshift
          onChange={(station) => this.props.history.push(`/station/${station.id}`)}
          itemToString={(station) => (station && station.label) || ''}
        >
          {({
            getInputProps,
            getItemProps,
            getLabelProps,
            getMenuProps,
            inputValue,
            highlightedIndex,
            selectedItem,
          }) => (
            <div className="search-container">
              <div className="search-input">
                <label className="search-input-label" {...getLabelProps()}>
                  <SearchIcon className="search-icon" />
                </label>
                <input
                  type="text"
                  placeholder="Station name"
                  ref={this.inputEl}
                  {...getInputProps()}
                />
              </div>

              <div className="station-list-container">
                {this.renderStationList(getMenuProps, getItemProps, highlightedIndex, selectedItem, inputValue)}
              </div>
            </div>
          )}
        </Downshift>

      </Fragment>
    )
  }
}

export default withRouter(StationList)
