import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Downshift from 'downshift'
import SearchIcon from './SearchIcon'
import SubwayBullet from './SubwayBullet'
import STATIONS_LIST from '../stations'
import { setInitialView } from '../map'
import './StationList.css'

export class StationList extends Component {
  constructor (props) {
    super(props)

    this.inputEl = React.createRef()
  }

  componentDidMount () {
    this.inputEl.current.focus()
    setInitialView()
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

        <Downshift itemToString={(station) => (station && station.label) || ''}>
          {({
            getInputProps,
            getItemProps,
            getLabelProps,
            getMenuProps,
            getRootProps,
            inputValue,
            highlightedIndex,
            selectedItem,
          }) => (
            // When an item is selected, render a <Redirect /> in order to navigate to that station
            // <Redirect /> needs to push a new history entry, not override the current one
            selectedItem && <Redirect push to={`/station/${selectedItem.id}`} {...getRootProps({refKey: 'innerRef'})} />
          ) || (
            // Otherwise, render the filter list.
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

export default StationList
