import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import StatusView from './StatusView'
import StationList from './StationList'
import StationView from './StationView'
import LineView from './LineView'
import BoroughView from './BoroughView'
import Legend from './Legend'
import LandingView from './LandingView'
import './InfoPanel.css'

export default class InfoPanel extends Component {
  state = {
    hasError: false,
    error: null
  }

  static getDerivedStateFromError (error) {
    return {
      hasError: true,
      error
    }
  }

  render () {
    if (this.state.hasError) {
      return (
        <div className="info-panel">
          <h2>An error occurred <span className="heading-instructions">Try reloading the page</span></h2>
        </div>
      )
    }

    return (
      <div className="info-panel">
        <Route path="/status" exact component={StatusView} />
        <Route path="/station" exact component={StationList} />
        <Route path="/station/:station_id" component={StationView} />
        <Route path="/line" exact component={LineView} />
        <Route path="/line/:line_id" component={LineView} />
        <Route path="/borough" exact component={BoroughView} />
        <Route path="/borough/:borough_id" exact component={BoroughView} />
        <Route path="/legend" exact component={Legend} />
        <Route path="/" exact component={LandingView} />
      </div>
    )
  }
}
