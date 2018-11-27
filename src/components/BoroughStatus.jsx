import React, { Component } from 'react'
import './BoroughStatus.css'

export default class BoroughStatus extends Component {
  render () {
    return (
      <div className="borough-status-container">
        <div className="info-panel">
          <h2>Planned service changes <span className="heading-instructions">Select one for details</span></h2>
          <hr />
        </div>
        <div className="info-panel">
          <h2>Details</h2>
          <hr />
        </div>
      </div>
    )
  }
}
