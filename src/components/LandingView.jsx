import React, { Component, Fragment } from 'react'
import SubwayLineSelector from './SubwayLineSelector'
import './LandingView.css'

export default class LandingView extends Component {
  render () {
    return (
      <Fragment>
        <h2>All stations <span className="heading-instructions">Select one for details</span></h2>

        <SubwayLineSelector />
        <hr />

        <section className="landing">
          <h3>Welcome to the Weekender</h3>

          <p>The Weekender is your (unofficial) guide to understanding planned service changes in effect for system maintenance and construction on NYC’s subway system.</p>

          <p>This is not an official production of the MTA. This is a fan-made high-definition remaster of <a href="http://web.mta.info/weekender.html" target="_blank" rel="noopener noferrer">the original Weekender</a>.</p>

          <div className="landing-notice">
          🚨 <strong>DEPRECATION NOTICE</strong> 🚨
          <p>In October 2020, the MTA released its new <a href="https://map.mta.info/" target="_blank" rel="noopener noferrer">Live Subway Map</a> (<a href="https://www.curbed.com/2020/10/first-look-new-yorks-digital-subway-map-comes-alive-today.html" target="_blank" rel="noopener noferrer">read more about it</a>) which replaces the original Weekender. As of November 2020, the Weekender no longer received status updates. <strong>As a result, this proof of concept will similarly no longer be updated, and will be archived.</strong> It was fun while it lasted! 😇</p>

          <p><a href="https://github.com/louh/weekender" target="_blank" rel="noopener noferrer">You can check out the code here.</a></p>
          </div>
        </section>
      </Fragment>
    )
  }
}
