import React, { Component, Fragment } from 'react'
import SubwayLineSelector from './SubwayLineSelector'

export default class LineView extends Component {
  render () {
    return (
      <Fragment>
        <h2>All Stations <span className="heading-instructions">Select one for details</span></h2>

        <SubwayLineSelector />
        <hr />
      </Fragment>
    )
  }
}
