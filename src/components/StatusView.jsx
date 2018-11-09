import React, { Component, Fragment } from 'react'
import './StatusView.css'

export default class StatusView extends Component {
  render () {
    return (
      <div className="status-view">
        <iframe width="230" height="430" src="//service.mta.info/ServiceStatus/status.html?widget=yes" scrolling="no"></iframe>
      </div>
    )
  }
}
